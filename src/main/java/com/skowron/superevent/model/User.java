package com.skowron.superevent.model;

import java.util.List;

import javax.persistence.*;
@Entity
@Table(name = "user")
public class User {

    @Id
	@Column(name = "user_name")
	private String userName;

	@Column(name = "password")
	private String password;
    
    @ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.REFRESH})
	@JoinTable(name = "users_roles", 
	joinColumns = @JoinColumn(name = "user"), 
	inverseJoinColumns = @JoinColumn(name = "role"))
    private List<Role> roles;

    public User() {
	}

	public User(String userName, String password) {
		this.userName = userName;
		this.password = password;
	}

	public User(String userName, String password, List<Role> roles) {
		this.userName = userName;
		this.password = password;
		this.roles = roles;
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


}