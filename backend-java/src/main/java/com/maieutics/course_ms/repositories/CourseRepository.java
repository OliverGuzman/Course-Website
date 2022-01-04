package com.maieutics.course_ms.repositories;

import com.maieutics.course_ms.models.Course;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface CourseRepository extends MongoRepository<Course, String> {
    List<Course> findByTopic(String topic);
}
