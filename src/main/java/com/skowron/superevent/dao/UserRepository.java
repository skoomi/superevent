package com.skowron.superevent.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.skowron.superevent.model.UserEntity;

// @CrossOrigin(origins = "http://localhost:4200")
public interface UserRepository extends JpaRepository<UserEntity, String>{
//	Page<Product> findByBillId(Long billId, Pageable pageable);
    UserEntity findByUserName(String userName);
    void deleteByUserName(String userName);
}