import { useAuth } from "./auth"
import { Navigate } from "react-router-dom"

export const RequireAuth = ({children}) => {
    const {user,setUser} = useAuth()
    if(user !=="Admin"){
        return <Navigate to='/SignInAdmin'/>
    }

    return children
}

export const RequireUserAuth = ({children}) => {
    const {user,setUser} = useAuth()
    if(user !=="User"){
        return <Navigate to='/SignIn'/>
    }

    return children
}