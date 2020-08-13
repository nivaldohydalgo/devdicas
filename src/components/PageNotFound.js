import React from 'react'
import './PageNotFound.css'

function PageNotFound(props) {

    return (
        <div className="PageNotFound-Style">
            <p>Ops!! Página não encontrada.</p>
            <span>Desculpe, estamos trabalhando para resolver isso.</span>
            <small>(Error control: PageNotFound {props.group}:{props.tool}:{props.id})</small>
        </div>
    )
}

export default PageNotFound;