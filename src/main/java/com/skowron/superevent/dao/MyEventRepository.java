package com.skowron.superevent.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.skowron.superevent.model.MyEvent;

// @CrossOrigin(origins = "http://localhost:4200")
public interface MyEventRepository extends JpaRepository<MyEvent, Long>{
//	Page<Product> findByBillId(Long billId, Pageable pageable);
}