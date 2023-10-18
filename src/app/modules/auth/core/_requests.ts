import axios, { AxiosResponse } from 'axios';
import {AuthModel, UserModel} from './_models'

const API_URL = process.env.REACT_APP_API_URL


export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`

export const LOGIN_URL = `http://192.241.135.61:8070/authenticate/signin`
// export const LOGIN_URL = `${API_URL}/login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`


export function login(username: string, password: string) {
  return axios.post(LOGIN_URL, {
    username,
    password,   
  })

  return axios.post<AuthModel>(LOGIN_URL, {
    username,
    password,   
  })

  // const apiUrl = 'https://example.com/api/user/1'; // Replace with your API endpoint

  // axios.post(LOGIN_URL, {
  //     username,
  //     password,   
  //   })
  //   .then((response: AxiosResponse<AuthModel>) => {
  //     console.log("response", response);
  //     const AuthModel = {
  //       api_token : 'adfasdfasdfasdfasdfasdfasdfasdfadfs'
  //     }

  //     return response;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

}

// Server should return AuthModel
export function register(
  username: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    username,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(username: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    username,
  })
}

export function getUserByToken(token: string) {
  console.log("token",token); 
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}
