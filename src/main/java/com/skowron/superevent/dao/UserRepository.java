package com.skowron.superevent.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.skowron.superevent.model.User;

// @CrossOrigin(origins = "http://localhost:4200")
public interface UserRepository extends JpaRepository<User, Long>{
//	Page<Product> findByBillId(Long billId, Pageable pageable);
    User findByUserName(String userName);
}