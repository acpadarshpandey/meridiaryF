import React, {Fragment } from 'react'
import NotesForm from '../form/impdatses/addform'
import DataTable from '../table/table'
import '..//Notesapp/ntp.css';
import '../form/impdatses/date.css'


class Apps extends React.Component {

	render(){return ( <div>
		<div className="div">
			<div className="container">

               <h1 style={{"color":"brown",margin:"5px", alignContent:"center"}}>Important Dates to Remember</h1>
          <div className="flex-row">
	<div className="flex-large">
			<Fragment >
				<h2 style={{"color":"brown",margin:"5px", alignContent:"center"}}>Add Notes</h2>
				<NotesForm  />
			</Fragment>
			</div>
		   </div>
		   </div>
		   </div> 
		   <div className="show">
		   <div className="container"> 
		<h2 style={{"color":"brown",marginLeft:"5rem",marginTop:"2rem", alignContent:"center"}}>View Notes</h2>
		<DataTable />
	</div> 
</div>
</div>
		
		
		
			
  
		
	)
}


	}
	
export default Apps;