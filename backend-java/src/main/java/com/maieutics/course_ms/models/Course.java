package com.maieutics.course_ms.models;
import org.springframework.data.annotation.Id;

public class Course {
    @Id
    private String id_Course;
    private String title;
    private String description;
    private String workload;/*cantidad de horas*/
    private String topic;

    public Course(String id_Course, String title, String description, String workload, String topic) {
        this.id_Course = id_Course;
        this.title = title;
        this.description = description;
        this.workload = workload;
        this.topic = topic;
    }

    public String getId_Course() {
        return id_Course;
    }

    public void setId_Course(String id_Course) {
        this.id_Course = id_Course;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getWorkload() {
        return workload;
    }

    public void setWorkload(String workload) {
        this.workload = workload;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }
}