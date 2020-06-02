import React, { Component} from "react";
import reacthtmlparser from "react-html-parser"

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {Button} from 'react-bootstrap';
import axios from 'axios'
import EditorList from './display'
import '../form/impdatses/date.css'
import '..//Notesapp/ntp.css';
import '../form/impdatses/date.css'

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
        <div><div style={{maxWidth:"50vw", maxHeight:"10vh"}}>      
        <ReactQuill value={this.state.content}
                     onChange={this.handleChange} />
   
          <Button onClick={this.onSubmit}  variant="secondary" size="lg" block>
       Add
     </Button>
           
           </div>
         
           <div className="show">
		   <div className="container"> 
             <EditorList/>
             <div>  <div style={{maxWidth:"50vw", maxHeight:"10vh" }}>
               <div dangerouslySetInnerHTML={this.createMarkup()} className='editor'>
                 </div> </div>  </div>
             
           </div>
            </div>
            </div>
           
    );
  }
} 
     


 export default ReactEditor;
 
