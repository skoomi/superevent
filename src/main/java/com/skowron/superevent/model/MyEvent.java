package com.skowron.superevent.model;

public class MyEvent {

    private Long id;
    private String name;
    private double price;
    private int lessons;
    private String timetable;
    private String shortDescription;
    private String description;

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
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * @param name the name to set
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * @return the price
     */
    public double getPrice() {
        return price;
    }

    /**
     * @param price the price to set
     */
    public void setPrice(double price) {
        this.price = price;
    }

    /**
     * @return the lessons
     */
    public int getLessons() {
        return lessons;
    }

    /**
     * @param lessons the lessons to set
     */
    public void setLessons(int lessons) {
        this.lessons = lessons;
    }

    /**
     * @return the timetable
     */
    public String getTimetable() {
        return timetable;
    }

    /**
     * @param timetable the timetable to set
     */
    public void setTimetable(String timetable) {
        this.timetable = timetable;
    }

    /**
     * @return the shortDescription
     */
    public String getShortDescription() {
        return shortDescription;
    }

    /**
     * @param shortDescription the shortDescription to set
     */
    public void setShortDescription(String shortDescription) {
        this.shortDescription = shortDescription;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    

}