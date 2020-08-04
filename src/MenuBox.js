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
                    <span class="material-icons MenuBox-Icon-Item" onClick={() => console.log("Clicou no Home")}>home</span>    
                    <span class="material-icons MenuBox-Icon-Item" onClick={() => console.log("Clicou no Home")}>mail</span>    
                    <span class="material-icons MenuBox-Icon-Item" onClick={() => console.log("Clicou no Home")}>announcement</span>    
                </div>
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