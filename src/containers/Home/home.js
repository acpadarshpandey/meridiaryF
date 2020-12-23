import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom';
import Blog from '../blog'
import Editor from '../editor/editor';
import '../Home/home.css'
import { Toolbar, Typography, Button, } from '@material-ui/core';
import ImpDates from '../Notesapp/importantdate'
import Logout from '../logout'
import login from '../login'
import SignUP from '../signup'
import { connect } from 'react-redux';
import PropsTypes from 'prop-types'
import AboutUS from '../../containers/about'
import Todo from "../../component/Todo/todo"

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
        
       <div style={{display:"flex",float:"right",margin:"0px 10px"}}> < Link to="/editor">
       <button type="button" className="btn"><h6> Thoughts</h6></button>
                 </Link>
                
                 <Link to="/impd">
                 <button type="button" className="btn"><h6>SpecialDate </h6></button>
                 </Link>
                 
                 <Link to="/todo">
                 <button type="button" className="btn"><h6>DailyGoals </h6></button>
                 </Link></div>    
           
                 <div style={{display:"flex",float:"right",margin:"0px 290px"}}>
                 <Logout />
                 </div>
                
   
   
         </Fragment>
      )
      
    const guestLink = (   <div style={{display:"flex",float:"right",margin:"0px 680px"}}>
      <Fragment > 
        < Link to="/login">
       <button type="button" className="btn"><h6> Login/SignUP</h6></button>
      </Link>
      <Redirect to="/" />
    

     
    </Fragment>
     </div> 
    )
    return (
      <Router>

        <div style={{flexGrow: 1}}>
        <nav style={{backgroundColor:"#F0BA34"}} color="inherit"   position="static">
          <Toolbar >
            <Typography style={{fontFamily:"cursive"}} variant="h3" >
            <span> meridiary</span>
            </Typography>
            <div  style={{display:"flex",float:"right",margin:"0px 10px"}}>
             <Link to="/blog">
            <button type="button" className="btn"><h6> Blogs</h6></button>
              </Link>
               <Link to="/">
              <button type="button" className="btn"><h6> AboutUs</h6></button>
              </Link>
              {/* <Button color="inherit"> <Link to="/data">
              <Button variant="contained" >Data</Button>
              </Link></Button> */}
              </div>
           
              {isAuthenticated ? authlink:guestLink   }  


          </Toolbar>
        </nav>
        </div>
       
       
        
        <Switch>
          <Route path="/" exact component={AboutUS} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/login" exact component={login} />
          <Route path="/editor" exact component={Editor} />
          <Route path="/impd" exact component={ImpDates} />
          <Route path="/signup" exact component={SignUP} />
          <Route path="/todo" exact component={Todo}/>
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
