package certificate.management.com.example.Digital.Certificate.Management.System.repository;
import certificate.management.com.example.Digital.Certificate.Management.System.model.Certificate;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDateTime;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CertificateRepository extends JpaRepository<Certificate, Long> {
    // Add this new method to find certificates expiring soon
    @Query("SELECT c FROM Certificate c WHERE c.expiryDate BETWEEN ?1 AND ?2")
    List<Certificate> findCertificatesExpiringBetween(LocalDateTime start, LocalDateTime end);

    // Add this to find certificates with pending renewal status
    List<Certificate> findByStatus(String status);
}

