import React, { useContext, useEffect, useState } from 'react'
import { userContext } from './UserContext'

export default function Chat({ chatModalRef }: { chatModalRef: React.MutableRefObject<HTMLDivElement> }) {
    const { user, setUser } = useContext(userContext)
    const [selectedChat, setSelectedChat] = useState<number>(0)

    const handleChatSelection = (index: number) => {
        setSelectedChat(index)
    }

    useEffect(() => {
        console.log(user.chats[selectedChat].messages)
    }, [])

    const handleSendMesasge = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        
    }

    return (
        <div className='hide modal' ref={chatModalRef} id="chat">
            {
                user.chats.length > 0 ?
                <>
                    <div id='chats'>
                        {
                            user.chats.map((chat, index) => {
                                const lastMessage = chat.messages[chat.messages.length - 1]
                                return (
                                    <div onClick={() => handleChatSelection(index)} id={chat._id} key={chat._id} className={"chat" + (index == selectedChat ? " selected" : "")}>
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
                                    <div key={message._id} className={`message ${message.by == user._id ? "user" : ""}`}>
                                        <p className='content'>{message.content}</p>
                                        <span className='time'>{message.createdAt}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div id='message-input'>
                            <input onKeyDown={handleSendMesasge} placeholder='mensagem' type="text" id="" />
                            <img onClick={handleSendMesasge} src='/message.png' />
                        </div>
                    </div>
                </>
                :
                <h2>Você não possui nenhum chat aberto</h2>
            }
        </div>
    )
}