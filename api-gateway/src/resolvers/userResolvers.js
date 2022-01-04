const userResolver={
    Query:{
        userDetailById: async (_,{ userId }, {dataSources, userIdToken})=>{
            if(userId== userIdToken)
                return await dataSources.userAPI.getUser(userId);
            else
                return null;
        }
    },
    Mutation:{
        signUpUser: async (_,{userInput}, {dataSources})=>{
            const userSignUp={
                id: userInput.id,
                username: userInput.username,
                name: userInput.name,
                last_name: userInput.last_name,
                email: userInput.email,
                password: userInput.password,
                topics: userInput.topics,
                current_profession: userInput.current_profession,
                country: userInput.country,
                date_birth: userInput.date_birth,
                gender: userInput.gender
            }
            return await dataSources.userAPI.createUser(userSignUp);
        },
        logIn: async(_, { credentials }, { dataSources }) => {
            return await dataSources.userAPI.authRequest(credentials);
        },
        refreshToken: async (_,{ token }, { dataSources })=>{
            return await dataSources.userAPI.refreshToken(token);
        },
        userUpdate: async(_,{user},{dataSources, userIdToken})=>{
            if(user.id==userIdToken)
                return await dataSources.userAPI.updateUser(user);
            else
                return null;
        },
        userDelete: async(_,{userId},{dataSources, userIdToken})=>{
            if(userId==userIdToken)
                return await dataSources.userAPI.deleteUser(userId);
            else
                return null;
        }
    }
}
module.exports = userResolver;