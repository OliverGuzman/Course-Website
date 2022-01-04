package com.maieutics.course_ms.models;
import java.util.Date;
import org.springframework.data.annotation.Id;

public class  Taken_Course {
    @Id
    private Integer id;
    private Integer userIdFk;
    private Date date_of_Taken;
    private Date dateOf_completion;
    private Integer grade;
    private Integer progress;
    private String object_id_Course;

    public Taken_Course(Integer id, Integer userIdFk, Date date_of_Taken, Date dateOf_completion,
                        Integer grade, Integer progress, String object_id_Course) {
        this.id = id;
        this.userIdFk = userIdFk;
        this.date_of_Taken = date_of_Taken;
        this.dateOf_completion = dateOf_completion;
        this.grade = grade;
        this.progress = progress;
        this.object_id_Course = object_id_Course;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId_FK() {
        return userIdFk;
    }

    public void setUserId_FK(Integer userId_FK) {
        this.userIdFk = userId_FK;
    }

    public Date getDate_of_Taken() {
        return date_of_Taken;
    }

    public void setDate_of_Taken(Date date_of_Taken) {
        this.date_of_Taken = date_of_Taken;
    }

    public Date getDateOf_completion() {
        return dateOf_completion;
    }

    public void setDateOf_completion(Date dateOf_completion) {
        this.dateOf_completion = dateOf_completion;
    }

    public Integer getGrade() {
        return grade;
    }

    public void setGrade(Integer grade) {
        this.grade = grade;
    }

    public Integer getProgress() {
        return progress;
    }

    public void setProgress(Integer progress) {
        this.progress = progress;
    }

    public String getobject_id_Course() {
        return object_id_Course;
    }

    public void setobject_id_Course(String object_id_Course) {
        this.object_id_Course = object_id_Course;
    }
}