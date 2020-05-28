import React, { Fragment } from 'react'; 
import { Link } from 'react-router-dom';
import  { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import AboutUs from '../about'
import Editor from '../editor/editor';
import '../Home/home.css'
import {AppBar,Toolbar,Typography,Button,} from '@material-ui/core';
import ImpDates from '../Notesapp/importantdate'
import  signup from '../signup'
import Logout from '../logout'
import login from '../login'
import {connect} from 'react-redux';
import PropsTypes from 'prop-types'

class Home extends React.PureComponent{

   static propTypes={
       auth:PropsTypes.object.isRequired,
   }

    
  
render() {
     const {isAuthenticated,user}=this.props.auth;
     const authlink=(
       <Fragment>
         <span>> if(user)?`Hey ${user}`:''</span>
        
         <Logout/>
        
       </Fragment>
     )

   const guestLink =(  <Fragment> 
  
     <Button color="inherit">  < Link to="/login">
      <Button variant="contained" color="primary">Login</Button>
      </Link></Button>
        </Fragment>

   )
 return (
    <Router>
          <AppBar  position="static">
          <Toolbar>
         <Typography variant="h3">
             MeriDiary
             <Button color="inherit"> <Link to="/">                                                         
      <Button variant="contained" color="primary">About Us</Button>
       </Link></Button>
           </Typography>
       <div className="appbar">
      <Button color="inherit"> < Link to="/editor">
      <Button variant="contained" color="primary">Editor</Button>
      </Link>
      </Button>
      <Button color="inherit"> <Link to="/impd">                                                         
      <Button variant="contained" color="primary">importantdate</Button>
      </Link></Button>
     
       {isAuthenticated? authlink:guestLink }
       
       
       </div>
 
  </Toolbar>
</AppBar>
         <Switch>
       <Route path="/" exact component={AboutUs}/>
         <Route path="/login" exact component={login}/>
         <Route path="/editor" exact component={Editor}/>
         <Route path="/impd" exact component={ImpDates}/>
         <Route path ="/signup" exact component={signup}/>
  
          
         </Switch>
         
         </Router>
       

      
        );
    }
    }
    const mapStateToProps=(state)=>({
      auth:state.auth
    })


    export default connect(mapStateToProps,null)(Home)
