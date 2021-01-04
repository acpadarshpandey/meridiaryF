import React from "react";
import{Link} from "react-router-dom"
const DeleteE=()=>{
    return(
        <div>
            <h1 style={{fontFamily:"cursive",color:"#F06E10",marginTop:"5rem"}}>Thoughts is Deleted!!!!!!!</h1>
            <Link to="/data"> <button className="btn3" style={{marginTop:"3rem"}}> Back to Saved Thoughts</button></Link>
        </div>
    )

}
export default DeleteE;