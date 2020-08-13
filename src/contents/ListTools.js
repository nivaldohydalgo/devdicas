import React from 'react'
import './ListTools.css'

function ListTools(props) {
    
    return (
        <div className="ListTools-Style">
            <h4>ListTools Page</h4>
            <p>Group: {props.group} Tool: {props.tool} Id: {props.id}</p>
            <p onClick={() => props.select(props.group, 1, 0)}>Node JS</p>
            <p onClick={() => props.select(props.group, 2, 0)}>React JS</p>
        </div>
    )
}

export default ListTools;