package certificate.management.com.example.Digital.Certificate.Management.System; // Adjust package as needed

import certificate.management.com.example.Digital.Certificate.Management.System.model.TestEntity;
import certificate.management.com.example.Digital.Certificate.Management.System.repository.TestRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final TestRepository testRepository;

    public DataLoader(TestRepository testRepository) {
        this.testRepository = testRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        TestEntity testEntity = new TestEntity();
        testEntity.setName("Test Name");
        testRepository.save(testEntity);
        System.out.println("Data saved successfully!");
    }
}
