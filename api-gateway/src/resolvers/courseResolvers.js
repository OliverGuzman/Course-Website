const CourseResolver = {
    Query: {
        course_Detail: async(_,{id_Course},{dataSources})=>{
            return await dataSources.courseAPI.getCourse(id_Course);
        },
        courseAllTopics: async(_,{courses},{dataSources})=>{
            return await dataSources.courseAPI.availableCourses(courses);
        },
        courseFiltered: async(_,{topic},{dataSources})=>{
            return await dataSources.courseAPI.filteredCourses(topic);
        }
    }
};
module.exports = CourseResolver;