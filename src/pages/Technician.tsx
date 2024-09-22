import React from 'react'
import { handleCorrection } from '../helpers/formCorrection'
import UserHeader from '../components/UserHeader'

export default function Technician() {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        throw new Error('Function not implemented.')
    }

    function handleMoreDetails(e: React.MouseEvent<HTMLSpanElement>) {
        e.currentTarget.innerText = e.currentTarget.parentElement.parentElement.lastElementChild.classList.toggle("opened") ? '-' : '+'
    }

    return (
        <div id='technician'>
            <UserHeader userName='Roberto' userImage='worker.svg' />
            <div id='filters'>
                <span>Tags</span>
                <span>Selecionados</span>
                <span>Todos</span>
            </div>
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
                    <h3 className="title">Socorro, minha calculadora explodiu!!</h3>
                    <span className='date' >Criado em 21/03/2024</span>
                    <p className="by">Por João Silva</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="tags">
                            <span className="tag solved">Resolvido</span>
                            <span className="tag">Urgente</span>
                            <span className="tag">Calculadora</span>
                            <span className="tag">Explosão</span>
                        </div>
                        <span className='more-details' onClick={handleMoreDetails}>+</span>
                    </div>
                    <div className="details">
                        <div className='description'><h1>Altas tensões!!</h1> Tentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorio</div>
                        <button className='start-chat'>Iniciar atendimento</button>
                    </div>
                </div>
                <div className="ticket">
                    <h3 className="title">Socorro, minha calculadora explodiu!!</h3>
                    <span className='date' >Criado em 21/03/2024</span>
                    <p className="by">Por João Silva</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="tags">
                            <span className="tag solved">Resolvido</span>
                            <span className="tag">Urgente</span>
                            <span className="tag">Calculadora</span>
                            <span className="tag">Explosão</span>
                        </div>
                        <span className='more-details' onClick={handleMoreDetails}>+</span>
                    </div>
                    <div className="details">
                        <div className='description'><h1>Altas tensões!!</h1> Tentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorio</div>
                        <button className='start-chat'>Iniciar atendimento</button>
                    </div>
                </div>
                <div className="ticket">
                    <h3 className="title">Socorro, minha calculadora explodiu!!</h3>
                    <span className='date' >Criado em 21/03/2024</span>
                    <p className="by">Por João Silva</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="tags">
                            <span className="tag solved">Resolvido</span>
                            <span className="tag">Urgente</span>
                            <span className="tag">Calculadora</span>
                            <span className="tag">Explosão</span>
                        </div>
                        <span className='more-details' onClick={handleMoreDetails}>+</span>
                    </div>
                    <div className="details">
                        <div className='description'><h1>Altas tensões!!</h1> Tentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorio</div>
                        <button className='start-chat'>Iniciar atendimento</button>
                    </div>
                </div>
                <div className="ticket">
                    <h3 className="title">Socorro, minha calculadora explodiu!!</h3>
                    <span className='date' >Criado em 21/03/2024</span>
                    <p className="by">Por João Silva</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="tags">
                            <span className="tag solved">Resolvido</span>
                            <span className="tag">Urgente</span>
                            <span className="tag">Calculadora</span>
                            <span className="tag">Explosão</span>
                        </div>
                        <span className='more-details' onClick={handleMoreDetails}>+</span>
                    </div>
                    <div className="details">
                        <div className='description'><h1>Altas tensões!!</h1> Tentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorio</div>
                        <button className='start-chat'>Iniciar atendimento</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
