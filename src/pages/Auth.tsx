import React, { useContext, useEffect } from 'react';
import { userContext } from '../components/UserContext';
import LoginForm from '../components/LoginForm';
import { path } from '../helpers/api';
import { useHistory } from 'react-router';
import { socket } from '../helpers/socket';

export default function Auth({ children }) {
  const { user, setUser, setAlert } = useContext(userContext)
  const history = useHistory()
  
  useEffect(() => {
    if (user) return
    const userAuth = async () => {
        try {
            const userResponse = await fetch(path + "/user/auth", { 
              method: "POST", 
              headers: { 'Content-Type': 'application/json' }, 
              credentials: 'include' 
            }).then(res => res.json())
            setAlert({ message: userResponse.error ? "Autenticação requerida" : userResponse.msg, ok: userResponse.msg })
            if (userResponse.user) {
              setUser(userResponse.user)
              history.push(`/user/${userResponse.user.type == "admin" ? "technician" : userResponse.user.type == "owner" ? "home" : userResponse.user.type}`)
            } 
        } catch (error) {
            setAlert({ message: error.toString(), ok: false })
        }
    }
    userAuth()
  }, [])

  useEffect(() => {  
    if (!user) return
    console.log(user)
    const handleConnectError = () => {
      setAlert({ ok: false, message: "Falha na autenticação. Faça login novamente." });
      history.push("/client#login");
    };
  
    const handleTicketEvent = (event) => {
      const ticketsEvent = (tickets) => event.action == "create" ? [event.data, ...tickets] : event.action == "delete" ? tickets.filter(_ticket => _ticket._id != event.data._id) : tickets.map(_ticket => _ticket._id == event.data._id ? { ..._ticket, ...event.data } : _ticket) 
      if (event.data.by?._id == user._id)
          setAlert({ ok: true, message: `Ticket ${event.action == "create" ? "criado" : event.action == "delete" ? "excluido" : "editado"} com sucesso!` }) 
      setUser({ 
        ...user, 
        ...(user.type == "technician" && event.action == "create" ? {} : { tickets: ticketsEvent(user.tickets) }),
        ...(user.type == "owner" ? { company: { ...user.company, tickets: ticketsEvent(user.company.tickets) } } : {})
      })
    }

    const handleUserEvent = (event) => {
      switch (event.action) {
        case "avaible":
          setUser({ ...user, company: { ...user.company, people: user.company.people.map(person => person._id == event.data.userID ? { ...person, avaible: event.data.avaible } : person) } })
          break;
      
        default:
          break;
      }
    } 

    const handleChatEvent = (event) => {
      setUser({
        ...user,
        chats: event.action == "create" ? [event.data, ...user.chats] : 
              event.action == "delete" ? user.chats.filter(chat => chat._id != event.data._id) : 
              user.chats.map(chat => chat._id == event.data.chatID ? { ...chat, messages: [...chat.messages, event.data] } : chat)
      })
      event.action != "message" && setAlert({ ok: true, message: `Chat ${event.action == "create" ? "criado" : event.action == "delete" ? "excluido" : "editado"} com sucesso!` }) 
    }
    
    socket.on("connect_error", handleConnectError)
    socket.on("ticket", handleTicketEvent)
    socket.on("user", handleUserEvent)
    socket.on("chat", handleChatEvent)
    if (!socket.connected) {
      socket.connect()
      socket.emit("auth", { user: user })
    }
    return () => {
      socket.off("connect_error", handleConnectError)
      socket.off("ticket", handleTicketEvent)
      socket.off("user", handleUserEvent)
      socket.off("chat", handleChatEvent)
    }
  }, [user])

  return (
    <>
      {user ? 
        children 
        : 
        <div id='auth'>
          <h1>Autenticação requerida</h1>
          <LoginForm />
        </div>
      }
    </>
  );
}