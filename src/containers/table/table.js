import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../form/impdatses/date.css'
import Refresh from '../refresh'
const Notes = props => (
  <tr>
      <td>{props.note.data}</td>
      <td>{props.note.date}</td>
      <td>
          <Link to={"/delete/"+props.note._id}>Delete</Link>
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
          
            <div>
                 <h3>Notes List</h3>
                 <Refresh/>
                 <div className="mydiv">
               
                <table className="table table-striped" style={{ marginTop: 20 }} >
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

