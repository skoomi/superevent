package com.skowron.superevent;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

import com.skowron.superevent.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.authentication.AuthenticationManagerBeanDefinitionParser;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Autowired
    private UserService userService;
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        // UserBuilder users = User.withDefaultPasswordEncoder();
        // auth.inMemoryAuthentication()
        //     .withUser(users.username("user").password("user").roles("USER"))
        //     .withUser(users.username("emp").password("emp").roles("USER", "EMPLOYEE"))
        //     .withUser(users.username("admin").password("admin").roles("USER", "EMPLOYEE", "ADMIN"));
            // auth.jdbcAuthentication().dataSource(dataSource);
            auth.authenticationProvider(authenticationProvider());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().httpBasic().and()
        .authorizeRequests()
        .antMatchers("/home", "/api/login", "/api/logout").permitAll()
        .antMatchers(HttpMethod.GET, "/api/events").permitAll()
        .antMatchers(HttpMethod.POST, "/api/events").hasAnyRole("EMPLOYEE", "ADMIN")
        .antMatchers(HttpMethod.PUT, "/api/events/**").hasAnyRole("EMPLOYEE", "ADMIN")
        .antMatchers(HttpMethod.DELETE, "/api/events/**").hasAnyRole("EMPLOYEE", "ADMIN")
        .antMatchers(HttpMethod.POST, "/api/users").permitAll()
        .anyRequest().authenticated().and()
        .logout().permitAll().logoutUrl("/api/logout").logoutSuccessHandler(new LogoutSuccessHandler() {
            @Override
            public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response,
                    Authentication authentication) throws IOException, ServletException {
                response.addHeader("logoutStatus", "success");
            }
        }).invalidateHttpSession(true).clearAuthentication(true).deleteCookies("JSESSIONID").and()
        // .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
        .csrf().disable();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider auth = new DaoAuthenticationProvider();
        auth.setUserDetailsService(userService);
        auth.setPasswordEncoder(passwordEncoder());
        return auth;
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new
                UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", new CorsConfiguration().applyPermitDefaultValues());
        return source;
    }
}