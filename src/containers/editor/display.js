import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import '../form/impdatses/date.css'
import showResult from './showResult'



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
                
                <h3 style={{color:"black",marginLeft:"10rem"}}>My Thoughts</h3>
       
        
                {/* <div className="mydiv">
               
                 <Card style={{ width: '18rem' }}>
                 <Card.Body>
        <Card.Title>{this.state.Lists}</Card.Title>
             <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                     {data.content}
    
                      </Card.Body>
                      </Card>
                   </div> */}
            </div>

        )
    }
}