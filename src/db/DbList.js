
/*----------------------------------------------
    type: "tip", "tool", "project", "variety",
    tool: "nodejs", "reactjs",
----------------------------------------------*/

const ws = {
    ind: 0,
//    id: 0,
}

export const DbList = [
    {   id: 1,
        type: "tool",
        tool: "nodejs",
        title: "Como instalar o Node JS em seu computador Windows",
        description: "Passo a passo para fazer o download e instalar o Node JS em computadores com sistema Windows",
        publicationDate: new Date(2020, 8, 9, 0, 0, 0, 0),
    },
    {   id: 2,
        type: "tool",
        tool: "nodejs",
        title: "Criando um Hello Word com o Node JS no terminal",
        description: "Como executar um programa javascript simples com o Node JS e exibir um Hello Word no terminal",
        publicationDate: new Date(2020, 8, 9, 0, 0, 0, 0),
    },
]

export const GetId = (id) => {
    for( ws.ind = 0 ; ws.ind < DbList.length ; ws.ind++ ) {
        if ( DbList[ws.ind].id === id ) {
            return DbList[ws.ind]
        }
    }
    return null
}
