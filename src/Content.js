import React from 'react'
import './Content.css'

import TitleItem from './components/TitleItem'
import ContentItem from './components/ContentItem'

import Home from './main/Home'
import Search from './main/Search'
import Contact from './main/Contact'
import About from './main/About'

import PageNotFound from './components/PageNotFound'

import { reactList } from './contents/ReactList'
import React001 from './contents/React001'

function Content(props) {

    // const prompt1 = "C:\>node --version"

    switch (props.group) {

        case 0: 
            switch (props.item) {
                case 0: { return( <Home /> ) } break;
                case 1: { return( <Search /> ) } break;
                case 2: { return( <Contact /> ) } break;
                case 3: { return( <About /> ) } break;
                default: { return( <PageNotFound /> ) };
            }
            break;
        case 1:
            

            return (
                <div className="Content-Style"> 

            

                <TitleItem icon="nodejs">
                    Como instalar o Node JS e executar  um Hello Word!
                </TitleItem>

                <ContentItem>
                    <React001 id={1} />
                </ContentItem>

                </div>


            )
            break;
        default:
            return ( <PageNotFound /> )
    }

}

export default Content;

