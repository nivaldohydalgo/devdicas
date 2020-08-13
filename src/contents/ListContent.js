import React from 'react'
import './ListContent.css'

import ShowGroup from '../components/ShowGroup'
import ShowTool from '../components/ShowTool'

function ListContent(props) {
    
    return (
        <div className="ListContent-Style">
            <ShowGroup group={props.group} />
            <ShowTool group={props.group} tool={props.tool} select={null} inQt={false} />


            <p onClick={() => props.select(props.group, props.tool, 1)}>Vai para o Id 1</p>
            <p onClick={() => props.select(props.group, props.tool, 2)}>Vai para o Id 2</p>
            <p onClick={() => props.select(props.group, props.tool, 3)}>Vai para o Id 3</p>
        </div>
    )
}

export default ListContent;