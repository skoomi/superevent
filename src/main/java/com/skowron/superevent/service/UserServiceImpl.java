package com.skowron.superevent.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import com.skowron.superevent.dao.EventRepository;
import com.skowron.superevent.dao.UserRepository;
import com.skowron.superevent.model.EventEntity;
import com.skowron.superevent.model.EventSimple;
import com.skowron.superevent.model.RoleEntity;
// import com.skowron.superevent.model.Role;
import com.skowron.superevent.model.UserDto;
import com.skowron.superevent.model.UserEntity;
import com.skowron.superevent.utils.EntitiesToDtoMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public UserDto findByUserName(String userName) {
        UserEntity userEntity = userRepository.findByUserName(userName);
        if(userEntity == null) {
            return null;
        }
        System.out.println(userEntity);
        UserDto userDto = EntitiesToDtoMapper.UserEntityToUserDto(userEntity);
        return userDto;
    }

    @Override
    @Transactional
    public void save(UserDto user) throws Exception  {
        UserDto existing = findByUserName(user.getUserName());
        if (existing != null){
            throw new Exception("User already exists");
        }
        UserEntity newUser = new UserEntity();
        newUser.setUserName(user.getUserName());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setRoles(user.getRoles());

        userRepository.save(newUser);
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByUserName(userName);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(),
                mapRolesToAuthorities(user.getRoles()));
    }

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<RoleEntity> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getRoleName())).collect(Collectors.toList());
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<UserEntity> userEntities = userRepository.findAll();
        List<UserDto> userDtos = new ArrayList<UserDto>();

        for(UserEntity userEntity: userEntities) {
            userDtos.add(EntitiesToDtoMapper.UserEntityToUserDto(userEntity));
        }

        return userDtos;
    }

    // @Override
    // public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    //     return null;
    // }

    // @Override
    // public void deleteUser(String userName) {
    //     // User user = userRepository.findByUserName(id);
    //     userRepository.deleteByUserName(userName);
    // }

    @Override
    @Transactional
    public UserDto updateUser(String userName, UserDto user) throws Exception {
        if ( userName.equals(user.getUserName())) {
            System.out.println("userName == user.getUserName()");
            UserEntity newUser = new UserEntity();
            return userRepository.save(user);
        }
        else {
            System.out.println("userName != user.getUserName()");

            User existing = findByUserName(user.getUserName());
            if (existing != null){
                throw new Exception("User with given userName already exists!");
            }
            User oldUser = userRepository.getOne(userName);
            userRepository.deleteByUserName(oldUser.getUserName());
            return userRepository.save(user);
        }

    }
    
    


}