import React from 'react'
import './ListTools.css'

import { GetGroup } from '../db/DbMenu'
import ShowGroup from '../components/ShowGroup'
import ShowTool from '../components/ShowTool'

const ws = {
    group: {},
    tool: {},
    articles: [],
    qtArticles: ' ',
}

function ListTools(props) {
    
    function ListTool(tool) {
        return ( 
            <div key={tool.toString()}>
                <ShowTool group={props.group} tool={tool} select={props.select} inQt={true} /> 
            </div>
        )
    }

    ws.group = GetGroup(props.group)
    return (
        <div className="ListTools-Style">
            <div>
                <ShowGroup group={props.group} />
            </div>
            { ws.group.tools.map( ListTool ) }
        </div>
    )
}

export default ListTools;
