'use client'

import { createContext, useState, useEffect} from "react";
import { recoverUserWithToken, registerAuth, signInAuth } from '@/services/auth'
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
    }, []);
    
    async function signIn({ email, password }) {''
        if(email && password){            
            const response = await signInAuth({ email, password });

            if(response.code === 200){
                setUserData(response.data)
                nookies.set(undefined, "authTokenValue", response.data.token, {
                    maxAge: 60 * 60, // 1 hora
                    path: '/'
                })
            }

            return response
        }
    }

    async function register({ email, password, name }) {
        if(email, password, name) {
            const response = await registerAuth({ email, password, name })

            if(response.code === 200){
                setUserData(response.data)
                nookies.set(undefined, "authTokenValue", response.data.token, {
                    maxAge: 60 * 60, // 1 hora
                    path: '/'
                })
            }

            return response
        }
    }

    return(
        <AuthContext.Provider value={{ Logged, userData, signIn, register }}> 
            {children}
        </AuthContext.Provider>
    )
}