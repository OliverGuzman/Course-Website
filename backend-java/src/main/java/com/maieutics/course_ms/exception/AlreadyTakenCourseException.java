package com.maieutics.course_ms.exception;

public class AlreadyTakenCourseException extends RuntimeException{
    public AlreadyTakenCourseException(String message){
        super(message);
    }
}
