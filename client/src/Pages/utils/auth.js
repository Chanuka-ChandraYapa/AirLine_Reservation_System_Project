import { useState, createContext, useContext } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const state = {
        user,
        setUser
    }
    return ( 
    <AuthContext.Provider value = {state}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}
