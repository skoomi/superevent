package com.skowron.superevent.controller;

import java.util.ArrayList;
import java.util.List;

import com.skowron.superevent.model.MyEvent;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/events")
public class EventController {

    private List<MyEvent> events = hardcodeList();

    @GetMapping
	public List<MyEvent> getAllEvents() {
		return events;
    }



    private static List<MyEvent> hardcodeList() {
        List<MyEvent> tempEvents = new ArrayList<>();
        MyEvent event1 = new MyEvent();
        event1.setId(1l);
        event1.setName("Event1");
        event1.setPrice(99.99);
        event1.setShortDescription("Krotki opis");
        event1.setTimetable("pn-pt 10-18");
        event1.setDescription("Dlugi opis jest dluzszy niz krotki");
        event1.setLessons(12);

        tempEvents.add(event1);
        return tempEvents;
    }
}