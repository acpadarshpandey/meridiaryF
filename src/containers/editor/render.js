import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import '../form/impdatses/date.css'



export default class renderList extends Component {


    state = {
        loading: true,
        Lists: []
    };






    componentDidMount() {
        axios.get('https://meridiaryb.herokuapp.com/editor/showContent')
            .then(response => {
                console.log(response)
                this.setState({ Lists: response.data.List[0], loading: false });
            })

            .catch(function (error) {
                console.log(error);
            })
    }


    render() {
        return (


            <div>
                <h3>My Thoghts</h3>

                <div> {this.state.loading || !this.state.Lists ? <div>loading....</div> : <div>{this.state.Lists.content}</div>}</div>
            </div>

        )
    }
}