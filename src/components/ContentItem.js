import React from 'react'
import './ContentItem.css'



import Node001 from '../db/Node001'

const ws = {
    contentArticle: null,
}

function ContentItem(props) {
    console.log("ContentItem> group...: ", props.group)
    console.log("ContentItem> tool....: ", props.tool)
    console.log("ContentItem> id......: ", props.id)

    switch(props.tool) {
        case 1:
            ws.contentArticle = Node001(props.id)
            break;
        case 2:
            break;
        default:
    } 
    
    return (
        <div className="ContentItem-Style">
            {ws.contentArticle}
        </div>
    )
}

export default ContentItem;