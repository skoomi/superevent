package com.skowron.superevent.controller;

import java.security.Principal;
import java.util.List;

import com.skowron.superevent.model.User;
import com.skowron.superevent.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/users")
	public void addUser(@RequestBody User user) throws Exception {
        User existing = userService.findByUserName(user.getUserName());
        if (existing != null){
            throw new Exception("User already exists");
        }
        userService.save(user);
    }
    
    @PutMapping("/users/{userName}")
    public void updateEvent(@PathVariable String userName, @RequestBody User user) {
	    try {
            userService.updateUser(userName, user);
        } catch (Exception ex) {
            System.out.println(ex);
        }
    }

    @DeleteMapping("/users/{userName}")
    public void removeUser(@PathVariable String userName) {
	    userService.deleteUser(userName);
    }
    
}