import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../form/impdatses/date.css'
const Notes = props => (
  <tr>
      <td>{props.note.data}</td>
      <td>{props.note.date}</td>
      <td>
          <Link to={"/deleteNotes/:id"+props.note._id}>Delete</Link>
      </td>
  </tr>
)


export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {Lists: []};
    }

    componentDidMount() {
        axios.get('https://meridiaryb.herokuapp.com/impdates/showNotes')
            .then(response => {
                 this.setState({ Lists: response.data.NotesList });
            })
        
            .catch(function (error){
                console.log(error);
            })
    }

    List() {
        return this.state.Lists.map(function(current, i){
            return <Notes note={current} key={i} />;
        })
        }

    render() {
        return (
          
            <div style={{maxWidth:"50vw", maxHeight:"80vh","color":"brown",marginLeft:"5rem", alignContent:"center",overflow: "scroll",background:"transparent"}}>
                 <h3>Notes List</h3>

                 <div className="mydiv">
               
                <table className="table table-striped" style={{ marginTop: "20px" ,color:"brown"}} >
                    <thead>
                        <tr>
                            <th>Notes</th>
                            <th>Dates</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                  { this.List() }
                    </tbody>
                </table>
            </div>
            </div>
            
        )
    }
}

