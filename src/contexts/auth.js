'use client'

import { createContext, useState, useEffect} from "react";
import { recoverUserWithToken, signInAuth } from '@/services/auth'
import nookies from 'nookies'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [userData, setUserData] = useState({})
    const Logged = !!userData.token

    useEffect(() => {
        const cookins = nookies.get()

        if (cookins.authTokenValue) {
            recoverUserWithToken().then(responseData => setUserData(responseData))
        }
    }, [Logged]);
    

    async function signIn({ email, password }) {
        if(email && password){
            const { responseExample: responseData, status: responseStatus } = await signInAuth({ email, password });

            if(responseStatus === 200){
                setUserData(responseData)
                nookies.set(undefined, "authTokenValue", responseData.token, {
                    maxAge: 60 * 60 // 1 hora
                })
            }
        }
    }

    return(
        <AuthContext.Provider value={{ Logged, userData, signIn }}> 
            {children}
        </AuthContext.Provider>
    )
}