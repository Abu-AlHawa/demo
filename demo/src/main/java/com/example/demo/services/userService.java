package com.example.demo.services;

import com.example.demo.entity.user;
import com.example.demo.repositories.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class userService {
    @Autowired
    private userRepository repository;

    public user addUser(user u)
    {
        return repository.save(u);
    }


//    public user findByName(String name)
//    {
//        return this.userRepository.findUserByName(name);
//    }

    public ArrayList<user> getAll()
    {
        return (ArrayList<user>) repository.findAll();
    }
    public Optional<user> findUserById(Long id)
    {
        return repository.findById(id);
    }

public user login(String email, String password) {

                                      System.out.println("Email: "+email+" Password: "+password);

        ArrayList<user> myList = (ArrayList<user>) repository.findAll();
    System.out.println(myList.size());

        for (int i = 0; i < myList.size(); i++) {
            try {
                if ((myList.get(i).getEmail().equals(email) || myList.get(i).getName().equals(email)) && myList.get(i).getPassword().equals(password)) {
                    System.out.println(myList.get(i).getPassword());
                    return myList.get(i);
                }
            } catch(Exception e)   { ; } 
        }
        System.out.println(myList.get(0).getPassword());
        return new user();

    }


   public user updateUser(Long id, user updateduser) {

//       System.out.println("i am an udated user="+ updateduser.getName()+updateduser.getEmail());
       user existinguser = repository.findById(id)
               .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        existinguser.setName(updateduser.getName());
       existinguser.setAddress(updateduser.getAddress());
       existinguser.setEmail(updateduser.getEmail());
       existinguser.setPassword(updateduser.getPassword());
       return repository.save(existinguser);
    }
    

}