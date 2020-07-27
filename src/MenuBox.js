import React from 'react'
import './MenuBox.css'

function MenuBox(props) {

    return (
        <div className="MenuBox-Style">
            <div className="MenuBox-Itens">
                Dicas Ferramentas Projetos
            </div>
            <div className="MenuBox-Close">
                <span class="material-icons MenuBox-Close-Icon" onClick={() => props.setShowMenu(false)}>close</span>
            </div>  
        </div>
    )
}

export default MenuBox;