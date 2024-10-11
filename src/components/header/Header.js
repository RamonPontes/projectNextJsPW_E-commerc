'use client'

import { ShoppingCart } from 'lucide-react'
import './style.css'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '@/contexts/auth'


export default function Header() {
    const [search, setSearch] = useState('')
    const { Logged, userData, signIn } = useContext(AuthContext);
    useEffect(() => {
        signIn({ email: 'Ramon', password: '1234' });
    }, []);

    return (
        <div className="header-container">
            <section className='start-header'>
                <h1>R&M STORE</h1>
            </section>
            <section className='center-header'>
                <input type="text" name="Search" placeholder='Buscar na R&M Store' value={search} onChange={(e) => setSearch(e.value)} />
                <div className="sections-header">
                    <a href="">NOVIDADES</a>
                    <a href="">MOLETONS</a>
                    <a href="">MASCULINOS</a>
                    <a href="">KIDS</a>
                    <a href="">BÁSICOS</a>
                    <a href="">OUTLET</a>
                </div>
            </section>
            <section className='last-header'>
                {Logged ? (
                    <div className="user-option-header">
                        <h1 href="/pages/auth" style={{ fontWeight: '400', fontSize: '25px' }}>Seja Bem-vindo</h1>
                        <h1 href="/pages/auth" style={{ fontWeight: 'bold', fontSize: '30px' }}>{userData.user.name}</h1>
                    </div>
                ) : (
                    <div className="user-option-header">
                        <a href="/pages/auth" style={{ fontWeight: 'bold', fontSize: '25px' }}>Registre-se</a>
                        <a href="/pages/auth" style={{ fontWeight: '400', fontSize: '15px' }}>Ja tem conta?</a>
                    </div>
                )}
                <div className="line-header" />
                <a href="">
                    <ShoppingCart size={40} />
                </a>
            </section >
        </div >
    )
}