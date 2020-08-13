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
    
    const ListTool = (tool) => {
        return ( <ShowTool group={props.group} tool={tool} select={props.select} inQt={true} /> )
    }

    ws.group = GetGroup(props.group)
    return (
        <div className="ListTools-Style">
            <ShowGroup group={props.group} />
            { ws.group.tools.map( ListTool ) }
        </div>
    )
}

export default ListTools;
