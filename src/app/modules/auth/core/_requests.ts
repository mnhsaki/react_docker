import axios from 'axios'
import {AuthModel, UserModel} from './_models'
import { BASE_URL } from '../../config';

const API_URL = process.env.REACT_APP_API_URL

// export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const GET_USER_BY_ACCESSTOKEN_URL = `${BASE_URL}/rm/api/user/info`
// export const LOGIN_URL = `${API_URL}/login`
const LOGIN_URL = `${BASE_URL}/rm/authenticate/signin`
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


    const { data } = response
    let res = {
      data : {
        'api_token' : response.data.token,
        'username' : "",
        'email' : "",
      }
    }

    return res
  }).catch((err)=> {
    let res = {
      data : {
        'api_token' : '',
        'username' : "",
        'email' : "",
      }
    }

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
