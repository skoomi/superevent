package com.skowron.superevent.utils;

import java.util.ArrayList;
import java.util.List;

import com.skowron.superevent.model.EventDto;
import com.skowron.superevent.model.EventEntity;
import com.skowron.superevent.model.EventSimple;
import com.skowron.superevent.model.UserDto;
import com.skowron.superevent.model.UserEntity;
import com.skowron.superevent.model.UserSimple;

public class EntitiesToDtoMapper {

    public static EventDto EventEntityToEventDto(EventEntity eventEntity) {
        EventDto eventDto = new EventDto(eventEntity);
        List<UserSimple> usersSimple = new ArrayList<UserSimple>();
        
        for(UserEntity userEntity: eventEntity.getUsers()) {
            usersSimple.add(new UserSimple(userEntity));
        }
        eventDto.setUsers(usersSimple);

        return eventDto;
    }

    public static UserDto UserEntityToUserDto(UserEntity userEntity) {
        if(userEntity == null) {
            return null;
        }
        UserDto userDto = new UserDto(userEntity);
        List<EventSimple> eventsSimple = new ArrayList<EventSimple>();
        
        for(EventEntity eventEntity: userEntity.getEvents()) {
            eventsSimple.add(new EventSimple(eventEntity));
        }
        userDto.setEvents(eventsSimple);

        return userDto;
    }
}

