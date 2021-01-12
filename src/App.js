import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstP from './component/firstP';
import {Provider} from 'react-redux';
import store from './store';
import{loadUser} from "./actions/auth.action"
import back from "./h.jpg"
import { Component } from 'react';

 

class App extends Component{
  // componentDidMount(){
  //   store.dispatch(loadUser())
  // }
   render(){ 
  return (
    <div className="bg"> <Provider  store={store}> 
    <div
    className="UI Container">
      <div>

     
      <img src={back} className="img1" alt="logo" />
        
     
     <FirstP/>
      
         </div>
      </div>
        </Provider></div>
    
  );
 }
  
}

export default App;
