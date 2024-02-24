package com.example.demo.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class user {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String Name;
    private int Age;
    private String Email;
    private String Address;
    private String Password;

    public user() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPassword() {
        return Password;
    }
    public void setPassword(String password) {
        this.Password = Password;
    }
    public String getName() {
        return Name;
    }

    public void setName(String Name) {
        this.Name = Name;
    }


    public int getAge() {
        return Age;
    }

    public void setAge(int age) {
        Age = age;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        this.Email = Email;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String Address) {
        this.Address = Address;
    }



    public user(long id,String Name, int Age, String Email, String Address, String Password) {
        this.id = id;
        this.Name = Name;
        this.Age = Age;
        this.Email = Email;
        this.Address = Address;
        this.Password = Password;
    }
}
