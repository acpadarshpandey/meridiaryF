import React from 'react';
import a from '../a.jpg'
import bg from '../bg.jpg'
import b from '../b.jpg'
import c from '../c.jpg'
import d from '../d.jpg'
import f from '../f.jpg'

 import MediaCard from './card/card'
class Blog extends React.Component{

   
    render() {
        const center = {
            margin: "auto",
            width: "75%",
            padding: "10px"
          }
        return(
           
            <div > 
                <h1 style={{"color":"#F06E10" }}> Meri Diary</h1>
                <div style={center}>
                <div style= {{"font-family":"sans-serif" ,"color":"yellow" ,margin:"5px",display:"flex",justifyContent:"centre",float:"center"}}>
                     
                     <div style={{margin:"5x"}}><MediaCard abg={bg} 
                     abc={<p style={{fontFamily:"cursive",color:"white"}} >The only difference between the saint and the sinner is that every saint has a past, and every sinner has a future.
                      </p>} /></div>  
                     <div style={{margin:"5px"}}> <MediaCard abg={a}
                     abc={<p style={{fontFamily:"cursive",color:"white"}}>Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.
                     </p>}/></div> 
                     <div style={{margin:"5px"}}><MediaCard abg={c} 
                     abc={<p style={{fontFamily:"cursive",color:"white"}}>I never travel without my diary. One should always have something sensational to read in the train.Oscar Wilde</p>}

 /></div> 
                     
                      
                       
                     </div>
                     <div style= {{ margin:"5px",display:"flex",float:"center"}}>
                    <div style={{margin:"5px"}}><MediaCard abg={b}
                    abc={<p style={{fontFamily:"cursive",color:"white"}}>Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught.</p>}/>
                    </div>  
                     <div style={{margin:"5px"}}><MediaCard abg={f}
                     abc={<p style={{fontFamily:"cursive",color:"white"}}>Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. </p>} /></div>  
                     <div style={{margin:"5px"}}><MediaCard abg={d} 
                     abc={<p style={{fontFamily:"cursive",color:"white"}}>You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.</p>}/></div> 
                    
                       <br/>
                       
                     </div> </div>
                
            </div>
        )
    }
}
 export default Blog;