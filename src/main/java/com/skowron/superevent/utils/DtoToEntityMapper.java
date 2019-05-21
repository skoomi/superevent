package com.skowron.superevent.utils;

import java.util.ArrayList;
import java.util.List;

import com.skowron.superevent.model.EventEntity;
import com.skowron.superevent.model.EventSimple;
import com.skowron.superevent.model.UserDto;
import com.skowron.superevent.model.UserEntity;
import com.skowron.superevent.service.EventService;
import com.skowron.superevent.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class DtoToEntityMapper {

    @Autowired
    private final UserService userService;
    
    @Autowired
    private final EventService eventService;

    public DtoToEntityMapper(UserService userService, EventService eventService) {
        this.userService = userService;
        this.eventService = eventService;
    }

    public UserEntity UserDtoToUserEntity(UserDto userDto) {
        UserEntity userEntity = new UserEntity(userDto);
        List<EventEntity> eventEntities = new ArrayList<EventEntity>();
        for(EventSimple event: userDto.getEvents()) {
            eventEntities.add(eventService.getEvent(event.getId()));
        }
        userEntity.setEvents(eventEntities);
        

        return userEntity;
    }
}