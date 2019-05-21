package com.skowron.superevent.service;

import java.util.List;

import com.skowron.superevent.model.UserDto;

import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    UserDto findByUserName(String userName);
    void save(UserDto user) throws Exception;
    List<UserDto> getAllUsers();
    // void deleteUser(String userName);
    // UserDto updateUser(String userName, UserDto user) throws Exception;
}