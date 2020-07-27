import React from 'react'
import './MenuBox.css'

function MenuBox(props) {

    return (
        <div className="MenuBox-Style">
            <div className="MenuBox-Close">
                <span class="material-icons MenuBox-Close-Icon" onClick={() => props.setShowMenu(false)}>close</span>
            </div>  
            <div className="MenuBox-Itens">
                <div className="Menu-Item">
                    Dicas
                </div>
                <div className="Menu-Item">
                    Ferramentas
                </div>
                <div className="Menu-Item">
                    Projetos
                </div>
            </div>
        </div>
    )
}

export default MenuBox;