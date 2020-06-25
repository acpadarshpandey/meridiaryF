import React from 'react'

const Char =(props)=>{

    const style ={
        dispaly:'inline-block',
        padding:'16px',
        margin: '16px',
        border:'1px solid black',
        textAlign:'centre'

    };

    return(
        <div style={style} onClick={props.clicked}>
    {props.character}

        </div>
    )

}
 export default Char;
