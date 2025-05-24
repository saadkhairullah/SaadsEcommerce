import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    
    const {dispatch} = useAuthContext()

    // signs user up
    const signup = async (FName, LName, Email, Password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:8080/api/home/Signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({FName,LName, Email,Password})
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

            //update Auth Contetxt state
            dispatch({type:'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}