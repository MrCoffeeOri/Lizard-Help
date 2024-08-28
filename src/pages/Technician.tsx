import React from 'react'
import { handleCorrection } from '../helpers/formCorrection'

export default function Technician() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.')
    }

    function handleMoreDetails(e: React.MouseEvent<HTMLSpanElement>) {
        e.currentTarget.innerText = e.currentTarget.parentElement.lastElementChild.classList.toggle("opened") ? '-' :  '+'
    }

    return (
        <div id='technician'>
            {/*
            <form className='form' onSubmit={handleSubmit}>
            <img src="/logo.webp" alt="" />
            <input
                type="text"
                id="token"
                placeholder="Chave de acesso"
                onChange={e => handleCorrection(e, e => e.target.value.match(/TODO: Token RegexExp) != null)}
                required
            />
            <p>Chave de acesso incorreta</p>
            <button type="submit">Entrar</button>
                </form>*/}
            <div id='tickets'>
                <div className="ticket">
                    <span className='more-details' onClick={handleMoreDetails}>+</span>
                    <h3 className="title">Socorro, minha calculadora explodiu!!</h3>
                    <span className='date' >Criado em 21/03/2024</span>
                    <p className="by">Por João Silva</p>
                    <div className="tags">
                        <span className="tag">Urgente</span>
                        <span className="tag">Calculadora</span>
                        <span className="tag">Explosão</span>
                    </div>
                    <div className="details">
                        <div className='description'><h1>Altas tensões!!</h1> Tentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorio</div>
                        <button className='start-chat'>Iniciar atendimento</button>
                        <div className='chat'>
                            <div className="messages box">
                                <div className="message">
                                    <p><strong>Sistema:</strong> Atendimento iniciado</p>
                                    <p className="date">Enviado em: 2024-08-10</p>
                                    <span className="view-status viewed">Visualizado</span> 
                                </div>
                                <div className="message">
                                    <p><strong>Maria:</strong> Isso parece perigoso, você está bem?</p>
                                    <p className="date">Enviado em: 2024-08-10</p>
                                    <span className="view-status viewed">Visualizado</span> 
                                </div>
                                <div className="message">
                                    <p><strong>Carlos:</strong> Talvez você deva trocar de calculadora.</p>
                                    <p className="date">Enviado em: 2024-08-11</p>
                                    <span className="view-status not-viewed">Não Visualizado</span> 
                                </div>
                                <div className="message">
                                    <p><strong>Carlos:</strong> Talvez você deva trocar de calculadora.</p>
                                    <p className="date">Enviado em: 2024-08-11</p>
                                    <span className="view-status not-viewed">Não Visualizado</span> 
                                </div>
                                <div className="message">
                                    <p><strong>Carlos:</strong> Talvez você deva trocar de calculadora.</p>
                                    <p className="date">Enviado em: 2024-08-11</p>
                                    <span className="view-status not-viewed">Não Visualizado</span> 
                                </div>
                            </div>
                            <div>
                                <input type="text" />
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
