package com.example.demo.entity;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class user {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @Column(name = "email", unique = true, nullable = false)
    private String email;
    private String address;
    private String password;

    public user() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public user(String name, String email, String address, String password) {

        this.name = name;
        this.email = email;
        this.address = address;
        this.password = password;
    }

    @Override
    public String toString() {
        return "user{" +
                "id=" + id +
                ", Name='" + name + '\'' +
                ", Email='" + email + '\'' +
                ", Address='" + address + '\'' +
                ", Password='" + password + '\'' +
                '}';
    }
}
