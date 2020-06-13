import React from 'react';
import { Form } from 'react-bootstrap';
import { Button, } from '@material-ui/core';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { register } from '../actions/auth.action'
import '../containers/login.css';

class SignUP extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',

  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    register: PropTypes.func.isRequired,
  }

  //  componentDidUpdate(prevprops){



  //  }


  onchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  clickhandler = e => {
    
    e.preventDefault();
    const { name, email, password } = this.state;
    
    
    const newuser = {
      name, email, password
    };
    this.props.register(newuser);
    this.props.history.push("/login");
    
  }


  render() {
    return (
      <div style={{ maxWidth: "50vw", maxHeight: "10vh" }}>
        <div className="mydiv">
          <div >
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label> Name</Form.Label>
                <Form.Control type="text" onChange={this.onchange} name="name" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={this.onchange} name="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={this.onchange} name="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
              </Form.Group>
              <Button variant="primary" onClick={this.clickhandler}>
                Submit
                        </Button>
                        
            </Form>
          </div>  </div>


      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(
  mapStateToProps,
  { register }
)(SignUP);