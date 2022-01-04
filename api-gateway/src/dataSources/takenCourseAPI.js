const{RESTDataSource} = require('apollo-datasource-rest');
const serverConfig = require('../server');

class takenCourseAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.Course_api_url;
    }
    async subscribe(takenCourse){
        takenCourse = new Object(JSON.parse(JSON.stringify(takenCourse)));
        return await this.post('subscribe', takenCourse);
    }

    async updateProgress(takenCourse){
        takenCourse = new Object(JSON.parse(JSON.stringify(takenCourse)));
        return await this.put('UpdateProgress', takenCourse);
    }

    async completeCourse(takenCourse){
        takenCourse = new Object(JSON.parse(JSON.stringify(takenCourse)));
        return await this.put('CompleteCourse', takenCourse);
    }

    async currentTakenCourse(userIdFk){
        return await this.get(`CurrentTakenCourse/${userIdFk}`)
    }

    async finishedTakenCourse(userIdFk){
        return await this.get(`FinishedTakenCourse/${userIdFk}`)
    }
}
module.exports=takenCourseAPI;
