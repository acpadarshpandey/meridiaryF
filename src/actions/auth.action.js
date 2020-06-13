import axios from 'axios';
import{returnError} from './error.action'
import {USER_LOAD, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAIL} from './types'

//register

export const register= ({name, email, password})=> dispatch =>{
    console.log(name,email,password)
    //header
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    // req body
       const body=JSON.stringify({ name, email, password,});

       axios.post('https://meridiaryb.herokuapp.com/api/signup',body,config)
       .then(res=>dispatch({
           type:REGISTER_SUCCESS,
           payload:res.data
       }))
       .catch(err=> dispatch({
           type:REGISTER_FAIL,
       }))
}
// LOGOUT_SU
export const logout=()=>{
    return{ type:LOGOUT_SUCCESS
    }

}
export const login= ({email, password})=> dispatch =>{
    console.log(email,password)
    //header
    const config={
        headers:{
            'Content-Type': 'application/json',
             Accept :  "application/json"
        }
    }
    // req body
       const body=JSON.stringify({ email, password});

       axios.post('https://meridiaryb.herokuapp.com/api/signin',body,config)
       .then(res=>{
           console.log(res);
           dispatch({
            type:LOGIN_SUCCESS,
            payload:res.data
        })
       })
       .catch(err=> {
        
        console.log(err)        
        dispatch({
       type:LOGIN_FAIL
   })
       })
}

// Setup config/headers and token
export const tokenConfig = (getState) => {
    // Get token from localstorage
    const token = getState().auth.token;
  
    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
  
    // If token, add to headers
    if (token) {
      config.headers['x-auth-token'] = token;
    }
  
    return config;
  };
