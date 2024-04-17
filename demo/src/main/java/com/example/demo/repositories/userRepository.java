package com.example.demo.repositories;

import com.example.demo.entity.user;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<user, Long> {
//    @Query("SELECT user FROM user u WHERE u.userName = :name")
//    public user findUserByName(String name);
}



