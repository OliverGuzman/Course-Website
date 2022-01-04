package com.maieutics.course_ms.repositories;

import  com.maieutics.course_ms.models.Taken_Course;
import  org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface TakenCourseRepository extends MongoRepository<Taken_Course, Integer>{
    List<Taken_Course> findByUserIdFk(Integer userIdFk);
}
