import React from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import {Button,} from '@material-ui/core';
import  { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './first.css';
import Home from '../containers/Home/home'
 
 class firstP extends React.Component{
        render() {
            return(  <div className="bg">
               <Router> <div className="wrapper">
               <Home/>
              
                         
</div>
</Router></div>
                
                
            )
        }
 
   }
   export default firstP;