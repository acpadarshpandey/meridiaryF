import React from "react"
import Char from './data'
import axios from 'axios'
import reacthtmlparser from 'react-html-parser'


class showResult extends React.Component{
    constructor(props){
    super(props)
    this.state={
        Lists:''

    }
    }
    createMarkup = () => {
        return { __html: this.state.Lists };
      }   
    componentDidMount() {
        axios.get('https://meridiaryb.herokuapp.com/editor/showContent')
            .then(response => {
                console.log(reacthtmlparser(response.data))
                this.setState({ Lists: response.data.List });
            })

            .catch(function (error) {
                console.log(error);
            })
    }

    render(){
        const data =this.state.Lists.map((ch,index)=>{
            return <Char character={ch}/>
        })
        return(<div>
            <div>{data}</div>
            <div> dangerouslySetInnerHTML={this.createMarkup()} </div>
        </div>
            
        )
    }

}