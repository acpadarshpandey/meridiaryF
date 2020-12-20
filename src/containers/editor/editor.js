import React, { Component} from "react";
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {Button} from 'react-bootstrap';
import axios from 'axios'
import EditorList from './display'

import '../form/impdatses/date.css'
import '..//Notesapp/ntp.css';
import '../form/impdatses/date.css'
import showResult from "./showResult";
import { BrowserRouter as Router,Redirect, Route, Switch } from 'react-router-dom';
  import {Link} from 'react-router-dom'

class ReactEditor extends Component {
       constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          content: '',
          show:false
    
        }
    }
    toggleData=()=>{
           const doesShow=this.state.show;
           this.setState({show:!doesShow})
      
         }
    createMarkup = () => {
      return { __html: this.state.content };
    }       
      
      handleChange(value){
        this.setState({
          content: value})
       
      }
      onSubmit(e){
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`content: ${this.state.content}`);
       
  
      const payload = {
         content: this.state.content,
    
          
      
      };
  
      axios.post('https://meridiaryb.herokuapp.com/editor/addContent', payload)
          .then(res =>{console.log(res.data)     
              this.setState({
              content: '',
       
     })});
      
  }
      
    
  render() {
    return (
     
        <div> 
          <div>
          <Button variant="light" onClick={this.toggleData}> Thoughts Save</Button> 
          </div>
       
          {this.state.show?<div>   <div>
        <Router>
        <Button variant="light" onClick={this.toggleData}> <Link to= "/data"> <Button variant="light"> Go Back!!</Button> </Link> </Button>
          <Switch>
          <Route path="/data" exact component={showResult}/>
          </Switch>
          </Router>
          </div></div> :<div>
          <div style={{maxWidth:"50vw", maxHeight:"10vh", }}>  
          <h4 style={{color:"black"}}>Type Here!!!</h4>    
        <ReactQuill theme="snow" style={{margin: "10px"}} value={this.state.content}
                     onChange={this.handleChange} />
   
          <Button onClick={this.onSubmit}  variant="secondary" size="lg" style={{width: " 140px",border:"1px solid pink"}} >
       Add
     </Button> 
     
           
           </div> 
           <div className="show">
		   <div className="container"> 
             <EditorList/>
             
          
             <div>  <div style={{maxWidth:"50vw", maxHeight:"50vh","border": "1px solid black" ,color:"brown"}}>
               <div dangerouslySetInnerHTML={this.createMarkup()} className='editor'>
                 </div> </div>  </div>
             
           </div>
            </div>
            </div>}
           
            </div>
           
    );
  }
} 
     


 export default ReactEditor;
 
