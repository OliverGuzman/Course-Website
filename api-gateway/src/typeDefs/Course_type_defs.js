const { gql } = require('apollo-server');
const CourseTypeDefs = gql `
    type CourseDetail {
        id_Course:String!
        title:String!
        description:String!
        workload:String!
        topic:String!
    }
    extend type Query {
        course_Detail(id_Course:String!):CourseDetail!
        courseAllTopics(courses:String):[CourseDetail]
        courseFiltered(topic:String!):[CourseDetail]
    }`;
    
module.exports = CourseTypeDefs;