package com.skowron.superevent.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LoginController {

    
    @GetMapping("/login")
	public Principal user(Principal user) {
		return user;
    }

    @GetMapping("/logout")
	public String hoho() {
		return "hohoho";
    }
    // @GetMapping("/redirectafterlogout")
    // public RedirectView  logout() {
    //     RedirectView redirectView = new RedirectView();
    // redirectView.setUrl("http://localhost:4200/home");
    // return redirectView;
    // }
    
}