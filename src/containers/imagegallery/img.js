import React from "react"
import "./img.css"
const ImageGallery=(props)=>{
    return(
        <div className="responsive">
  <div className="gallery">
      <img src={props.show} alt="Cinque Terre" width="600" height="400"/>
    </div>
    <div className="clearfix"></div>






</div>


    )
}
export default ImageGallery;