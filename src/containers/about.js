import React from 'react';
import g from '../g.jpg'
import img  from ".././i.jpg"
import '../containers/Home/home.css'
import Show from './imagegallery/show';

const  AboutUs =() =>{
  return (
    <div >
      <div style={{backgroundImage: `url(${img})`}} className="img">  
      <div style={{color:"black"}}><h4>Hey!!</h4> </div>
    
       <div style={{margin:"50px 10px ",maxWidth:"50vw",maxHeight:"50vh",fontFamily:"Georgia, serif"}}>

<p>Write want you want to write</p>
<p>A diary entry is a section of writing that has been organized by date. The entries within your diary are how you organize the thoughts, feelings and opinions you are pouring into it. They break up your diary into smaller pieces.</p> 
</div>

       


       </div>
       <div>
         
       </div>
  <div style={{backgroundColor:"grey"}}> <Show/></div>
  <div style={{fontFamily:"Georgia, serif",margin:"50px"}}>
  <p> Keep writing
If you feel like you’re at a loss for words, just keep writing through it. Feel free to record your train of thought. Think about why you have hit a wall. What is getting in the way? Think about what you’re writing about and how that could be effecting your entry – and write about that thought process!.</p> 
<p>Think of them like chapters of a book. They can be as short or as long as you want.</p>
 </div>   

       
     
    </div>
    
  )
}
export default AboutUs;


