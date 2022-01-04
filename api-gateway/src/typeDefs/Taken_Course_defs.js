const { gql } = require('apollo-server');
const TakenCourseTypeDefs = gql `
    type TakenCourseDetail {
        id:Int!
        date_of_Taken:String!
        dateOf_completion:String!
        grade:Int!
        progress:Int!
        object_id_Course:String!
    }
    type TakenCourseDetailEntry {
        id:Int!
        userIdFk:Int!
        date_of_Taken:String!
        dateOf_completion:String!
        grade:Int!
        progress:Int!
        object_id_Course:String!
    }
    
    input TakenCourseInput {
        id:Int!
        userIdFk:Int!
        date_of_Taken:String!
        dateOf_completion:String!
        grade:Int!
        progress:Int!
        object_id_Course:String!
    }
    input TakenCourseUpdate {
        id:Int!
        userIdFk:Int!
        date_of_Taken:String!
        dateOf_completion:String!
        grade:Int!
        progress:Int!
        object_id_Course:String!
    }
    extend type Query {
        currentTakenCourse(userIdFk:Int!):[TakenCourseDetail]
        finishedTakenCourse(userIdFk:Int!):[TakenCourseDetail]
    }
    extend type Mutation {
        join_course(takenCourse:TakenCourseInput!):TakenCourseDetail
        updateProgressCourse(takenCourse:TakenCourseUpdate!):TakenCourseDetail
        completeTakenCourse(takenCourse:TakenCourseUpdate!):TakenCourseDetail
    }`;

module.exports = TakenCourseTypeDefs;