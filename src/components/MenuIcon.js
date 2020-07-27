import React from 'react'
import './MenuIcon.css'

function MenuIcon(props) {

    return (
        <div className="MenuIcon-Style" onClick={() => props.setShowMenu(true)}>
            <span class="material-icons Icon-Style">menu</span>
        </div>
    )
}

export default MenuIcon;