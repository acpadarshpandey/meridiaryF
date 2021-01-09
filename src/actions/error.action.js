import {GET_ERRORS,CLEAR_ERRORS} from './types'

//return error
 export const returnError=(msg,status,id=null)=>{
     return{
         type:GET_ERRORS,
         payload:{
             msg,status,id
         }
     }
 }

 //clear error
 export const clrError=()=>{
     return{
         type:CLEAR_ERRORS
     }
 }