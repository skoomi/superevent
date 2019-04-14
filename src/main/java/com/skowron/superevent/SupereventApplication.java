package com.skowron.superevent;

import java.security.Principal;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
@RestController
// @CrossOrigin(origins = "http://localhost:4200")
public class SupereventApplication {

	public static void main(String[] args) {
		SpringApplication.run(SupereventApplication.class, args);
	}

  // @Configuration
  // public class MyConfiguration {
  
  //   @Bean
  //   public FilterRegistrationBean corsFilter() {
  //     UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
  //     CorsConfiguration config = new CorsConfiguration();
  //     config.setAllowCredentials(true);
  //     config.addAllowedOrigin("http://localhost:4200");
  //     config.addAllowedHeader("*");
  //     config.addAllowedMethod("*");
  //     source.registerCorsConfiguration("/**", config);
  //     FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
  //     bean.setOrder(0);
  //     return bean;
  //   }
  // }

}
