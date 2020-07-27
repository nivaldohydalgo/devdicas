import React from 'react'
import './Content.css'

function Content() {

    const prompt1 = "C:\>node --version"

    return (
        <div className="Content-Style">
 
 
            <div className="App-Content">
                <div className="App-Content-Title">
                    Como instalar o Node JS e executar um Hello Word! 
                </div>
                <div className="App-Content-Text">
                    <p>O Node JS está disponível para download no site oficial:</p>
                    <p><a href="https://nodejs.org">nodejs.org</a></p>
                    <p>Provavelmente o site irá reconhecer o seu sistema operacional, e irá mostrar o link para o download já adequado ao seu sistema</p>
                    <p>Prefira a versão LTS que o site recomenda para a maioria dos usuários, porque é a versão mais estável do framework.</p>
                    <p>Faça o download do instalador e execute concordando com as opções padrão, que são suficientes para um primeiro contato com o aplicativo.</p>
                    <p>Para testar se a instalação ocorreu com sucesso, abra o prompt de comando do windows e execute o comando:</p>
                    <p className="App-Content-Prompt">{prompt1}</p>
                    <p>Se a instalação ocorreu com sucesso será mostrada a versão que você instalou.</p>
                    <p>Pronto, o Node JS já está instalado no seu computador</p>
                </div>
            </div>
        
 
        </div>
    )
}

export default Content;