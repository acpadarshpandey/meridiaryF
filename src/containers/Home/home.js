import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom';
import Blog from '../blog'
import Editor from '../editor/editor';
import '../Home/home.css'
import { AppBar, Toolbar, Typography, Button, } from '@material-ui/core';
import ImpDates from '../Notesapp/importantdate'
import Logout from '../logout'
import login from '../login'
import SignUP from '../signup'
import { connect } from 'react-redux';
import PropsTypes from 'prop-types'
import AboutUS from '../../containers/about'
// import showResult from '../../containers/editor/showResult'


class Home extends React.PureComponent {

  static propTypes = {
    auth: PropsTypes.object.isRequired,
  }



  render() {
    const { isAuthenticated} = this.props.auth;



    const authlink = ( 
     <Fragment>
         
         {/* <span> if(user) ? `Hey ${user.name}`:''</span> */}
         <Redirect to="/" />
        
       <div style={{display:"flex",float:"right",margin:"0px 10px"}}><Button color="inherit"> < Link to="/editor">
                   <Button variant="contained" >Thoughts</Button>
                 </Link>
                 </Button>
                 <Button color="inherit"> <Link to="/impd">
                   <Button variant="contained" >SpecialDate</Button>
                 </Link></Button></div>    
           
                 <div style={{display:"flex",float:"right",margin:"0px 470px"}}>
                 <Logout />
                 </div>
                
   
   
         </Fragment>
      )
      
    const guestLink = (   <div style={{display:"flex",float:"right",margin:"0px 680px"}}>
      <Fragment > 
       <Button color="inherit">  < Link to="/login">
        <Button variant="contained" >Login</Button>
      </Link></Button>
      <Button color="inherit">  < Link to="/signup">
        <Button variant="contained" >SignUp</Button>
      </Link></Button>
      <Redirect to="/" />
    

     
    </Fragment>
     </div> 
    )
    return (
      <Router>

        <div style={{flexGrow: 1}}>
        <AppBar  color="yellow"   position="static">
          <Toolbar >
            <Typography style={{fontfamily:"arial"}} variant="h3">
              MeriDiary 
            
            </Typography>
            <div  style={{display:"flex",float:"right",margin:"0px 10px"}}>
            <Button color="inherit"> <Link to="/blog">
              <Button variant="contained" >Blogs</Button>
              </Link></Button>
              <Button color="inherit"> <Link to="/">
              <Button variant="contained" >AboutUS</Button>
              </Link></Button>
              {/* <Button color="inherit"> <Link to="/data">
              <Button variant="contained" >Data</Button>
              </Link></Button> */}
              </div>
           
              {isAuthenticated ? authlink : guestLink}  


          </Toolbar>
        </AppBar>
        </div>
       
        
        <Switch>
          <Route path="/" exact component={AboutUS} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/login" exact component={login} />
          <Route path="/editor" exact component={Editor} />
          <Route path="/impd" exact component={ImpDates} />
          <Route path="/signup" exact component={SignUP} />
          {/* <Route path="/data" exact component={showResult}/> */}


        </Switch>

      </Router>



    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth
})


export default connect(mapStateToProps, null)(Home)
