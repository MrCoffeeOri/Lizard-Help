import React, { JSXElementConstructor, useContext, useEffect, useState } from 'react'
import { handleCorrection } from '../helpers/formCorrection'
import UserHeader from '../components/UserHeader'
import { userContext } from '../components/UserContext';

export default function Technician() {
    const [tags, setTags] = useState<{ content: string, id: number }[]>([]);
    const { user, setUser } = useContext(userContext)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        throw new Error('Function not implemented.');
    };
    
    const handleTagCreation = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && e.currentTarget.value.trim().length > 0 && tags.length < 20) {
            setTags([...tags, { content: e.currentTarget.value, id: Math.random() }]);
            e.currentTarget.value = "";
        }
    };
    
    const handleTagDelete = (e: React.MouseEvent<HTMLSpanElement>) => {
        setTags(tags.filter(tag => tag.id !== Number((e.currentTarget.parentElement as HTMLDivElement).id)));
    };
    
    const handleTagInputLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.value = e.target.value.length > 20 ? e.target.value.slice(0, 20) : e.target.value.trim();
    };
    
    const handleTagFilterShow = () => {
        const tagsManager = document.getElementById("tagsManager")
        if (tagsManager.classList.contains('show'))
            document.querySelector("#filters > span.selected")?.classList.remove("selected")
        tagsManager.classList.toggle("show")
        if (!tagsManager.classList.contains('show'))
            (document.querySelector('input[type="text"]') as HTMLInputElement).value = ''
    }

    const handleFilterSelection = (e: React.MouseEvent<HTMLSpanElement>) => {
        document.querySelector("#filters > span.selected")?.classList.remove("selected")
        e.currentTarget.classList.add("selected")
    }
    
    const handleMoreDetails = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.innerText = e.currentTarget.parentElement?.parentElement?.lastElementChild?.classList.toggle("opened") ? '-' : '+'
    };    

    return (
        <div id='technician'>
            <UserHeader>
                <img src="/chat.png" alt="" />
                <img src="/gear.png" alt="" />
            </UserHeader>
            <div id='filters'>
                <div id='tagsManager'>
                    <span className='close' onClick={handleTagFilterShow}>x</span>
                    <div>
                        {tags.length > 0 ? tags.map(tag => <div className='tag' id={tag.id.toString()}><span className='delete' onClick={handleTagDelete}>x</span><span>{tag.content}</span></div>) : <p>Suas tags serão mostradas aqui</p>}
                    </div>
                    <input onChange={handleTagInputLimit} onKeyDown={handleTagCreation} type="text" placeholder='Insira uma nova tag'/>
                </div>
                <span onClick={e => {handleFilterSelection(e); handleTagFilterShow()}}>Tags</span>
                <span onClick={handleFilterSelection}>Selecionados</span>
                <span onClick={handleFilterSelection}>Todos</span>
            </div>
            {/*
            <form className='form' onSubmit={handleSubmit}>
            <img src="/logo.webp" alt="" />
            <inputA
                type="text"
                id="token"
                placeholder="Chave de acesso"
                onChange={e => handleCorrection(e, e => e.target.value.match(/TODO: Token RegexExp) != null)}
                required
            />
            <p>Chave de acesso incorreta</p>
            <button type="submit">Entrar</button>
                </form>*/}
            <div id='tickets' className='scrollable'>
                <div className="ticket">
                    <p className='state'>Padrão</p>
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
                        <div className='description scrollable'><h1>Altas tensões!!</h1> Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorio</div>
                        <button className='start-chat'>Iniciar atendimento</button>
                    </div>
                </div>
                <div className="ticket">
                    <p className='state medium'>Médio</p>
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
                        <div className='description scrollable'><h1>Altas tensões!!</h1> Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorio</div>
                        <button className='start-chat'>Iniciar atendimento</button>
                    </div>
                </div>
                <div className="ticket">
                    <p className='state critical'>Crítico</p>
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
                        <div className='description scrollable'><h1>Altas tensões!!</h1> Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0Tentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorioTentei dividir por 0, e acabei dividindo o proprio tecido espacial. Em suma, ela explodiu e pegou fogo no escritorio</div>
                        <button className='start-chat'>Iniciar atendimento</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
