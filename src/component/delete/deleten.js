import React from "react";
import{Link} from "react-router-dom"
const DeleteN=()=>{
    return(
        <div>
            <h1 style={{fontFamily:"cursive",color:"#F06E10",marginTop:"5rem"}}>Notes is Deleted!!!!!!!</h1>
            <Link to="/impd"> <button className="btn3" style={{marginTop:"3rem"}}> Back to Notes</button></Link>
        </div>
    )

}
export default DeleteN;