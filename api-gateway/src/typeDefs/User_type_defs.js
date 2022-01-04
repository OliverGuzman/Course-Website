const { gql } = require('apollo-server');
const UserTypeDefs = gql `
    type Tokens {
        refresh:String!
        access:String!
    }
    type Access {
        access:String!
    }
    type Empty {
        empty:String
    }

    input Refresh {
        refresh:String!
    }
    input CredentialsInput {
        username:String!
        password:String!
    }
    type User{
        username:String!
        name:String!
        last_name:String!
        email:String!
        password:String!
        topics:String!
        current_profession:String!
        country:String!
        date_birth:String!
        gender:String!
    }
    input SignUpInput {
        id:Int!
        username:String!
        name:String!
        last_name:String!
        email:String!
        password:String!
        topics:String!
        current_profession:String!
        country:String!
        date_birth:String!
        gender:String!
    }
    input UserUpdate {
        id:Int!
        username:String!
        name:String!
        last_name:String!
        email:String!
        password:String!
        topics:String!
        current_profession:String!
        country:String!
        date_birth:String!
        gender:String!
    }
    type Query {
        userDetailById(userId:Int!):User!
    }

    type Mutation {
        signUpUser(userInput:SignUpInput):Tokens!
        logIn(credentials:CredentialsInput!):Tokens!
        refreshToken(token:Refresh!):Access!
        userUpdate(user:UserUpdate!):User!
        userDelete(userId:Int!):Empty
    }`;
module.exports = UserTypeDefs;

