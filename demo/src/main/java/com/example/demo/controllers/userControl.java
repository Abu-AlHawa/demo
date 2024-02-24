package com.example.demo.controllers;
import com.example.demo.entity.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.services.userService;

import java.util.ArrayList;
import java.util.Optional;

@RestController
public class userControl {
    @Autowired
    private userService userService;

    @PostMapping("/user/addUser")
    public @ResponseBody user addUser(@RequestBody user u) {
        return this.userService.addUser(u);
    }
@GetMapping("/user/getall")
public @ResponseBody ArrayList<user> getAll() { return userService.getAll();}

    @GetMapping("/user/findUserId/{id}")
    public @ResponseBody Optional<user> findUserById(@PathVariable Long id)
    {
        return userService.findUserById(id);
    }
}

