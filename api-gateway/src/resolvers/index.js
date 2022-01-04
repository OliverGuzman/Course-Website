const courseResolver = require('./courseResolvers');
const takenCourseResolver = require('./takenCourseResolvers');
const userResolver = require('./userResolvers');
const lodash = require('lodash');

const resolvers = lodash.merge(userResolver, courseResolver, takenCourseResolver);
module.exports = resolvers;