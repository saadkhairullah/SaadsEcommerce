import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useUpdateInfo = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {user, dispatch} = useAuthContext()
    
    //logs users in
    const updateInfo = async (FName, LName, Email) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:8080/api/userSettings/' + user._id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({FName, LName, Email})
        })
        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            // save the user to local storage
            // we are saving the email and token to local storage at thi phase...
            localStorage.setItem('user', JSON.stringify(json))

            //update Auth Contetxt
            dispatch({type:'UPDATE_USER', payload: json})

            setIsLoading(false)
        }
    }

    return {updateInfo, isLoading, error}
}