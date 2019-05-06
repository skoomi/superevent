package com.skowron.superevent.service;

import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;

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
    // need to inject user dao
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    // @Transactional
    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }

    @Override
    // @Transactional
    public void save(User user) {
        User newUser = new User();
        // assign user details to the user object
        newUser.setUserName(user.getUserName());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));

        // give user default role of "employee"
        newUser.setRoles(Arrays.asList(new Role("ROLE_USER")));
        // save user in the database
        userRepository.save(newUser);
    }

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(userName);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), mapRolesToAuthorities(user.getRoles()));
    }
    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }


}