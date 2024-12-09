import React, { JSXElementConstructor, useContext, useEffect, useRef, useState } from 'react'
import { handleCorrection } from '../helpers/formCorrection'
import UserHeader from '../components/UserHeader'
import { userContext } from '../components/UserContext';
import ModalBackground from '../components/ModalBackground';
import { socket } from '../helpers/socket';
import Chat from '../components/Chat';

export default function Technician() {
    const [tags, setTags] = useState<{ content: string, id: number }[]>([]);
    const { user, setUser } = useContext(userContext)
    const chatModalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        !socket.connected && socket.connect()
    }, [])

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

    const handleInitChat = (ticketID, client: { _id: string, name: string }) => {
        socket
            .emit("ticket", { 
                action: "edit", 
                data: { 
                    status: "ongoing", 
                    service: { by: { _id: user._id, name: user.name }, date: Date.now() } 
                } 
            })
            .emit("chat", {
                action: "create", 
                data: { 
                    service: {
                        client,
                        technician: { _id: user._id, name: user.name }, 
                        ticket: ticketID,
                    }
                } 
            })
    }

    const handleTicketApproval = (e: React.ChangeEvent<HTMLSelectElement>) => {

    }

    return (
        <div id='technician'>
            <UserHeader>
                <img onClick={toggleChatVisibility} src="/chat.png" alt="" />
            </UserHeader>
            <ModalBackground modalRefs={[chatModalRef]} />
            <Chat chatModalRef={chatModalRef} />
            <div id='filters'>
                <div id='tagsManager'>
                    <span className='close' onClick={handleTagFilterShow}>✖</span>
                    <div>
                        {tags.length > 0 ? tags.map(tag => <div className='tag' id={tag.id.toString()}><span className='delete' onClick={handleTagDelete}>x</span><span>{tag.content}</span></div>) : <p>Suas tags serão mostradas aqui</p>}
                    </div>
                    <input onChange={handleTagInputLimit} onKeyDown={handleTagCreation} type="text" placeholder='Insira uma nova tag'/>
                </div>
                <span onClick={e => {handleFilterSelection(e); handleTagFilterShow()}}>Tags</span>
                <span onClick={handleFilterSelection}>Meus atedimentos</span>
                <span onClick={handleFilterSelection}>Abertos</span>
                {
                    user.type == "admin" && (<span onClick={handleFilterSelection}>Em aguardo</span>)
                }
                <span onClick={handleFilterSelection}>Todos</span>
            </div>
            <div id='tickets' className='scrollable'>
                {
                    user.tickets.map(ticket => (
                        <div className={`ticket ${ticket.status}`} id={ticket._id}>
                            {
                                ticket.status == "waiting" && user.type == "admin" && (
                                    <div className='tools'>
                                        <select>
                                            <option value="" selected disabled hidden>Prioridade</option>
                                            <option value="aprove">Alta</option>
                                            <option value="aprove">Média</option>
                                            <option value="aprove">baixa</option>
                                        </select>
                                        <input type="text" placeholder='Motivo' className='reason' />
                                        <select onChange={handleTicketApproval}>
                                            <option value="" selected disabled hidden>Direcionamento</option>
                                            <option value="aprove">Aprovar</option>
                                            <option value="aprove">Negar</option>
                                        </select>
                                    </div>
                                )
                            }
                            <p className='priority'>{ticket.priority == "high" ? "Prioridade Alta" : ticket.priority == "medium" ? "Prioridade Média" : "Prioridade Baixa"}</p>
                            <h3 className="title">{ticket.title}</h3>
                            <span className='date'>{new Date(ticket.createdAt).toLocaleString()}</span>
                            <p className="by">Por João Silva</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div className="tags">
                                    {
                                        ticket.solved && (<span className="tag solved">Resolvido</span>)
                                    }
                                    <span className={`tag status ${ticket.status}`}>{ticket.status == "open" ? "Aberto" : ticket.status == "closed" ? "Fechado" : ticket.status == "ongoing" ? "Em atendimento" : "Em aguardo"}</span>
                                    {
                                        ticket.tags.map(tag => <span className="tag">{tag}</span>)
                                    }
                                </div>
                                <span className='more-details' onClick={handleMoreDetails}>+</span>
                            </div>
                            <div className="details">
                                <div className='description scrollable'>{ticket.description}</div>
                                { 
                                    ticket.status != "ongoing" && (<button onClick={() => handleInitChat(ticket._id, ticket.by)} className='start-chat'>Iniciar atendimento</button>)
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
