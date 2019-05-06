package com.skowron.superevent.service;

import com.skowron.superevent.model.User;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    User findByUserName(String userName);
    void save(User user);
   
}