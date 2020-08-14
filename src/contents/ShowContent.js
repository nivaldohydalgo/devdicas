import React from 'react'
import './ShowContent.css'

import ShowGroup from '../components/ShowGroup'
import ShowTool from '../components/ShowTool'

import ShowResume from './ShowResume'
import ContentItem from '../components/ContentItem'
// import { GetId } from '../db/DbList'

//const ws = {
//    article: {},
//}

function ShowContent(props) {
    console.log("ShowContent> group...: ", props.group)
    console.log("ShowContent> tool....: ", props.tool)
    console.log("ShowContent> id......: ", props.id)
    
  //  ws.article = GetId(props.id)
  //  console.log(">ShowContent> article: ", ws.article)

    return (
        <div className="ShowContent-Style">
            <ShowGroup group={props.group} />
            <ShowTool group={props.group} tool={props.tool} select={null} inQt={false} />
            <ShowResume {...props} /> 
            <ContentItem {...props} />
        </div>
    )
}

export default ShowContent;