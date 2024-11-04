import React, { createContext, useState } from 'react'
import Alert from './Alert'

export const userContext = createContext<{ user: any, setUser: React.Dispatch<any>, setErrorMessage: React.Dispatch<any> }>(null)

export function UserContextProvider({ children }: React.PropsWithChildren) {
    const [user, setUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    
    return (
     <userContext.Provider value={{ user, setUser, setErrorMessage }}>
        <Alert message={errorMessage} />
        {children}
     </userContext.Provider>
    )
}