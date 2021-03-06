package com.skowron.superevent.service;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import com.skowron.superevent.dao.UserRepository;
import com.skowron.superevent.model.Role;
import com.skowron.superevent.model.User;

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
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    @Override
    @Transactional
    public void save(User user) {
        User newUser = new User();
        newUser.setUserName(user.getUserName());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));
        newUser.setRoles(user.getRoles());
        userRepository.save(newUser);
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(userName);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(),
                mapRolesToAuthorities(user.getRoles()));
    }

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getRoleName())).collect(Collectors.toList());
    }

    @Override
    public List<User> getAllUsers() {

        return userRepository.findAll();
    }

    @Override
    public void deleteUser(String userName) {
        // User user = userRepository.findByUserName(id);
        userRepository.deleteByUserName(userName);
    }

    @Override
    @Transactional
    public User updateUser(String userName, User user) throws Exception {
        if ( userName.equals(user.getUserName())) {
            System.out.println("userName == user.getUserName()");

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