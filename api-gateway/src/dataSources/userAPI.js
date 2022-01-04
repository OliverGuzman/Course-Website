const{RESTDataSource} = require('apollo-datasource-rest');
const serverConfig = require('../server');

class userAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.User_api_url;
    }
    async authRequest(credentials){
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post('login/', credentials);

    }

    async refreshToken( token ){
        token = new Object( token );
        return await this.post('refresh/', token);
    }

    async createUser(user){
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post('user/', user);
    }

    async getUser(userId){
        return await this.get(`user/${userId}/`)
    }

    async updateUser(user){
        user = new Object(JSON.parse(JSON.stringify(user)));
        let userId=user.id;
        return await this.put(`userUpdate/${userId}/`, user);
    }

    async deleteUser(userId){
        return await this.delete(`userDelete/${userId}/`);
    }
    
}
module.exports= userAPI;