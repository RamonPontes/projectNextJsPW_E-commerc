'use client'

import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '@/contexts/auth'
import { useRouter } from 'next/navigation'
import { LoadingContext } from '@/contexts/loading'
import './style.css'

export default function Auth() {
    const router = useRouter()
    const { Logged, signIn, register } = useContext(AuthContext)
    const { isLoading, startLoading, stopLoading } = useContext(LoadingContext)
    const [lEmailName, lSetEmailName] = useState('')
    const [lPassword, lSetPassword] = useState('')
    const [rEmail, rSetEmail] = useState('')
    const [rPassword, rSetPassword] = useState('')
    const [rName, rSetName] = useState('')
    const [lstatus, lsetStatus] = useState('')
    const [lcode, lsetCode] = useState('')
    const [lmessage, lsetMessage] = useState('')
    const [rstatus, rsetStatus] = useState('')
    const [rcode, rsetCode] = useState('')
    const [rmessage, rsetMessage] = useState('')

    useEffect(() => {
        if (Logged) {
            router.push('/')
        }
    }, [Logged, router])

    function resetErros() {
        rsetCode('')
        rsetStatus('')
        rsetMessage('')
        lsetCode('')
        lsetStatus('')
        lsetMessage('')
    }

    return (
        <div className="auth-container">
            <div className="auth-login">
                <h1>Bem-vindo<br />de volta!</h1>
                {lcode && lstatus && (
                    <div className="auth-message">
                        <p style={{ backgroundColor: lstatus === 'success' ? 'rgb(0,255,0)' : 'rgb(255,0,0)' }}>{lmessage}</p>
                    </div>
                )}
                <div className="auth-form" >
                    <input type="text" placeholder="Nome ou Email" value={lEmailName} onChange={(e) => lSetEmailName(e.target.value)} />
                    <input type="password" placeholder="Senha" value={lPassword} onChange={(e) => lSetPassword(e.target.value)} />
                    <input disabled={(lEmailName === '' || lPassword === '')} type="button" value="ENTRE" onClick={async () => {
                        resetErros()

                        startLoading()

                        const result = await signIn({ email: lEmailName, password: lPassword })

                        lsetCode(result.code)
                        lsetStatus(result.status)
                        lsetMessage(result.message)

                        stopLoading()

                        if (result.code === 200) {
                            router.push('/')
                        }
                    }} />
                </div>
            </div>
            <div className="auth-register">
                <h1>Crie sua conta</h1>
                {rcode && rstatus && (
                    <div className="auth-message">
                        <p style={{ backgroundColor: rstatus === 'success' ? 'rgb(0,255,0)' : 'rgb(255,0,0)' }}>{rmessage}</p>
                    </div>
                )}
                <div className="auth-form">
                    <input type="text" placeholder="Nome" value={rName} onChange={(e) => rSetName(e.target.value)} />
                    <input type="text" placeholder="Email" value={rEmail} onChange={(e) => rSetEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" value={rPassword} onChange={(e) => rSetPassword(e.target.value)} />
                    <input disabled={(rName === '' || rEmail === '' || rPassword === '')} type="button" value="REGISTRE-SE" onClick={async () => {
                        resetErros()
                        startLoading()

                        const result = await register({ email: rEmail, password: rPassword, name: rName })

                        rsetCode(result.code)
                        rsetStatus(result.status)
                        rsetMessage(result.message)

                        stopLoading()

                        if (result.code === 200) {
                            router.push('/')
                        }
                    }} />
                </div>
            </div>
        </div>
    )
}
