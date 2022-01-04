package com.maieutics.course_ms.controllers;

import com.maieutics.course_ms.exception.CourseNotFoundException;
import com.maieutics.course_ms.models.Course;
import com.maieutics.course_ms.repositories.CourseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class CourseController {
    private final CourseRepository courseRepository;

    public CourseController(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    @GetMapping("/Courses/{id_Course}")
    Course getCourse(@PathVariable String id_Course){
        return courseRepository.findById(id_Course)
                .orElseThrow(()-> new CourseNotFoundException("No se encontro el curso ingresado."+ id_Course));
    }
    @GetMapping("/AvailableCourses")
    List<Course> getAllCourses(){
        List<Course> listCourse = courseRepository.findAll();
        return listCourse;
    }
    @GetMapping("/FilteredCourses/{topic}")
    List<Course> getFilteredCourses(@PathVariable String topic){
        List<String> topicString= Arrays.asList(topic.split(","));
        List<Course> finalList = new ArrayList<>();
        for (String x: topicString){
            finalList.addAll(courseRepository.findByTopic(x));
        }
        return finalList;
    }

}
