import React ,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import { logout } from '../actions/auth.action';
import {Button,} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export class Logout extends Component{
    static  propTypes={
        logout: PropTypes.func.isRequired
    };
    render(){
        return(
            <Fragment>
           <Button color="inherit"> <Link to="#">                                                         
      <Button onClick= {this.props.logout} variant="contained" color="primary">Logout</Button>
      </Link></Button>
                      
                  
            </Fragment>

        )
    }
}
export default connect(
    null,
    {logout}
)(Logout);
