import axios from 'axios'
import {AuthModel, UserModel} from './_models'

const API_URL = process.env.REACT_APP_API_URL

// export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const GET_USER_BY_ACCESSTOKEN_URL = `http://192.241.135.61:8080/rm/api/user/info`
// export const LOGIN_URL = `${API_URL}/login`
const LOGIN_URL = 'http://192.241.135.61:8080/rm/authenticate/signin'
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`



// Server should return AuthModel
// export function login(username: string, password: string) {
//   return axios.post<AuthModel>(LOGIN_URL, {
//     username,
//     password,
//   })
// }




export function login(username: string, password: string) {
  

  return axios.post<AuthModel>(LOGIN_URL, {
      username,
      password,
  }).then(response => {

    let result = response;

    console.log("response", response);

    // const { data } = response
    let res = {
      data : {
        'api_token' : response.data.token,
        'username' : "admin",
        'email' : "admin@gmail.com",
      }
    }

    // let item = {
      // data : {
      //   'api_token' : response.data.api_token,
      //   'username' : "admin",
      //   'email' : "admin@gmail.com",
      // }
      // data : {
      //   'config' : response.config,
      //   'data' : {
      //     'api_token' : response.data.token,
      //     'email': response.data.email,
      //     'id': 2
      //   },
      //   'header': response.headers,
      //   'request': response.request,
      //   'status': response.status,
      //   'statusTest': "success"
      // }
    // }

    // console.log("item",item);

    // AuthModel: item.data;

    return res
  });
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken_(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}


export function getUserByToken(token: string) {
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL,{ 
    
    headers: {"Authorization" : `Bearer ${token}`} }
    );
}


export function getUserByTokenold(token: string) {
  return axios.get<UserModel>(GET_USER_BY_ACCESSTOKEN_URL,{ 
    
    headers: {"Authorization" : `Bearer ${token}`} }
    ).then(response => {

    let result = response;

    console.log("response", response);

    // const { data } = response
    // let res = {
    //   data : {
    //     'api_token' : "adsf",
    //     'username' : "admin",
    //     'email' : "admin@gmail.com",
    //   }
    // }


    // return res
  });
}
