import React, { createContext, useState } from 'react'

export const userContext = createContext<{ user: any, setUser: React.Dispatch<any> }>(null)

export function UserContextProvider({ children }: React.PropsWithChildren) {
    const [user, setUser] = useState(null)
    
    return (
     <userContext.Provider value={{ user, setUser }}>
        {children}
     </userContext.Provider>
    )
}