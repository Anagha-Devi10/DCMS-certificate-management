package certificate.management.com.example.Digital.Certificate.Management.System;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.context.annotation.Bean;

@Configuration
public class SecurityConfig {

      @Bean
      public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
          http
                  .authorizeHttpRequests(auth -> auth.anyRequest().permitAll())
                  .csrf(csrf -> csrf.disable())
                  .httpBasic(httpBasic -> httpBasic.disable())  // Disables HTTP Basic Authentication
                  .formLogin(form -> form.disable());           // Disables form login

          return http.build();
      }
}
