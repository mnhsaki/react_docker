import { BASE_URL } from '../config';


export const GET_USER_BY_ACCESSTOKEN_URL = `${BASE_URL}/rm/api/user/info`
const LOGIN_URL = `${BASE_URL}/rm/authenticate/signin`


export function createUser(userData) {
    return new Promise(async (resolve) => {
      const response = await fetch('http://localhost:8000/users', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: { 'content-type': 'application/json' },
      });
      // console.log("response",response);
      const data = await response.json();
      // TODO: on server it will only return some info of user (not password)
      resolve({ data });
    });
  }

  // export function getUserByToken(token: string) {
  //   return axios.get(GET_USER_BY_ACCESSTOKEN_URL,{ 
      
  //     headers: {"Authorization" : `Bearer ${token}`} }
  //   );
  // }
  
  
  
  export function checkUser(apiToken) {
    return new Promise(async (resolve, reject) => {
      const token = apiToken;
      const response = await fetch(GET_USER_BY_ACCESSTOKEN_URL,{
          headers: 
          {
            "Authorization" : `Bearer ${token}`
          } 
      });
      
      const data = await response.json();
      if(data.status === 200){
        let userInfo = data.data;
        resolve({ data: userInfo })
      }else{
        reject({data: null})
      }
    });
  }
  
  export function signOut() {
    return new Promise(async (resolve) => {
        // TODO: on server we will remove user session info
      resolve({ data: 'success' });
    });
  }
  
  
  