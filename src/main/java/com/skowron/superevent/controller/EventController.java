package com.skowron.superevent.controller;

import java.util.ArrayList;
import java.util.List;

import com.skowron.superevent.model.MyEvent;
import com.skowron.superevent.service.MyEventService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class EventController {

    @Autowired
    private final MyEventService myEventService;

    public EventController(MyEventService myEventService) {
        this.myEventService = myEventService;
    }

    private List<MyEvent> hardcodedTestEvents = hardcodeList();

    @GetMapping("/events")
	  public List<MyEvent> getAllEvents() {
		return myEventService.getAllEvents();
    }

    @PostMapping("/events")
    public MyEvent addEvent(@RequestBody MyEvent myEvent) {
		return myEventService.addEvent(myEvent);
    }
    
    @PostMapping("/secret")
    public void addHardcodedTestEvents(@RequestBody String str) {
		myEventService.addEvents(hardcodedTestEvents);
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
        event1.setImgPath("assets/img/java-logo.jpg");
        
        MyEvent event2 = new MyEvent();
        event2.setId(2l);
        event2.setName("Event2");
        event2.setPrice(999.99);
        event2.setShortDescription("Krotki opis2");
        event2.setTimetable("pn-pt 08-16");
        event2.setDescription("Dlugi opis jest dluzszy niz krotki");
        event2.setLessons(25);
        event2.setImgPath("https://4.imimg.com/data4/JH/GT/GLADMIN-10326294/wp-content-uploads-2015-11-advance-java-affy-250x250.jpg");

        tempEvents.add(event1);
        tempEvents.add(event2);
        return tempEvents;
    }
}