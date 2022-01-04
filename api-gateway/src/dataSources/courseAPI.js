const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class CourseAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.Course_api_url;
    }
    async getCourse(id_Course){
        return await this.get(`Courses/${id_Course}`)
    }

    async availableCourses(courses){
        return await this.get(`AvailableCourses/`)
    }

    async filteredCourses(topic){
        return await this.get(`FilteredCourses/${topic}`)
    }
    
}
module.exports = CourseAPI;