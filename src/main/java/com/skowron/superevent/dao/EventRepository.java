package com.skowron.superevent.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.skowron.superevent.model.EventEntity;

// @CrossOrigin(origins = "http://localhost:4200")
public interface EventRepository extends JpaRepository<EventEntity, Long>{
}