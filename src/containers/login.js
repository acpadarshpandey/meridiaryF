import React from 'react';
 import { Link } from 'react-router-dom';
import { Button, } from '@material-ui/core';
import { Form, } from 'react-bootstrap'
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
       <div style={{marginTop:"6rem"}}>
        <div className="mydiv">
        <div style={{border:"2px solid white",borderRadius:"0.5rem",backgroundColor:"#F5AF40",height:"55vh",width:"25vw",fontFamily:"cursive"}}> 
        <Form style={{"color":"brown",margin:"5px", alignContent:"center"}}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label  ><h6 style={{marginTop:".25rem"}}>Email address</h6></Form.Label>
              <Form.Control onChange={this.onchange} name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label><h6>Password</h6></Form.Label>
              <Form.Control onChange={this.onchange} name="password" type="password" placeholder="Password" />
            </Form.Group>
           
            <Button variant="contained" style={{borderRadius:".5rem",backgroundColor:"#F6A83A"}}  onClick={this.clickHandler}>
              Submit
                        </Button>
                        <div className="su"> 
                       <p> If not Register Please SignUP</p>
               <Link to="/signup">SignUP</Link>
                        </div>
               
            {/* <Form.Text className="text-muted">
                        <Link to="/SignUP"> IF NOT USER THEN SIGNUP</Link>
                               </Form.Text> */}
          </Form>
        </div>
          

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