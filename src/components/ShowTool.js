/*======================================================================
Module......: ShowTool.js
Objective...: Mostrar o nome da Ferramenta e Icone
            : Opcionalmente pode mostrar a quantidade de artigos    
Author......: Nivaldo Hydalgo
Created in..: 13/08/2020
Parameters..: group, tool, select, inQt
------------------------------------------------------------------------
Ver0001-13/08/2020-Nivaldo-Implantação
======================================================================*/

import React from 'react'
import './ShowTool.css'

import { GetTool } from '../db/DbMenu'
import { ListArticles } from '../db/DbList'

import iconNodeJS from '../assets/nodejs128.png'
import iconReactJS from '../assets/reactjs128.png'

const ws = {
    icon: ' ',
    tool: {},
    inIcon: true,
    articles: [],
}

function ShowTool(props) {
    ws.tool = GetTool(props.tool)
    ws.inIcon = true

    if ( ws.tool === null ) {
        return null
    } else {
        /*-- Seleciona o Icone --*/
        switch(props.tool) {
            case 1:
                ws.icon = iconNodeJS
                break;
            case 2:
                ws.icon = iconReactJS
                break;
            default:
                ws.inIcon = false
        }         
        /*-- Recupera a quantidade de Artigos --*/
        if ( props.inQt ) {
            ws.articles = ListArticles(props.group, props.tool)
        }
        /*-- Retorna o componente --*/
        return (
            <div className="ShowTool-Style">
                <div onClick={() => props.select(props.group,props.tool,0)}>
                    { ws.inIcon   
                        ? <img className="ShowTool-Icon" src={ws.icon}></img>
                        : null
                    }
                    <span>{ ws.tool.title }</span>
                </div>
                { props.inQt
                    ? <div className="Qt-Articles-Style">{ws.articles.length} Artigos</div>
                    : null
                }
            </div>
        )
    }

}

export default ShowTool;
