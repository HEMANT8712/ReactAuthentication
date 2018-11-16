import auth0, { WebAuth } from 'auth0-js';

class Auth{
    auth0= new WebAuth({
        domain: 'react-security-new.auth0.com',
        clientID: 'W0gVZx2zn9a49vJDtSX7QBiAvSGHEiJh',
        redirectUri: 'https://localhost:1234/callback',
        responseType: 'token',  
    });

    login = () => {
        //todo
    }

    handleAuthentication =()=>{
        //todo
    }

    logout =() =>{
        //todo
    }

    isAuthenticated(){
        return false;
        //todo
    }
}

export default Auth;