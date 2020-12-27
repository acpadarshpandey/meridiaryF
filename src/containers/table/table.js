import React, { Component, } from 'react';
import axios from 'axios';
import '../form/impdatses/date.css'
const Notes = props => (
  <tr>
      <td>{props.note.data}</td>
      <td>{props.note.date}</td>
      <td>
          <button className="btn3"onClick={()=>{
              const id=props.note._id;
              axios.delete(`https://meridiaryb.herokuapp.com/impdates/deleteNotes/${id}`) .then(() => 
              {console.log("done")
            
               })
              

          }} >Delete</button>
          {/* <Link style={{color:"brown"}} to={"http://localhost:8080/impdates/deleteNotes/"+props.note._id}>Delete</Link> */}
      </td>
  </tr>
)


export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {Lists: [],
          };
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
        return this.state.Lists.map(function(current, i,t){
            return <Notes note={current} s={t} key={i} />;
        })
        }

    render() {
        return ( <div> 
             <h3 style={{"color":"#F06E10",marginLeft:"18rem",marginTop:"2rem", alignContent:"center",}}>View Notes</h3> 
            <div style={{ width:"20vw",maxHeight:"100vh","color":"brown",marginLeft:"14rem", alignContent:"center",background:"transparent"}}>
                 
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
                        {this.List()}
               
                    </tbody>
                </table>
            </div>
            </div>
        </div>
           
            
        )
    }
}

