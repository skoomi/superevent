package com.skowron.superevent.model;

import java.util.List;

import javax.persistence.*;
@Entity
@Table(name = "user")
public class User {

    @Id
    @Column(name = "id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

	@Column(name = "user_name")
	private String userName;

	@Column(name = "password")
	private String password;
    
    @ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.DETACH, CascadeType.REFRESH})
	@JoinTable(name = "users_roles", 
	joinColumns = @JoinColumn(name = "user"), 
	inverseJoinColumns = @JoinColumn(name = "role"))
    private List<Role> roles;

    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH})
	@JoinTable(name = "users_events", 
	joinColumns = @JoinColumn(name = "user"), 
	inverseJoinColumns = @JoinColumn(name = "event"))
    private List<MyEvent> events;

    public User() {
	}

	public User(Long id, String userName, String password) {
		this.id = id;
		this.userName = userName;
		this.password = password;
	}

	public User(Long id, String userName, String password, List<Role> roles, List<MyEvent> events) {
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.roles = roles;
		this.events = events;
	}

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return the userName
     */
    public String getUserName() {
        return userName;
    }

    /**
     * @param userName the userName to set
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * @return the password
     */
    public String getPassword() {
        return password;
    }

    /**
     * @param password the password to set
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return the roles
     */
    public List<Role> getRoles() {
        return roles;
    }

    /**
     * @param roles the roles to set
     */
    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    /**
     * @return the events
     */
    public List<MyEvent> getEvents() {
        return events;
    }

    /**
     * @param roles the roles to set
     */
    public void setEvents(List<MyEvent> events) {
        this.events = events;
    }
}