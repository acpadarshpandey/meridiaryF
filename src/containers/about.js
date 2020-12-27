import React from 'react';
import img  from ".././i.jpg"
import Thought from '../component/view/main';
import '../containers/Home/home.css'

const  AboutUs =() =>{
  return (
    <div >
      <div style={{backgroundImage: `url(${img})`}} className="img">  
      <div style={{color:"#F09030"}}><h2>Hey!!</h2> </div>
    
       <div style={{margin:"50px 10px ",maxWidth:"50vw",maxHeight:"50vh",fontFamily:"cursive"}}>

<p>Write want you want to write</p>
<p>A diary entry is a section of writing that has been organized by date. The entries within your diary are how you organize the thoughts, feelings and opinions you are pouring into it. They break up your diary into smaller pieces.</p> 
</div>

       


       </div>
       <div>
         
       </div>
  <div> <Thought/></div>
  <div style={{fontFamily:"cursive",margin:"50px"}}>
  <p> Keep writing
If you feel like you’re at a loss for words, just keep writing through it. Feel free to record your train of thought. Think about why you have hit a wall. What is getting in the way? Think about what you’re writing about and how that could be effecting your entry – and write about that thought process!.</p> 
<p>Think of them like chapters of a book. They can be as short or as long as you want.</p>
 </div>  
 

       
     
    </div>
    
  )
}
export default AboutUs;


