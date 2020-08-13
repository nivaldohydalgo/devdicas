
/*----------------------------------------------
    GRUPOS E FERRAMENTAS PREVISTOS:
    group:  1 -> tips (Dicas)
            2 -> tools (Ferramentas)
            3 -> projects (Projetos)
            4 -> varieties (Variedades)
    tool:   1 -> nodejs (Node JS)
            2 -> reactjs (React JS)
----------------------------------------------*/

const ws = {
    ind: 0,
//    id: 0,
}

export const DbList = [
    {   id: 1,
        group: 2,
        tool: 1,
        title: "Como instalar o Node JS em seu computador Windows",
        description: "Passo a passo para fazer o download e instalar o Node JS em computadores com sistema Windows",
        publicationDate: new Date(2020, 8, 9, 0, 0, 0, 0),
    },
    {   id: 2,
        group: 2,
        tool: 1,
        title: "Criando um Hello Word com o Node JS no terminal",
        description: "Como executar um programa javascript simples com o Node JS e exibir um Hello Word no terminal",
        publicationDate: new Date(2020, 8, 9, 0, 0, 0, 0),
    },
]

export function GetId(id) {
    for( ws.ind = 0 ; ws.ind < DbList.length ; ws.ind++ ) {
        if ( DbList[ws.ind].id === id ) {
            return DbList[ws.ind]
        }
    }
    return null
}

export function ListArticles(gr,tl) {
    return DbList.filter((item) => {
         return (item.group === gr && item.tool === tl)
    })
}