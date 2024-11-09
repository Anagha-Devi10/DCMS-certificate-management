package certificate.management.com.example.Digital.Certificate.Management.System.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.time.LocalDateTime;

@Entity
@Table(name = "certificates")
@CrossOrigin(origins = "http://localhost:3000")
public class Certificate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Renamed and added fields
    private String serialNumber;  // Renamed from certificateName
    private String subject;
    private String issuer;
    private LocalDateTime expiryDate;
    private String status;

    // Constructors
    public Certificate() {}

    public Certificate(String serialNumber, String subject, String issuer, LocalDateTime expiryDate, String status) {
        this.serialNumber = serialNumber;
        this.subject = subject;
        this.issuer = issuer;
        this.expiryDate = expiryDate;
        this.status = status;
    }

    // Getters and Setters (modified for new fields)
    // ... (same as before, update for new fields)
    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getIssuer(){
        return issuer;
    }

    public void setIssuer(String issuer){
        this.issuer=issuer;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public LocalDateTime getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(LocalDateTime expiryDate) {
        this.expiryDate = expiryDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}