import React from 'react'
import './ListContent.css'

import ShowGroup from '../components/ShowGroup'
import ShowTool from '../components/ShowTool'
import ShowResume from './ShowResume'
import { ListArticles } from '../db/DbList'

const ws = {
    articles: [],
}

function ListContent(props) {
    
    ws.articles = ListArticles( props.group, props.tool )

    function ListResume(article) {
        return ( 
            <div key={article.id.toString()}>
                <ShowResume group={props.group} tool={props.tool} id={article.id} select={props.select}/> 
            </div>
        )
    }

    return (
        <div className="ListContent-Style">
            <ShowGroup group={props.group} />
            <ShowTool group={props.group} tool={props.tool} select={null} inQt={false} />
            { ws.articles.map( ListResume ) }
        </div>
    )
}

export default ListContent;