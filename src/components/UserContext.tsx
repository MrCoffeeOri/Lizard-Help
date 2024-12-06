import React, { createContext, useEffect, useState } from 'react'
import Alert from './Alert'

export const userContext = createContext<{ user: any, setUser: React.Dispatch<any>, setAlert: React.Dispatch<any> }>(null)

export function UserContextProvider({ children }: React.PropsWithChildren) {
    const [user, setUser] = useState({ 
        name: "Fake ronaldinho", 
        type: "ronLSO", 
        _id: 123, 
        tickets: [
            { _id: 1, title: "Erro ao fazer login", status: "open", tags: ["kkkk", "kkkk", "kkkk", "kkkk", "kkkk", "kkkk", "kkkk", "lll", "lllllll", "lhjkhjh"], description: "Não consigo acessar minha conta com as credenciais fornecidas.", priority: "Alta" },
            { _id: 2, title: "Erro ao fazer login", status: "open", tags: ["kkkk", "lll", "lllllll", "lhjkhjh"], description: "Não consigo acessar minha conta com as credenciais fornecidas.", priority: "Alta" },
            { _id: 3, title: "Erro ao fazer login", status: "open", tags: ["kkkk", "lll", "lllllll", "lhjkhjh"], description: "Não consigo acessar minha conta com as credenciais fornecidas.", priority: "Alta" },
            { _id: 4, title: "Erro ao fazer login", status: "open", tags: ["kkkk", "lll", "lllllll", "lhjkhjh"], description: "Não consigo acessar minha conta com as credenciais fornecidas.", priority: "Alta" },
            { _id: 5, title: "Erro ao fazer login", status: "open", tags: ["kkkk", "lll", "lllllll", "lhjkhjh"], description: "Não consigo acessar minha conta com as credenciais fornecidas.", priority: "Alta" },
        ] 
    })
    const [alert, setAlert] = useState({ message: null, ok: null })
    
    return (
     <userContext.Provider value={{ user, setUser, setAlert }}>
        <Alert message={alert.message} ok={alert.ok} />
        {children}
     </userContext.Provider>
    )
}