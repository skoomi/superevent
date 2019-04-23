package com.skowron.superevent.service;

import java.util.List;

import com.skowron.superevent.dao.MyEventRepository;
import com.skowron.superevent.model.MyEvent;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MyEventService {

    private final MyEventRepository myEventRepository;

    @Autowired
    public MyEventService(MyEventRepository myEventRepository) {
        this.myEventRepository = myEventRepository;
    }

    public List<MyEvent> getAllEvents() {
		return myEventRepository.findAll();
    }

    public MyEvent addEvent(MyEvent myEvent) {
        return myEventRepository.save(myEvent);
    }
}