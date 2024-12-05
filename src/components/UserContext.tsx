import React, { createContext, useEffect, useState } from 'react'
import Alert from './Alert'

export const userContext = createContext<{ user: any, setUser: React.Dispatch<any>, setAlert: React.Dispatch<any> }>(null)

export function UserContextProvider({ children }: React.PropsWithChildren) {
    const [user, setUser] = useState({ name: "Fake ronaldinho", type: "ronLSO", _id: 123, tickets: [] })
    const [alert, setAlert] = useState({ message: null, ok: null })
    
    return (
     <userContext.Provider value={{ user, setUser, setAlert }}>
        <Alert message={alert.message} ok={alert.ok} />
        {children}
     </userContext.Provider>
    )
}