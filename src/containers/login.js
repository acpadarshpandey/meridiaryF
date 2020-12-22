import React from 'react';
//import axios from 'axios';
 import { Link } from 'react-router-dom';
import { Button, } from '@material-ui/core';
import { Form, } from 'react-bootstrap'
import { BrowserRouter as Router} from 'react-router-dom';
//import HomePage from './Home/home';
import '../component/first.css';
import '../containers/login.css';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { login } from '../actions/auth.action'


class LoginPage extends React.Component {
  state = {
    email: '',
    password: ''

  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    login: PropTypes.func.isRequired
  }
  onchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  clickHandler = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const user = {
      email, password
    };
    this.props.login(user);
  }




  render() {
    return (
      <div className="mydiv"> 
       <div style={{ maxWidth: "50vw", maxHeight: "10vh" }}>
        <div className="mydiv">

          <Form style={{"color":"black",margin:"5px", alignContent:"center"}}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label  ><h5>Email address</h5></Form.Label>
              <Form.Control onChange={this.onchange} name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label><h5>Password</h5></Form.Label>
              <Form.Control onChange={this.onchange} name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="contained"  onClick={this.clickHandler}>
              Submit
                        </Button>
                        <div className="su"> 
                        <h6>If not Register Please SignUP</h6>
               <Link to="/signup">SignUP</Link>
                        </div>
               
            {/* <Form.Text className="text-muted">
                        <Link to="/SignUP"> IF NOT USER THEN SIGNUP</Link>
                               </Form.Text> */}
          </Form>

        </div>

        {/* <Switch>
                <Route path="/SignUp"  exact component={SignUP,refresh}/>
               </Switch> */}
      </div></div>
      
     

    )
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { login }
)(LoginPage);