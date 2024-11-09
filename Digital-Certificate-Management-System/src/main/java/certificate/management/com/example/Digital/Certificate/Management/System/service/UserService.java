package certificate.management.com.example.Digital.Certificate.Management.System.service;

import certificate.management.com.example.Digital.Certificate.Management.System.model.User;
import certificate.management.com.example.Digital.Certificate.Management.System.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Service
public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public User saveUser(User user) {
        try {
            logger.info("Attempting to save user: {}", user.getUsername());
            // Check if username already exists
            if (userRepository.findByUsername(user.getUsername()) != null) {
                logger.warn("Username already exists: {}", user.getUsername());
                throw new RuntimeException("Username already exists");
            }
            User savedUser = userRepository.save(user);
            logger.info("Successfully saved user: {}", user.getUsername());
            return savedUser;
        } catch (Exception e) {
            logger.error("Error saving user: {}", e.getMessage());
            throw new RuntimeException("Failed to save user: " + e.getMessage());
        }
    }

    public User getUserByUsername(String username) {
        try {
            logger.info("Fetching user by username: {}", username);
            User user = userRepository.findByUsername(username);
            if (user == null) {
                logger.warn("No user found with username: {}", username);
            }
            return user;
        } catch (Exception e) {
            logger.error("Error fetching user by username: {}", e.getMessage());
            throw new RuntimeException("Failed to fetch user: " + e.getMessage());
        }
    }

    public List<User> getAllUsers() {
        try {
            logger.info("Fetching all users");
            return userRepository.findAll();
        } catch (Exception e) {
            logger.error("Error fetching all users: {}", e.getMessage());
            throw new RuntimeException("Failed to fetch users: " + e.getMessage());
        }
    }

    public boolean validateUserCredentials(String username, String password) {
        logger.info("Validating credentials for user: {}", username);
        User user = getUserByUsername(username);
        return user != null && user.getPassword().equals(password);
    }
}