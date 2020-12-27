import React, { Component } from 'react';
import axios from 'axios';
import '../form/impdatses/date.css'




export default class EditorList extends Component {

    constructor(props) {
        super(props);
        this.state = { Lists: [] };
    }




    componentDidMount() {
        axios.get('https://meridiaryb.herokuapp.com/editor/showContent')
            .then(response => {
                this.setState({ Lists: response.data.List });
            })

            .catch(function (error) {
                console.log(error);
            })
    }
    


    render(data) {
        return (


            <div>
                
                <h3 style={{color:"#F06E10",marginLeft:"12rem"}}>My Thoughts</h3>
       
    
            </div>

        )
    }
}