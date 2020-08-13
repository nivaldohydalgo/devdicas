
const ws = {
    ind: 0,
}

const DbGroups = [
    {   id: 1,
        name: "tips",
        title: "Dicas",
        inTool: true,
        tools: [ 1, 2 ],
    },
    {   id: 2,
        name: "tools",
        title: "Ferramentas",
        inTool: true,
        tools: [ 1, 2 ],
    },
    {   id: 3,
        name: "projects",
        title: "Projetos",
        inTool: true,
        tools: [ 2 ],
    },
    {   id: 4,
        name: "varieties",
        title: "Variedades",
        inTool: false,
    },
]

const DbTools = [
    {   id: 1,
        name: "nodejs",
        title: "Node JS",
    },
    {   id: 2,
        name: "reactjs",
        title: "React JS",
    },
]

export const GetGroup = (id) => {
    for( ws.ind = 0 ; ws.ind < DbGroups.length ; ws.ind++ ) {
        if ( DbGroups[ws.ind].id === id ) {
            return DbGroups[ws.ind]
        }
    }
    return null
}

export function ListGroups() {
    return DbGroups
}

export function GetTool(id) {
    for( ws.ind = 0 ; ws.ind < DbTools.length ; ws.ind++ ) {
        if ( DbTools[ws.ind].id === id ) {
            return DbTools[ws.ind]
        }
    }
    return null
}

export const ListTools = () => {
    return DbTools
}


