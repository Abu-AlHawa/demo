package com.example.demo.controllers;
import com.example.demo.entity.user;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.services.userService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.ArrayList;
import java.util.Optional;

@RestController
@Controller
public class userControl {
    @Autowired
    private userService userService;

    @PostMapping("/user/addUser")
    public @ResponseBody user addUser(@RequestBody user u) {
        System.out.println(u);

        return this.userService.addUser(u);

    }

    @GetMapping("/user/getAll")
    public @ResponseBody ArrayList<user> getAll() {
        return userService.getAll();
    }

    @GetMapping("/user/findUserId/{id}")
    public @ResponseBody Optional<user> findUserById(@PathVariable("id") Long id) {

        return userService.findUserById(id);
    }

    /* @GetMapping("/user/login/{name}/{password}")
    public @ResponseBody String login(@PathVariable("name") String name, @PathVariable("password") String password) {

        System.out.println("Name: "+name+" pass: "+password);

        return "Name: "+name+" pass: "+password;
    }

     */

    @GetMapping("/users/login/{email}/{password}")
    public @ResponseBody user login(@PathVariable("email") String email, @PathVariable("password") String password) {
        return userService.login(email, password);
    }



    @PutMapping("/update/{id}")
    public user updateUser(@PathVariable("id") Long id, @RequestBody user updatedUser) {
        System.out.println("i am an udated user control="+ updatedUser.getName()+updatedUser.getEmail());

        return  userService.updateUser(id, updatedUser);
    }

/*
    @DeleteMapping("/user/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        Optional<user> userOptional = userService.findUserById(id);
        if (userOptional.isPresent()) {
            userService.deleteUserById(id);
            return ResponseEntity.ok().body("تم حذف المستخدم بنجاح.");
        } else {
            return ResponseEntity.notFound().build();

 */

}