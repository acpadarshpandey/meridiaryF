import React, { Component} from "react";
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {Button} from 'react-bootstrap';
import axios from 'axios'
import EditorList from './display'
import '../form/impdatses/date.css'
import '..//Notesapp/ntp.css';
import '../form/impdatses/date.css'
import showResult from "./showResult"
class ReactEditor extends Component {
       constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          content: '',
    
    
        }
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

          <div style={{maxWidth:"50vw", maxHeight:"10vh", color:"white"}}>  
          <h4 style={{color:"yellow"}}>Type Here!!!</h4>    
        <ReactQuill theme="snow" style={{margin: "10px"}} value={this.state.content}
                     onChange={this.handleChange} />
   
          <Button onClick={this.onSubmit}  variant="secondary" size="lg" style={{width: " 140px",border:"1px solid pink"}} >
       Add
     </Button> 
     
           
           </div> 
           <div className="show">
		   <div className="container"> 
             <EditorList/>
             <div>  <div style={{maxWidth:"50vw", maxHeight:"50vh","border": "1px solid black" ,color:"pink"}}>
               <div dangerouslySetInnerHTML={this.createMarkup()} className='editor'>
                 </div> </div>  </div>
             
           </div>
            </div>
            <div><showResult/></div>
            </div>
           
    );
  }
} 
     


 export default ReactEditor;
 
