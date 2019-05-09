package com.skowron.superevent.service;

import java.util.List;

import com.skowron.superevent.model.User;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    User findByUserName(String userName);
    void save(User user);
    List<User> getAllUsers();
    void deleteUser(String userName);
    User updateUser(String userName, User user) throws Exception;
}