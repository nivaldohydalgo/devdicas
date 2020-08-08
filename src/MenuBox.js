import React from 'react'
import './MenuBox.css'

function MenuBox(props) {

    return (
        <div className="MenuBox-Style">
            <div>
                <div className="MenuBox-Close-Box">
                    <span class="material-icons MenuBox-Close-Icon" onClick={() => props.setShowMenu(false)}>close</span>
                </div>
            </div>  
            <div className="MenuBox-Itens">
                <div className="MenuBox-Icons">
                    <span class="material-icons MenuBox-Icon-Item" onClick={() => props.select(0,0,0)}>home</span>    
                    <span class="material-icons MenuBox-Icon-Item" onClick={() => props.select(0,1,0)}>search</span>    
                    <span class="material-icons MenuBox-Icon-Item" onClick={() => props.select(0,2,0)}>mail</span>    
                    <span class="material-icons MenuBox-Icon-Item" onClick={() => props.select(0,3,0)}>announcement</span>    
                </div>
                <div className="Menu-Item" onClick={() => props.select(1,0,0)}>
                    Dicas
                </div>
                <div className="Menu-Item" onClick={() => props.select(2,0,0)}>
                    Ferramentas
                </div>
                <div className="Menu-Item" onClick={() => props.select(3,0,0)}>
                    Projetos
                </div>
                <div className="Menu-Item" onClick={() => props.select(4,0,0)}>
                    Variedades
                </div>
            </div>
        </div>
    )
}

export default MenuBox;