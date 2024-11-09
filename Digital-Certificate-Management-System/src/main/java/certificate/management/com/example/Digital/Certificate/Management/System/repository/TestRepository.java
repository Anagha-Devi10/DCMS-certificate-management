package certificate.management.com.example.Digital.Certificate.Management.System.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import certificate.management.com.example.Digital.Certificate.Management.System.model.TestEntity;

public interface TestRepository extends JpaRepository<TestEntity, Long> {}

