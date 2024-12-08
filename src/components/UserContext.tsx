import React, { createContext, useEffect, useState } from 'react'
import Alert from './Alert'

export const userContext = createContext<{ user: any, setUser: React.Dispatch<any>, setAlert: React.Dispatch<any> }>(null)

export function UserContextProvider({ children }: React.PropsWithChildren) {
    const [user, setUser] = useState(null/*{ 
        name: "Fake ronaldinho", 
        type: "owner", 
        _id: 123, 
        chats: [
            {
                _id: "sdas23",
                technician: {
                    _id: "sada324d",
                    name: "Rovilson"
                },
                client: {
                    _id: "sadsdsdsda324d",
                    name: "Lolo"
                },
                messages: [{
                    _id: "as8dsad",
                    content: "Faz o L",
                    by: "sadsdsdsda324d",
                    createdAt: "13:99"
                }]
            }
        ],
        tickets: [
            { _id: 1,  createdAt: Date.now(), title: "Eo ao fazer login", status: "open", tags: ["kkkk", "kkkk", "kkkk", "kkkk", "kkkk", "kkkk", "kkkk", "lll", "lllllll", "lhjkhjh"], description: "Não consigo acessar minha conta com as credenciais fornecidas.", priority: "high" },
            { _id: 2,  createdAt: Date.now(), title: "Erro ao fazer login", status: "open", tags: ["kkkk", "lll", "lllllll", "lhjkhjh"], description: "Não consigo acessar minha conta com as credenciais fornecidas.", priority: "medium" },
            { _id: 3,  createdAt: Date.now(), title: "Erro ao fazer login", status: "open", tags: ["kkkk", "lll", "lllllll", "lhjkhjh"], description: "Não consigo acessar minha conta com as credenciais fornecidas.", priority: "low" },
            { _id: 4,  createdAt: Date.now(), title: "Erro ao fazer login", status: "open", tags: ["kkkk", "lll", "lllllll", "lhjkhjh"], description: "Não consigo acessar minha conta com as credenciais fornecidas.", priority: "high" },
            { _id: 5,  createdAt: Date.now(), title: "Erro ao fazer login", status: "open", tags: ["kkkk", "lll", "lllllll", "lhjkhjh"], description: "Não consigo acessar minha conta com as credenciais fornecidas.", priority: "high" },
        ],
        company: {
            name: "Roberto Soluções",
            email: "compani@gmail.com",
            owner: 123,
            phone: "19 98331-1500",
            cid: "0000-000/21",
            people: [{
                _id: 167,
                name: "Renan",
                email: "sadsad@gmail.com",
                type: "worker",
                avaible: true,
                password: "red1"
            },
            {
                _id: 267,
                name: "Rovilson",
                email: "tyty@gmail.com",
                type: "worker",
                avaible: false,
                password: "red2"
            }],
            availableTechnicians: [{
                _id: 123,
                name: "Damm Son",
                email: "roand@gmail.com",
                avaible: true
            },
            {
                _id: 143,
                name: "Ahaha",
                email: "lbandrtg@gmail.com",
                avaible: true
            }],
            tickets: [
                { _id: 1, createdAt: Date.now(), title: "Erro ao fazer login", status: "open", tags: ["lll", "lllllll", "lhjkhjh"], description: "Não consigo acessar minha conta com as credenciais fornecidas.", priority: "high",  by: { name: "Jorginho", _id: 1245 } },
            ],
            chats: []
        }
    }*/)
    const [alert, setAlert] = useState({ message: null, ok: null })
    
    return (
     <userContext.Provider value={{ user, setUser, setAlert }}>
        <Alert message={alert.message} ok={alert.ok} />
        {children}
     </userContext.Provider>
    )
}