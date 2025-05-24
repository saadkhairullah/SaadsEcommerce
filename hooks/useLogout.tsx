import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

    const {dispatch} = useAuthContext()

    const logout = () =>{
    localStorage.removeItem('user')
        // logs user out and removes their data/tokens from local
    dispatch({type: 'LOGOUT'})
    
    }

    return {logout}
}