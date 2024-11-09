package certificate.management.com.example.Digital.Certificate.Management.System.dto;

public class CertificateStatistics {
    private long totalCertificates;
    private long expiringSoon;
    private long pendingRenewals;

    // Constructor
    public CertificateStatistics(long totalCertificates, long expiringSoon, long pendingRenewals) {
        this.totalCertificates = totalCertificates;
        this.expiringSoon = expiringSoon;
        this.pendingRenewals = pendingRenewals;
    }

    // Default constructor
    public CertificateStatistics() {
    }

    // Getters and Setters
    public long getTotalCertificates() {
        return totalCertificates;
    }

    public void setTotalCertificates(long totalCertificates) {
        this.totalCertificates = totalCertificates;
    }

    public long getExpiringSoon() {
        return expiringSoon;
    }

    public void setExpiringSoon(long expiringSoon) {
        this.expiringSoon = expiringSoon;
    }

    public long getPendingRenewals() {
        return pendingRenewals;
    }

    public void setPendingRenewals(long pendingRenewals) {
        this.pendingRenewals = pendingRenewals;
    }
}
