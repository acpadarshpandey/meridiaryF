import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstP from './component/firstP';
import {Provider} from 'react-redux';
import store from './store';
//import back from './PHOTO.jpg'
import back from "./h.jpg"

 

function App() {
 
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

export default App;
