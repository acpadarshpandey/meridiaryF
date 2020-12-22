import React from "react"
import PG from "./img"
import a from '../../qoutes/1.jpg'
import b from '../../qoutes/2.jpg'
import c from '../../qoutes/3.jpg'
import d from '../../qoutes/4.jpg'
import e from '../../qoutes/5.jpg'
import f from '../../qoutes/6.jpg'
import g from '../../qoutes/7.jpg'
import  h from '../../qoutes/8.jpg'





const Show=()=>{
    return(
        <div>
        <PG show={a}/>
        <PG show={b}/>
        <PG show={c}/>
        <PG show={d}/>
        <PG show={e}/>
        <PG show={f}/>
        <PG show={g}/>
        <PG show={h}/>
        </div>
    )
}
export default Show;