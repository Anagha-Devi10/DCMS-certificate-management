package certificate.management.com.example.Digital.Certificate.Management.System.repository;
import certificate.management.com.example.Digital.Certificate.Management.System.model.Certificate;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface CertificateRepository extends JpaRepository<Certificate, Long> {
}

