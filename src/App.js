import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirstP from './component/firstP';
import {Provider} from 'react-redux';
import store from './store';
 

function App() {
  return (
    <div> <Provider  store={store}> 
    <div
    className="UI Container">
      <div>
        
     
     <FirstP/>
      
         </div>
      </div>
        </Provider></div>
    
  );
}

export default App;
