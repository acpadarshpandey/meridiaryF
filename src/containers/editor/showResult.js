import React from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import reactp from 'react-html-parser'
const Notes = props => (
    <tr>
        <td>{reactp(props.note.content)}</td>
        {/* <td>{props.note.date}</td> */}
        <td>
            <Link style={{color:"brown"}} to={"/deleteNotes/:id" + props.note._id}>Delete</Link>
        </td>
    </tr>
)


class showResult extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Lists: [],
            isloading: true

        }
    }


    componentDidMount() {
        axios.get('https://meridiaryb.herokuapp.com/editor/showContent')
            .then(response => {
                console.log(response.data.List, "this is it")
                this.setState({
                    Lists: response.data.List,

                    isloading: false
                });

            })

            .catch(function (error) {
                console.log(error);
            })
    }

    List() {
        return this.state.Lists.map(function (current, i) {
            return <Notes note={current} key={i} />;
        })
    }

    render() {
        return (<div> {this.state.isloading ? <h2>Loading....</h2> : <div style={{ maxWidth: "100vw", maxHeight: "100vh", "color": "black", margin: "5px", alignContent: "center", overflow: "scroll", background: "transparent" }}>
            <h3 style={{color:"#F06E10"}}>Dairy Entries</h3>

            <div className="mydiv">

                <table className="table table-striped" style={{ marginTop: "20px", color: "brown" }} >
                    <thead>
                        <tr>
                            <th>Notes</th>
                            {/* <th>Dates</th> */}
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.List()}
                    </tbody>
                </table>
            </div>
        </div>}






        </div>


        )
    }
}

export default showResult;









