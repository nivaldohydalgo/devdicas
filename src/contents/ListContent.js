import React from 'react'
import './ListContent.css'


function ListContent(props) {
    
    return (
        <div className="ListContent-Style">
            <h4>ListContent Page</h4>
            <p>Group: {props.group} Tool: {props.tool} Id: {props.id}</p>
            <p>{ props.tool === 1 ? "NodeJS" : null}</p>
            <p>{ props.tool === 2 ? "ReactJS" : null}</p>
            <p onClick={() => props.select(props.group, props.tool, 1)}>Vai para o Id 1</p>
            <p onClick={() => props.select(props.group, props.tool, 2)}>Vai para o Id 2</p>
            <p onClick={() => props.select(props.group, props.tool, 3)}>Vai para o Id 3</p>
        </div>
    )
}

export default ListContent;