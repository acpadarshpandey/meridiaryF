import React, { Component } from 'react';
import axios from 'axios';
import '../impdatses/date.css';
   

export default class CreateNotes extends Component {

    constructor(props) {
        super(props);

        this.data = this.data.bind(this);
        this.date = this.date.bind(this);;
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
           data: '',
            date: null,
    
    
        }
    }
    
   data(e) {
        this.setState({
           data: e.target.value
        });
    }

    date(e) {
        this.setState({
            date: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();
        
        // console.log(`Form submitted:`);
        // console.log(`Data: ${this.state.data}`);
        // console.log(`date: ${this.state.date}`);
    

    const payload = {
       data: this.state.data,
         date: this.state.date,
    
    };

    axios.post('https://meridiaryb.herokuapp.com/impdates/addnotes', payload)
        .then(res => { 
            console.log(res.data) 
            this.setState({
               data: '',
            date:'',
              
            })});
   
}

    
    

    render() {
        return (<div className="mydiv">
            
            <div style={{marginTop: 10}}>
            <form style={{"color":"brown",margin:"5px", alignContent:"center"}} onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <h6> Notes </h6>
                    <input  type="text"
                            className="input"
                            value={this.state.data} 
                                onChange={this.data}
                            />
                </div>
                <div className="form-group">
                <h6> Date </h6>
                    <input 
                            type="date" 
                            className="input"
                           value={this.state.date} 
                                 onChange={this.date}
                            />
                </div>
               
                <div className="form-group">
                    <input type="submit" value="Create Notes" className="btn2" />
                </div>
            </form>
        </div>  </div>
            
        )
    } 
}

//   render(){
// 	return (
// 		<form
// 			onSubmit={this.onSubmit}
// 		>    <label>Notes</label>
// 			<input type="text" name="notes" value={this.state.Data} onChange={this.data} />
// 			<label>date</label>
// 			<input type="date" name="date" value={this.setState.date}  onChange={this.date} />
// 			<input type="submit" value="Create Notes" className="btn btn-primary"/>
// 		</form>
// 	)
// }
//}

