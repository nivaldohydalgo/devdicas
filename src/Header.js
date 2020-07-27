import React from 'react'
import './Header.css'

import devIcon from "./assets/dev-Icon.png"

function Header() {

    return (
        <div className="Header-Style">
            <div className="Header-Box-Icon-Style">
                <img className="Header-Icon-Style" src={devIcon}></img>
            </div>
            <div className="Header-Logo-Box-Style">
                <div className="Header-Logo-Text">devDicas</div>
                <div className="Header-Name-Text">by nivaldo hydalgo</div>
            </div>
        </div>
    )
}

export default Header;