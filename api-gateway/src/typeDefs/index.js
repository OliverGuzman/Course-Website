//Se llama al typedef (esquema) de cada submodulo
const CourseTypeDefs = require('./Course_type_defs');
const TakenCourseTypeDefs = require('./Taken_Course_defs');
const UserTypeDefs = require('./User_type_defs');


//Se unen
const schemasArrays = [UserTypeDefs, CourseTypeDefs, TakenCourseTypeDefs];


//Se exportan
module.exports = schemasArrays;