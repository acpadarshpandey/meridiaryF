import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom';
import Blog from '../blog'
import Editor from '../editor/editor';
import '../Home/home.css'
import ImpDates from '../Notesapp/importantdate'
import Logout from '../logout'
import login from '../login'
import SignUP from '../signup'
import { connect } from 'react-redux';
import PropsTypes from 'prop-types'
import AboutUS from '../../containers/about'
import Todo from "../../component/Todo/todo"
import DeleteN from "../../component/delete/deleten"
import DeleteE from "../../component/delete/deletee"



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
         <h3 style={{fontFamily:"cursive",marginRight:"33rem",color:"white",marginTop:".4rem",display:"flex",float:"left"}} > meri diary</h3>
             <Link to="/blog">
            <button type="button" className="btn"><h6 style={{color:"white",}}> Blogs</h6></button>
              </Link>
               <Link to="/">
              <button type="button" className="btn"><h6 style={{color:"white"}}> AboutUs</h6></button>
              </Link>
        
       <div style={{display:"flex",float:"right"}}> < Link to="/editor">
       <button type="button" className="btn"><h6 style={{color:"white"}}> Thoughts</h6></button>
                 </Link>
                
                 <Link to="/impd">
                 <button type="button" className="btn"><h6 style={{color:"white"}}>SpecialDate </h6></button>
                 </Link>
                 
                </div>    
           
                 <div style={{display:"flex",float:"right"}}>
                 <Logout />
                 </div>
                
   
   
         </Fragment>
      )
      
    const guestLink = (   <div style={{display:"flex",float:"right",marginLeft:"20px"}}>
      <h3 style={{fontFamily:"cursive",marginRight:"48rem",color:"white",marginTop:".4rem",display:"flex",float:"left"}} > meri diary</h3>
             <Link to="/blog">
            <button type="button" className="btn"><h6 style={{color:"white",}}> Blogs</h6></button>
              </Link>
               <Link to="/">
              <button type="button" className="btn"><h6 style={{color:"white"}}> AboutUs</h6></button>
              </Link>
   
        < Link to="/login">
       <button type="button" className="btn"><h6 style={{color:"white"}}> Login/SignUP</h6></button>
      </Link>
      <Redirect to="/" />
    

     
    
     </div> 
    )
    return (
      <Router>

        <div style={{flexGrow: 1}}>
        <nav style={{backgroundColor:"#F0BA34",height:"9vh"}} color="inherit"   position="static"> 
          
            <div  style={{display:"flex",float:"right"}}>
            
              {isAuthenticated ? authlink :guestLink  }  

              </div>
          
         
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
          <Route path="/notesdel" exact component={DeleteN}/>
          <Route path="/tdel" exact component={DeleteE}/>
        


        </Switch>

      </Router>



    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth
})


export default connect(mapStateToProps, null)(Home)
