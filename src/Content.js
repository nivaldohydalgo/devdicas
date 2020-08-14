import React from 'react'
import './Content.css'

// import TitleItem from './components/TitleItem'

import Home from './main/Home'
import Search from './main/Search'
import Contact from './main/Contact'
import About from './main/About'

import ListTools from './contents/ListTools'
import ListContent from './contents/ListContent'
import ShowContent from './contents/ShowContent'
import PageNotFound from './components/PageNotFound'

// import { reactList } from './contents/ReactList'
// import React001 from './contents/React001'

import { GetGroup , GetTool } from './db/DbMenu'
import { GetId } from './db/DbList'

const ws = {
    group: {},
    tool: {},
    id: {},
}

function Content(props) {

    if ( props.group === 0 ) {
        //*-- Group 0 - HOME --*//
        switch (props.id) {
            case 0: return( <Home /> );
            case 1: return( <Search /> );
            case 2: return( <Contact /> );
            case 3: return( <About /> );
            default: return( <PageNotFound {...props} /> );
        }
    } else {
        //*-- Group > 0 - DEMAIS GRUPOS --*//
        ws.group = GetGroup(props.group)
        ws.tool = GetTool(props.tool)
        ws.id = GetId(props.id)
        if ( ws.group === null ) {
            return( <PageNotFound {...props} /> )
        } else {
            if ( props.id === 0 ) {
                if ( ws.group.inTool ) {
                    if ( props.tool === 0 ) {
                        return( <ListTools {...props} /> )
                    } else {
                        if ( ws.tool === null ) {
                            return( <PageNotFound {...props} /> )
                        } else {
                            return( <ListContent {...props}  /> )
                        }
                    }
                } else {
                    return( <ListContent {...props}  /> )
                }
            } else {
                if ( ws.id === null ) {
                    return( <PageNotFound {...props} /> )
                } else {
                    return( <ShowContent {...props} /> )
                }
            }
        }
    }

}

export default Content;
