import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import '../form/impdatses/date.css'
import {Card} from 'react-bootstrap'
const content = props => (
  
    <Card.Text>
    {this.data.content}

      
          <Card.Link href="#">Edit</Card.Link>
          <Card.Link href="#">Delete</Card.Link>
          </Card.Text>
      
)


export default class EditorList extends Component {

    constructor(props) {
        super(props);
        this.state = {Lists: []};
    }

    componentDidMount() {
        axios.get('https://meridiaryb.herokuapp.com/editor/showContent')
            .then(response => {
                 this.setState({ Lists: response.data.List });
            })
        
            .catch(function (error){
                console.log(error);
            })
    }

    Data() {
        return this.state.Lists.map(function(current, i){
            return <content data={current} key={i} />;
        })
        }

    render() {
        return (
            <div> {this.Data()}</div>  
          
//             <div>
//                  <h3>My Thoghts</h3>
//                  <Refresh/>
//                  <div className="mydiv">
               
//                  <Card style={{ width: '18rem' }}>
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
   
//       {this.Data()}
    
//   </Card.Body>
// </Card>
//             </div>
//             </div>
            
        )
    }
}