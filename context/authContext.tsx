import { useEffect } from "react"
import { createContext, useReducer } from "react"

export const AuthContext = createContext()

export const authReducer = (state, action) => {
switch(action.type){
    case 'LOGIN':
        return{user: action.payload}
    case 'LOGOUT':
        return{user: null}
    default: 
        return state
}
}

export const AuthContextProvider = ({ children }) =>{
 const [state, dispatch] = useReducer(authReducer, {
    // user state is intially null (not logged in)
        user: null
    })
    
// this useeffect hook assures the user is still in local storage, and refereshes it on the front end
useEffect (()=> {
    const user = JSON.parse(localStorage.getItem('user'))

    if(user){
        dispatch({type: 'LOGIN', payload: user })
    }
}, [])

    console.log('AuthContext state:', state)

    return(
        <AuthContext.Provider value= {{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}