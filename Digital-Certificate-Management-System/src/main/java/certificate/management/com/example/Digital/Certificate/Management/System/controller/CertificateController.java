package certificate.management.com.example.Digital.Certificate.Management.System.controller;

import certificate.management.com.example.Digital.Certificate.Management.System.model.Certificate;
import certificate.management.com.example.Digital.Certificate.Management.System.service.CertificateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/certificates")
@CrossOrigin(origins = "http://localhost:3000") // Allow React frontend to access this backend
public class CertificateController {

    @Autowired
    private CertificateService certificateService;

    @GetMapping
    public List<Certificate> getAllCertificates() {
        return certificateService.getAllCertificates();
    }

    @PostMapping
    public Certificate createCertificate(@RequestBody Certificate certificate) {
        // Handle potential Date conversion (if applicable)
/*
        if (certificate.getExpiryDate() != null) {
            // Convert from LocalDateTime to java.util.Date if needed
            certificate.setExpiryDate(java.time.LocalDateTime.from(certificate.getExpiryDate().toInstant(java.time.ZoneOffset.UTC)));
        }*/
        return certificateService.saveCertificate(certificate);
    }


    @DeleteMapping("/{id}")
    public void deleteCertificate(@PathVariable Long id) {
        certificateService.deleteCertificate(id);
    }
}

