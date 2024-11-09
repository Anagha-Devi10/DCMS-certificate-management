package certificate.management.com.example.Digital.Certificate.Management.System.service;

import certificate.management.com.example.Digital.Certificate.Management.System.model.Certificate;
import certificate.management.com.example.Digital.Certificate.Management.System.repository.CertificateRepository;
import certificate.management.com.example.Digital.Certificate.Management.System.dto.CertificateStatistics;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class CertificateService {

    @Autowired
    private CertificateRepository certificateRepository;

    public List<Certificate> getAllCertificates() {
        return certificateRepository.findAll();
    }

    public Optional<Certificate> getCertificateById(Long id) {
        return certificateRepository.findById(id);
    }

    @Transactional
    public Certificate saveCertificate(Certificate certificate) {
        return certificateRepository.save(certificate);
    }

    public void deleteCertificate(Long id) {
        certificateRepository.deleteById(id);
    }

    public CertificateStatistics getStatistics() {
        // Get total certificates
        long total = certificateRepository.count();

        // Get certificates expiring in next 30 days
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime thirtyDaysFromNow = now.plusDays(30);
        long expiringSoon = certificateRepository
                .findCertificatesExpiringBetween(now, thirtyDaysFromNow)
                .size();

        // Get pending renewals
        long pendingRenewals = certificateRepository
                .findByStatus("PENDING_RENEWAL")
                .size();

        return new CertificateStatistics(total, expiringSoon, pendingRenewals);
    }
}