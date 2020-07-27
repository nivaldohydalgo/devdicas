import React from 'react'
import './TitleItem.css'

import titleIcon from "../assets/nodejs128.png"


function TitleItem(props) {

    const icon = titleIcon

    return (
        <div className="TitleItem-Style" onClick={() => props.setShowMenu(true)}>
            { props.icon   
                ? <img className="TitleItem-Icon" src={icon}></img>
                : null
            }
            {props.children}
        </div>
    )
}

export default TitleItem;