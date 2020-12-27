import React from "react"
import "./view.css"

const view=(props)=>{
    return(
        <div className="d">
            <p style={{marginTop:"3rem"}}>{props.data}</p>
            
        </div>
    )
    }

    export default view;