const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const authentication = require('./utils/authentication');
const CourseAPI = require('./dataSources/courseAPI');
const UserAPI = require('./dataSources/userAPI');
const TakenCourseAPI = require('./dataSources/takenCourseAPI');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        userAPI: new UserAPI(),
        courseAPI: new CourseAPI(),
        takenCourseAPI: new TakenCourseAPI()
    }),
    introspection: true,
    playground: true
});
server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});