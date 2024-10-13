'use client'

import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '@/contexts/auth'
import { useRouter } from 'next/navigation';
import { LoadingContext } from '@/contexts/loading'
import './style.css'

export default function Auth() {
    const { Logged, signIn } = useContext(AuthContext)
    const router = useRouter()

    const [lEmailName, lSetEmailName] = useState('')
    const [lPassword, lSetPassword] = useState('')
    const [rEmail, rSetEmail] = useState('')
    const [rPassword, rSetPassword] = useState('')
    const [rName, rSetName] = useState('')

    const { isLoading, startLoading, stopLoading } = useContext(LoadingContext)

    useEffect(() => {
        if (Logged) {
            router.push('/')
        }
    }, [Logged, router])

    const handleLogin = (e) => {
        e.preventDefault()
        signIn({ email: lEmailName, password: lPassword })
    }

    return (
        <div className="auth-container">
            <div className="auth-login">
                <h1>Bem-vindo<br />de volta!</h1>
                <div className="auth-form" onSubmit={handleLogin}>
                    <input type="text" placeholder="Nome ou Email" value={lEmailName} onChange={(e) => lSetEmailName(e.target.value)} />
                    <input type="password" placeholder="Senha" value={lPassword} onChange={(e) => lSetPassword(e.target.value)} />
                    <input disabled={(lEmailName === '' || lPassword === '')} type="button" value="ENTRE" onClick={async () => {
                        startLoading()
                        const result = await signIn({ email: lEmailName, password: lPassword })
                        stopLoading()

                        if(result.status == 200) {
                            console.log("a")
                        }
                    }} />
                </div>
            </div>
            <div className="auth-register">
                <h1>Crie sua conta</h1>
                <div className="auth-form">
                    <input type="text" placeholder="Nome" value={rName} onChange={(e) => rSetName(e.target.value)} />
                    <input type="text" placeholder="Email" value={rEmail} onChange={(e) => rSetEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" value={rPassword} onChange={(e) => rSetPassword(e.target.value)} />
                    <input disabled={(rName === '' || rEmail === '' || rPassword === '')} type="button" value="REGISTRE-SE"/>
                </div>
            </div>
        </div>
    )
}
