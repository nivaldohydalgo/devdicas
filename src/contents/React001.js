import React from 'react'

function React001(props) {

    switch (props.id) {
        /*-- ReactJS - Como instalar o React JS em seu computador Windows --*/
        case 1: 
            return (
                <div>
                    <p>O Node JS está disponível para download no site oficial:</p>
                    <p className="ContentItem-Center"><a href="https://nodejs.org" target="_blank">https://nodejs.org/</a></p>
                    <p className="ContentItem-Center"><a href="https://nodejs.org" target={"_blank"}>https://nodejs.org/</a></p>
                    <p>Provavelmente o site irá reconhecer o seu sistema operacional, e irá mostrar o link para o download já adequado ao seu sistema</p>
                    <p>Prefira a versão LTS que o site recomenda para a maioria dos usuários, porque é a versão mais estável do framework.</p>
                    <p>Faça o download do instalador e execute concordando com as opções padrão, que são suficientes para um primeiro contato com o aplicativo.</p>
                    <p>Para testar se a instalação ocorreu com sucesso, abra o prompt de comando do windows e execute o comando:</p>
                    <p className="ContentItem-Prompt">&gt;node --version</p>
                    <p>Se a instalação ocorreu com sucesso será mostrada a versão que você instalou.</p>
                    <p>Pronto, o Node JS já está instalado no seu computador</p>
                </div>
            )
            break;
        default:
            return ( <div><p>Matéria não localizada (React001)</p></div> )
            break;
    }

}

export default React001;