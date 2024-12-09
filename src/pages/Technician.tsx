import React, { JSXElementConstructor, useContext, useEffect, useRef, useState } from 'react'
import { handleCorrection } from '../helpers/formCorrection'
import UserHeader from '../components/UserHeader'
import { userContext } from '../components/UserContext';
import ModalBackground from '../components/ModalBackground';
import { socket } from '../helpers/socket';
import Chat from '../components/Chat';
import { path } from '../helpers/api';

export default function Technician() {
    const [tags, setTags] = useState<{ content: string, id: number }[]>([]);
    const { user, setUser, setAlert } = useContext(userContext)
    const [ticketFilter, setTicketFilter] = useState(user.type == "admin" ? "waiting" : "ongoing")
    const [technicianFilter, setTechnicianFilter] = useState("all")
    const [technicianForm, setTechnicianForm] = useState({ show: false, name: "", email: "", password: "" })
    const chatModalRef = useRef<HTMLDivElement>(null)
    const techniciansModalRef = useRef<HTMLDivElement>(null)
    const newTechnicianModalRef = useRef<HTMLFormElement>(null)

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
            setTicketFilter(user.type == "admin" ? "waiting" : "ongoing")
        tagsManager.classList.toggle("show")
        if (!tagsManager.classList.contains('show'))
            (document.getElementById("tagInput") as HTMLInputElement).value = ''
    }

    const handleFilterSelection = (e: React.MouseEvent<HTMLSpanElement>) => {
        setTicketFilter(e.currentTarget.id)
    }
    
    const handleMoreDetails = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.innerText = e.currentTarget.parentElement?.parentElement?.lastElementChild?.classList.toggle("opened") ? '-' : '+'
    };    

    const toggleModalVisibility = (id: string) => {
        document.getElementById("modal-background").classList.toggle("hide")
        document.getElementById(id).classList.toggle("hide")
    }

    const handleInitChat = (ticketID, client: { _id: string, name: string }) => {
        socket.emit("ticket", { 
            action: "edit", 
            data: { 
                _id: ticketID,
                status: "ongoing", 
                service: { by: { _id: user._id, name: user.name } } 
            } 
        })
        socket.emit("chat", {
            action: "create", 
            data: { 
                client,
                technician: { _id: user._id, name: user.name }, 
                ticket: ticketID,
            } 
        })
    }

    const handleTicketApproval = (e: React.ChangeEvent<HTMLSelectElement>, ticket) => {
        socket.emit("ticket", {
            action: "edit",
            data: {
                _id: ticket._id,
                companyID: ticket.company,
                status: e.currentTarget.value == "approve" ? "open" : "closed",
                priority: e.currentTarget.value == "approve" && (e.currentTarget.previousSibling.previousSibling as HTMLSelectElement).value,
                solved: e.currentTarget.value == "deny" && { by: user._id, justification: (e.currentTarget.previousSibling as HTMLInputElement).value, denied: true, date: Date.now() }
            }
        })
        setAlert({ message: `Ticket ${e.currentTarget.value == "approve" ? "aprovado" : "rejeitado"} com sucess`, ok: true })
    }

    const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTechnicianForm({ ...technicianForm, [e.currentTarget.name]: e.currentTarget.value })
    }

    const handleNewTechnician = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetch(`${path}/user/create`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                  name: technicianForm.name,
                  email: technicianForm.email,
                  password: technicianForm.password,
                  type: 'technician',
                  avaible: false
                })
            }).then(res => res.json())
            response.msg && setUser({ ...user, technicians: [response.user, ...user.technicians] }) 
            setAlert({ message: response.error || response.msg, ok: response.msg })
            setTechnicianForm({ ...technicianForm, name: "", email: "", password: "" })
        } catch (error) {
            setAlert({ msg: error.toString(), ok: false })
        }
    }

    function handleSolveTicket(e: React.MouseEvent<HTMLButtonElement>): void {
        socket.emit("ticket", {
            action: "edit",
            data: {
                _id: e.currentTarget.parentElement.parentElement.parentElement.id,
                solved: {
                    by: user._id,
                    justification: (e.currentTarget.nextElementSibling as HTMLInputElement).value,
                    denied: false
                },
                status: "closed"
            }
        })
        socket.emit("chat", {
            action: "delete",
            data: {
                _id: user.chats.find(chat => chat.ticket == e.currentTarget.parentElement.parentElement.parentElement.id)._id 
            }
        })
    }

    return (
        <div id='technician'>
            <UserHeader>
                <img onClick={() => toggleModalVisibility("technicians")} src="/person.png" alt="" />
                <img onClick={() => toggleModalVisibility("chat")} src="/chat.png" alt="" />
            </UserHeader>
            <ModalBackground modalRefs={[chatModalRef, techniciansModalRef, newTechnicianModalRef]} />
            <Chat chatModalRef={chatModalRef} />
            <form onSubmit={handleNewTechnician} ref={newTechnicianModalRef} className={`modal form ${technicianForm.show ? "" : "hide"}`} id='newTechnician'>
                <h2>Novo técnico</h2>
                <input name="name" onChange={handleFormInputChange} required type="text" placeholder='Nome' />
                <input name="email" onChange={handleFormInputChange} required type="email" placeholder='Email' />
                <input name="password" onChange={handleFormInputChange} required type="password" placeholder='Senha' />
                <button>Criar</button>
                <h4 onClick={() => setTechnicianForm({ ...technicianForm, show: false })}>Voltar</h4>
            </form>
            <div ref={techniciansModalRef} className="modal hide" id="technicians">
                <div>
                    <h3>Técnicos na organização</h3>
                    <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTechnicianFilter(e.target.value)}>
                        <option value="all">Todos</option>
                        <option value="online">Online</option>
                        <option value="offline">Offline</option>
                    </select>
                    <button onClick={() => setTechnicianForm({ ...technicianForm, show: true })}>Novo técnico</button>
                </div>
                <div className='display scrollable'>
                    {
                        user.technicians.filter(technician => technicianFilter == "online" ? technician.avaible : technicianFilter == "offline" ? !technician.avaible : true).map(technician => (
                            <div key={technician._id} className={`technician ${technician.avaible ? "online" : "offline"}`}>
                                <img src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" />
                                <p>{technician.name}</p>
                                <p>{technician.avaible ? "Online" : "Offline"}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div id='filters'>
                <div id='tagsManager'>
                    <span className='close' onClick={handleTagFilterShow}>✖</span>
                    <div>
                        {tags.length > 0 ? tags.map(tag => <div className='tag' id={tag.id.toString()}><span className='delete' onClick={handleTagDelete}>x</span><span>{tag.content}</span></div>) : <p>Suas tags serão mostradas aqui</p>}
                    </div>
                    <input id='tagInput' onChange={handleTagInputLimit} onKeyDown={handleTagCreation} type="text" placeholder='Insira uma nova tag'/>
                </div>
                <span className={ticketFilter == "tags" ? "selected" : ""} id="tags" onClick={e => {handleFilterSelection(e); handleTagFilterShow()}}>Tags</span>
                {
                    user.type == "admin" && (<span className={ticketFilter == "waiting" ? "selected" : ""} id="waiting" onClick={handleFilterSelection}>Em aguardo</span>)
                }
                <span className={ticketFilter == "ongoing" ? "selected" : ""} id="ongoing" onClick={handleFilterSelection}>Meus atedimentos</span>
                <span className={ticketFilter == "open" ? "selected" : ""} id="open" onClick={handleFilterSelection}>Abertos</span>
                <span className={ticketFilter == "all" ? "selected" : ""} id="all" onClick={handleFilterSelection}>Todos</span>
            </div>
            <div id='tickets' className='scrollable'>
                {
                    user.tickets.length > 0 ?
                        user.tickets.filter(ticket => ticketFilter == "all" || ticket.status == ticketFilter || ticket.tags.some(tag => tags.some(_tag => _tag.content == tag))).map(ticket => (
                            <div className={`ticket ${ticket.status}`} id={ticket._id}>
                                {
                                    ticket.status == "waiting" && user.type == "admin" && (
                                        <div className='tools'>
                                            <select>
                                                <option value="" selected disabled hidden>Prioridade</option>
                                                <option value="high">Alta</option>
                                                <option value="medium">Média</option>
                                                <option value="low">baixa</option>
                                            </select>
                                            <input type="text" placeholder='Motivo' className='reason' />
                                            <select onChange={(e) => handleTicketApproval(e, ticket)}>
                                                <option value="" selected disabled hidden>Direcionamento</option>
                                                <option value="approve">Aprovar</option>
                                                <option value="deny">Negar</option>
                                            </select>
                                        </div>
                                    )
                                }
                                <p>#{ticket._id}</p>
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
                                        ticket.status != "ongoing" && ticket.status != "waiting" && <button onClick={() => handleInitChat(ticket._id, ticket.by)} className='start-chat'>Iniciar atendimento</button>
                                    }
                                    {
                                        ticket.status == "ongoing" && (
                                            <div className='end'>
                                                <button onClick={handleSolveTicket} className='start-chat'>Finalizar atendimento</button>
                                                <input type="text" placeholder='Justificativa' />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    :
                     <h2>Nenhum chamado no momento</h2>
                }
            </div>
        </div>
    )
}
