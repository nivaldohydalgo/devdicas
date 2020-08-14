import React from 'react'
import './ShowResume.css'

import { GetId } from '../db/DbList'

const ws = {
    article: {},
}

function ShowResume(props) {
    console.log("ShowResume> group...: ", props.group)
    console.log("ShowResume> tool....: ", props.tool)
    console.log("ShowResume> id......: ", props.id)
    ws.article = GetId(props.id)

    return (
        <div className="ShowResume-Style">
            <div onClick={() => props.select(props.group,props.tool,props.id)}>
                <h4>{ws.article.title}</h4>
                <p>{ws.article.description}</p>
                <p>{ws.article.publicationDate}</p>
            </div>
        </div>
    )
}

export default ShowResume;