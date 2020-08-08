import React, { useState } from 'react';
import './App.css';

import Header from './Header'
import Content from './Content'
import MenuBox from './MenuBox'

import MenuIcon from './components/MenuIcon'

function App() {
    /*------------------------------------------
        Controle da apresentação do conteúdo:
            - group:    0 - Home
                        1 - Tips (Dicas)
                        2 - Tools (Ferramentas)
                        3 - Projects (Projetos)
                        4 - Varieties (Variedades)
            - item:     Para group 0 - Home   
                        0 - Homepage
                        1 - Search
                        2 - Contact
                        3 - About
                        Para demais groups
                        0 - List
                        1 - Item (id) 
    ------------------------------------------*/

    const [showMenu, setShowMenu] = useState(false);
    const [group, setGroup] = useState(0);
    const [item, setItem] = useState(0);
    const [id, setId] = useState(0);

    const select = (gr,it,id) => {
        console.log("gr: ", gr, " it: ", it, " id: ", id)
        setGroup(gr)
        setItem(it)
        setId(id)
    }

    return (
        <div className="App-Style">
            <Header />
    <div>group:{group} item:{item} id:{id}</div>
            <Content group={group} item={item} id={id} setGroup={setGroup} setItem={setItem} setId={setId} />
            { showMenu
                ? <MenuBox setShowMenu={setShowMenu} select={select} />
                : <MenuIcon setShowMenu={setShowMenu} />
            }
        </div>
    );
}

export default App;
