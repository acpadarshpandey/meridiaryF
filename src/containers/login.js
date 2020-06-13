import React from 'react';
//import axios from 'axios';
// import { Link } from 'react-router-dom';
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
    }, () => console.log(this.state));
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
      <Router> <div style={{ maxWidth: "50vw", maxHeight: "10vh" }}>
        <div className="mydiv">

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={this.onchange} name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={this.onchange} name="password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            </Form.Group>
            <Button variant="primary" onClick={this.clickHandler}>
              Submit
                        </Button>

            {/* <Form.Text className="text-muted">
                        <Link to="/SignUP"> IF NOT USER THEN SIGNUP</Link>
                               </Form.Text> */}
          </Form>

        </div>

        {/* <Switch>
                <Route path="/SignUp"  exact component={SignUP,refresh}/>
               </Switch> */}
      </div>
      </Router>

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