import React, { JSXElementConstructor, useContext, useEffect, useRef, useState } from 'react'
import { handleCorrection } from '../helpers/formCorrection'
import UserHeader from '../components/UserHeader'
import { userContext } from '../components/UserContext';
import ModalBackground from '../components/ModalBackground';
import { socket } from '../helpers/socket';

export default function Technician() {
    const [tags, setTags] = useState<{ content: string, id: number }[]>([]);
    const [selectedChat, setSelectedChat] = useState<number>(0)
    const { user, setUser } = useContext(userContext)
    const chatModalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        !socket.connected && socket.connect()
    }, [])

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

    const toggleChatVisibility = () => {
        document.getElementById("modal-background").classList.toggle("hide")
        document.getElementById("chat").classList.toggle("hide")
    }

    const handleInitChat = () => {

    }

    const handleChatSelection = (e: React.MouseEvent<HTMLDivElement>) => {
        document.querySelector("#chats > div.selected")?.classList.remove("selected")
        e.currentTarget.classList.add("selected")
        setSelectedChat(user.chats.findIndex(chat => chat._id == e.currentTarget.id))
    }

    return (
        <div id='technician'>
            <UserHeader>
                <img onClick={toggleChatVisibility} src="/chat.png" alt="" />
                <img src="/gear.png" alt="" />
            </UserHeader>
            <ModalBackground modalRefs={[chatModalRef]} />
            <div className='hide modal' ref={chatModalRef} id='chat'>
                {
                    user.chats.length > 0 ?
                    <>
                        <div id='chats'>
                            {
                                user.chats.map((chat, index) => {
                                    const lastMessage = chat.messages[chat.messages.length - 1]
                                    return (
                                        <div onClick={handleChatSelection} id={chat._id} key={chat._id} className={"chat" + (index == selectedChat ? " selected" : "")}>
                                            <img src="https://yt3.ggpht.com/wvlCpRqb9Hb9Yuv62LDo-AZxr-MpAHTvpeToBGpNOPSMNGQIyplQh2EZv75SLHOZIkpijT00=s48-c-k-c0x00ffffff-no-rj" alt="" />
                                            <div>
                                                <div className='info'>
                                                    <span>{chat.client.name}</span>
                                                    <span>{lastMessage.createdAt}</span>
                                                </div>
                                                <span className='last-message'>{lastMessage.content}</span>
                                            </div>
                                        </div>
                                    )
                                })  
                            }
                        </div>
                        <div id='selected-chat'>
                            <div id='messages'>
                                {
                                    user.chats[selectedChat].messages.map(message => (
                                        <div key={message._id} className={"message" + ` ${message.by == user._id ? "user" : ""}`}>
                                            <p className='content'>{message.content}</p>
                                            <span className='time'>{message.createdAt}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div id='message-input'>
                                <input placeholder='mensagem' type="text" id="" />
                                <img src='/message.png' />
                            </div>
                        </div>
                    </>
                    :
                    <h2>Você não possui nenhum chat aberto</h2>
                }
            </div>
            <div id='filters'>
                <div id='tagsManager'>
                    <span className='close' onClick={handleTagFilterShow}>✖</span>
                    <div>
                        {tags.length > 0 ? tags.map(tag => <div className='tag' id={tag.id.toString()}><span className='delete' onClick={handleTagDelete}>x</span><span>{tag.content}</span></div>) : <p>Suas tags serão mostradas aqui</p>}
                    </div>
                    <input onChange={handleTagInputLimit} onKeyDown={handleTagCreation} type="text" placeholder='Insira uma nova tag'/>
                </div>
                <span onClick={e => {handleFilterSelection(e); handleTagFilterShow()}}>Tags</span>
                <span onClick={handleFilterSelection}>Selecionados</span>
                <span onClick={handleFilterSelection}>Todos</span>
            </div>
            <div id='tickets' className='scrollable'>
                <div className="ticket" id='1'>
                    <p className='state'>Padrão</p>
                    <h3 className="title">Socorro, minha calculadora explodiu!!</h3>
                    <span className='date' >21/03/2024</span>
                    <p className="by">Por João Silva</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="tags">
                            <span className="tag solved">Resolvido</span>
                            <span className="tag status">Em andamento</span>
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
