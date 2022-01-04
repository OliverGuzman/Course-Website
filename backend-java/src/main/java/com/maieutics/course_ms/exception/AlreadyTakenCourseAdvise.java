package com.maieutics.course_ms.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
@ResponseBody
public class AlreadyTakenCourseAdvise {
    @ResponseBody
    @ExceptionHandler(AlreadyTakenCourseException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    String AlreadyTakenCourseAdvise(AlreadyTakenCourseException ex){
        return ex.getMessage();
    }
}
