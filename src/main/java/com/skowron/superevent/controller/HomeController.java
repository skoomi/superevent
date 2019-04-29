package com.skowron.superevent.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

@RestController
@RequestMapping("/api")
public class HomeController {

    @GetMapping("/ho")
	public RedirectView ho() {
		return new RedirectView("login");
    }
    @PostMapping("/hoho")
	public String hoho() {
		return "hohoho";
    }
}