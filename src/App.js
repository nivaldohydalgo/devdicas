import React, { useState } from 'react';
import './App.css';

import Header from './Header'
import Content from './Content'
import MenuBox from './MenuBox'

import MenuIcon from './components/MenuIcon'

function App() {

    const [showMenu, setShowMenu] = useState(false);
    const [group, setGroup] = useState(0);
    const [tool, setTool] = useState(0);
    const [id, setId] = useState(0);

    const select = (gr,tl,id) => {
        setGroup(gr)
        setTool(tl)
        setId(id)
        setShowMenu(false)
    }

    return (
        <div className="App-Style">
            <Header />
            <Content group={group} tool={tool} id={id} select={select} />
            { showMenu
                ? <MenuBox setShowMenu={setShowMenu} select={select} />
                : <MenuIcon setShowMenu={setShowMenu} />
            }
        </div>
    );
}

export default App;
