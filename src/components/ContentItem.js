import React from 'react'
import './ContentItem.css'


function ContentItem(props) {

    
    return (
        <div className="ContentItem-Style" onClick={() => props.setShowMenu(true)}>
            {props.children}
        </div>
    )
}

export default ContentItem;