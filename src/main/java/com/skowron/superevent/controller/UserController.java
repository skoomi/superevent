package com.skowron.superevent.controller;

import java.security.Principal;

import com.skowron.superevent.model.User;
import com.skowron.superevent.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    // @GetMapping("/user")
	// public Principal user(Principal user) {
	// 	return user;
    // }

    @PostMapping("/users")
	public void addUser(@RequestBody User user) throws Exception {

        User existing = userService.findByUserName(user.getUserName());
        if (existing != null){
            throw new Exception("User already exists");
        }
        userService.save(user);
    }
    
}