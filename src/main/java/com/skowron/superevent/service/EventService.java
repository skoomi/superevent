package com.skowron.superevent.service;

import java.util.ArrayList;
import java.util.List;

import com.skowron.superevent.dao.EventRepository;
import com.skowron.superevent.model.EventDto;
import com.skowron.superevent.model.EventEntity;
import com.skowron.superevent.model.UserEntity;
import com.skowron.superevent.model.UserSimple;
import com.skowron.superevent.utils.EntitiesToDtoMapper;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventService {

    private final EventRepository eventRepository;

    // private final ModelMapper modelMapper;

    @Autowired
    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
        // this.modelMapper = modelMapper;
    }

    public List<EventDto> getAllEvents() {
        List<EventEntity> eventEntities = eventRepository.findAll();
        List<EventDto> eventDtos = new ArrayList<EventDto>();

        for(EventEntity eventEntity: eventEntities) {
            eventDtos.add(EntitiesToDtoMapper.EventEntityToEventDto(eventEntity));
        }

        return eventDtos;
    }

    // public MyEvent addEvent(MyEvent myEvent) {
    //     return myEventRepository.save(myEvent);
    // }
    // public void addEvents(List<MyEvent> myEventList) {
    //     myEventRepository.saveAll(myEventList);
    // }
    // public void removeEvent(Long id) {
    //     myEventRepository.deleteById(id);
    // }

	// public MyEvent editEvent(Long id, MyEvent myEvent) {
    //     // MyEvent temp = myEventRepository.getOne(id);
    //     // temp.se
    //     return myEventRepository.save(myEvent);
	// }
}