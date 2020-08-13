/*======================================================================
Module......: ShowGroup.js
Objective...: Mostrar o nome do Grupo (ex. Dicas)
Author......: Nivaldo Hydalgo
Created in..: 13/08/2020
Parameters..: group
------------------------------------------------------------------------
Ver0001-13/08/2020-Nivaldo-Implantação
======================================================================*/

import React from 'react'
import './ShowGroup.css'

import { GetGroup } from '../db/DbMenu'

const ws = {
    group: {},
}

function ShowGroup(props) {
    ws.group = GetGroup(props.group)

    if ( ws.group === null ) {
        return null
    } else {
        return (
            <div className="ShowGroup-Style">
                { ws.group.title }
            </div>
        )
    }

}

export default ShowGroup;
