import React from 'react';
import g from '../g.jpg'

const  AboutUs =() =>{
  return (
    <div >
       <div style={{color:"pink"}}><h4>Hey!!</h4> </div>
       <img style={{maxHeight:"80vh",maxWidth:"200vw",float:"left"}}src={g} alt={"logo"}></img>
       <div style={{display:"flex"}}>
       <div style={{color:"#ffeb3b",margin:"10px 10px ",maxWidth:"50vw",maxHeight:"50vh",border:"2px solid black"}}>

<p>Write want you want to write</p>
<p>Free to write any thingh</p>
<p>A diary entry is a section of writing that has been organized by date. The entries within your diary are how you organize the thoughts, feelings and opinions you are pouring into it. They break up your diary into smaller pieces.</p> 
</div>
<div style={{color:"#ffeb3b",margin:"10px 10px ",maxWidth:"50vw",maxHeight:"50vh",border:"2px solid black"}}>
<p> Keep writing
If you feel like you’re at a loss for words, just keep writing through it. Feel free to record your train of thought. Think about why you have hit a wall. What is getting in the way? Think about what you’re writing about and how that could be effecting your entry – and write about that thought process!.</p> 
<p>Think of them like chapters of a book. They can be as short or as long as you want.</p>
</div>

       </div>
       <div>
         
       </div>
     

     
    </div>
    
  )
}
export default AboutUs;


