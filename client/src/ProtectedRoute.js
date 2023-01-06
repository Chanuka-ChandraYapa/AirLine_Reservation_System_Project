import React from "react";
import { Route,Navigate } from "react-router-dom";

function ProtectedRoute({isAuth: isAuth,component: Component, ...rest}){
    return (
       <Route {...rest} 
        render = {(props)=>{
            if(isAuth){
                return <Component />;
            }else{
                return (
                    <Navigate to={{pathname: "/", state: {from: props.location}}} />
                );
            }
            
        }} 
        />

    )
}
export default ProtectedRoute;