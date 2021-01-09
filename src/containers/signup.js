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
    msg:null,
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    register: PropTypes.func.isRequired,
    error:PropTypes.object.isRequired
  }

   componentDidUpdate(prevprops){
   const{error}= this.props;
     if(error!==prevprops.error){
       if(error.id==="REGISTER_FAIL"){

        this.setState({msg:error.msg.msg})
       }
       else this.setState({msg:null})
   }

    }


  onchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };
  clickhandler = e => {
    
    e.preventDefault();
    const { name, email, password } = this.state;
    
    if(!name||!email||!password){
      alert("Enter all field")
    }
    
    const newuser = {
      name, email, password
    };
    this.props.register(newuser);
    // this.props.history.push("/login");
    
  }


  render() {
    return (
      <div className="mydiv"> 
        <div style={{marginTop:"6rem"}}>
        <div className="mydiv">
        <div style={{border:"2px solid white",borderRadius:"0.5rem",backgroundColor:"#F5AF40",height:"55vh",width:"25vw",fontFamily:"cursive"}}> 
            <Form style={{"color":"brown",margin:"5px", alignContent:"center"}}>
              {this.state.msg?alert(this.state.msg):null}
              <Form.Group controlId="formBasicEmail">
                <Form.Label> <h6 style={{marginTop:".25rem"}}> Name</h6> </Form.Label>
                <Form.Control type="text" onChange={this.onchange} name="name" placeholder="Enter Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label><h6 style={{marginTop:".25rem"}}>Email address</h6></Form.Label>
                <Form.Control type="email" onChange={this.onchange} name="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label><h6>Password</h6></Form.Label>
                <Form.Control type="password" onChange={this.onchange} name="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
              </Form.Group>
              <Button  variant="contained" style={{borderRadius:".5rem",backgroundColor:"#F6A83A"}}  onClick={this.clickhandler}>
                Submit
                        </Button>
                        
            </Form>
          </div>  </div>


      </div></div>
      
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error:state.error
})

export default connect(
  mapStateToProps,
  { register }
)(SignUP);