import React from 'react'
import './ShowContent.css'


function ShowContent(props) {

    
    return (
        <div className="ShowContent-Style">
            <h4>ShowContent Page</h4>
            <p>Group: {props.group} Tool: {props.tool} Id: {props.id}</p>
        </div>
    )
}

export default ShowContent;