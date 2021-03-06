import React from 'react'
import './MenuBox.css'

import { ListGroups } from './db/DbMenu'

function MenuBox(props) {

    function MenuGroup(item) {
        return (
            <div key={item.id.toString()} className="Menu-Item" onClick={() => props.select(item.id,0,0)}>
                {item.title}
            </div>            
        )
    }

    return (
        <div className="MenuBox-Style">
            <div>
                <div className="MenuBox-Close-Box">
                    <span className="material-icons MenuBox-Close-Icon" onClick={() => props.setShowMenu(false)}>close</span>
                </div>
            </div>  
            <div className="MenuBox-Itens">
                <div className="MenuBox-Icons">
                    <span className="material-icons MenuBox-Icon-Item" onClick={() => props.select(0,0,0)}>home</span>    
                    <span className="material-icons MenuBox-Icon-Item" onClick={() => props.select(0,0,1)}>search</span>    
                    <span className="material-icons MenuBox-Icon-Item" onClick={() => props.select(0,0,2)}>mail</span>    
                    <span className="material-icons MenuBox-Icon-Item" onClick={() => props.select(0,0,3)}>announcement</span>    
                </div>
                { ListGroups().map( MenuGroup ) }
            </div>
        </div>
    )
}

export default MenuBox;