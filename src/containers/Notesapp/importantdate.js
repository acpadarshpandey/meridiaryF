import React, {Fragment } from 'react'
import NotesForm from '../form/impdatses/addform'
import DataTable from '../table/table'
import '..//Notesapp/ntp.css';
import '../form/impdatses/date.css'


class Apps extends React.Component {
	 state={
		 shoe:false
	 }
	render(){return ( <div>
		<div className="div">
			<div className="container">

               <h2 style={{"color":"brown",margin:"5px", alignContent:"center"}}>Important Dates to Remember</h2>
          <div className="flex-row">
	<div className="flex-large">
			<Fragment >
				<h3 style={{"color":"brown",margin:"5px", alignContent:"center"}}>Add Notes</h3>
				<NotesForm  />
			</Fragment>
			</div>
		   </div>
		   </div>
		   </div> 
		   <div className="show">
		   <div > 
			   <button className="btn4"onClick={()=>this.setState({shoe:!this.state.shoe})}> {!this.state.shoe? "show data": "Refresh"}</button>
		{!this.state.shoe?null:<DataTable />}
	</div> 
</div>
</div>
		
		
		
			
  
		
	)
}


	}
	
export default Apps;