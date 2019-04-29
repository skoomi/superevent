package com.skowron.superevent;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().httpBasic().and()
        .authorizeRequests()
        .antMatchers(HttpMethod.OPTIONS, "/home", "/api/login", "/api/logout", "/api/logout2").permitAll()
        .anyRequest().authenticated().and()
        .logout().permitAll().logoutSuccessHandler(new LogoutSuccessHandler() {
            
            @Override
            public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response,
                    Authentication authentication) throws IOException, ServletException {
                System.out.println("W koncu sie udalo?");
                response.addHeader("logoutStatus", "success");
            }
        }).and()
        // .logout().invalidateHttpSession(true).clearAuthentication(true).deleteCookies("JSESSIONID").logoutUrl("/api/logout")
        // .logoutSuccessUrl("/api/logout2").and()
        // .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
        .csrf().disable();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new
                UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }
}