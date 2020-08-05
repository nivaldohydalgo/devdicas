import React, { useState } from 'react';
import './App.css';

import Header from './Header'
import Content from './Content'
import MenuBox from './MenuBox'

import MenuIcon from './components/MenuIcon'

function App() {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="App-Style">

            <Header />

            <Content />

            { showMenu
                ? <MenuBox setShowMenu={setShowMenu} />
                : <MenuIcon setShowMenu={setShowMenu} />
            }

        </div>
    );
}

export default App;
