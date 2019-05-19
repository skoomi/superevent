package com.skowron.superevent.controller;

import java.security.Principal;
import java.util.List;

import com.skowron.superevent.model.UserDto;
import com.skowron.superevent.model.UserEntity;
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
    public List<UserDto> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/users/{userName}")
    public UserDto getUser(@PathVariable String userName) {
        return userService.findByUserName(userName);
    }

    @PostMapping("/users")
    public void addUser(@RequestBody UserDto user) {

        try {
            userService.save(user);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
    
    @PutMapping("/users/{userName}")
    public void updateEvent(@PathVariable String userName, @RequestBody UserDto user) {
	    try {
            userService.updateUser(userName, user);
        } catch (Exception ex) {
            System.out.println(ex);
        }
    }

    // @DeleteMapping("/users/{userName}")
    // public void removeUser(@PathVariable String userName) {
	//     userService.deleteUser(userName);
    // }
    
}