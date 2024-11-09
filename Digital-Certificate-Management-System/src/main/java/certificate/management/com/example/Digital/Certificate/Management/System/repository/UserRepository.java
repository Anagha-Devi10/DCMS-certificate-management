package certificate.management.com.example.Digital.Certificate.Management.System.repository;

import certificate.management.com.example.Digital.Certificate.Management.System.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    boolean existsByUsername(String username);
}