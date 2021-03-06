import React ,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import { logout } from '../actions/auth.action';
import {Button,} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link} from 'react-router-dom';
export class Logout extends Component{
    static  propTypes={
        logout: PropTypes.func.isRequired
    };
    render(){
        return(
    
           <Link to="#"> 
           <button type="button" className="btn" onClick= {this.props.logout}><h6 style={{color:"white"}}>Logout </h6></button>                                                        
  </Link>
      
                      
                  
           

        )
    }
}
export default connect(
    null,
    {logout}
)(Logout);
