package com.maieutics.course_ms.controllers;

import com.maieutics.course_ms.models.Course;
import com.maieutics.course_ms.models.Taken_Course;
import com.maieutics.course_ms.repositories.CourseRepository;
import com.maieutics.course_ms.repositories.TakenCourseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TakenCourseController {
    private final CourseRepository courseRepository;
    private final TakenCourseRepository takenCourseRepository;

    public TakenCourseController(CourseRepository courseRepository, TakenCourseRepository takenCourseRepository) {
        this.courseRepository = courseRepository;
        this.takenCourseRepository = takenCourseRepository;
    }

    @PostMapping("/subscribe")
    Taken_Course newTaken_Course(@RequestBody Taken_Course taken_course){
        return takenCourseRepository.save(taken_course);
    }
    @PutMapping("/UpdateProgress")
    Taken_Course updateProgress(@RequestBody Taken_Course progressUpdate){
        Taken_Course takenCourse = this.takenCourseRepository.findById(progressUpdate.getId()).orElse(null);
        takenCourse.setProgress(progressUpdate.getProgress());
        return takenCourseRepository.save(takenCourse);
    }
    @PutMapping("/CompleteCourse")
    Taken_Course completeCourse(@RequestBody Taken_Course courseComplete){
        Taken_Course takenCourse = this.takenCourseRepository.findById((courseComplete.getId())).orElse(null);
        takenCourse.setDateOf_completion(courseComplete.getDateOf_completion());
        takenCourse.setGrade(courseComplete.getGrade());
        return takenCourseRepository.save(takenCourse);
    }
    @GetMapping("/CurrentTakenCourse/{userIdFk}")
    List<Taken_Course> getCurrentTakenCourse(@PathVariable Integer userIdFk){
        List<Taken_Course> listCurrentCourses= takenCourseRepository.findByUserIdFk(userIdFk);
        ArrayList<Taken_Course> listCourses= new ArrayList<>();
        for(Taken_Course x: listCurrentCourses){
            if (x.getGrade()!=100){
                listCourses.add(x);
            }
        }
        return listCourses;
    }
    @GetMapping("/FinishedTakenCourse/{userIdFk}")
    List<Taken_Course> FinishedTakenCourse(@PathVariable Integer userIdFk){
        List<Taken_Course> listCurrentCourses= takenCourseRepository.findByUserIdFk(userIdFk);
        ArrayList<Taken_Course> listCourses= new ArrayList<>();
        for(Taken_Course x: listCurrentCourses){
            if (x.getGrade()==100){
                listCourses.add(x);
            }
        }
        return listCourses;
    }

}
