package com.skowron.superevent.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// @CrossOrigin(origins = "http://localhost:4200")
public class LoginController {

    
    @GetMapping("/login")
	public Principal user(Principal user) {
		return user;
    }
    
    
}