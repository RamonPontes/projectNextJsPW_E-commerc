'use client'

import { LoadingContext } from '@/contexts/loading'
import './style.css'
import { useContext } from 'react';

export default function Loading() {
    const { isLoading } = useContext(LoadingContext);

    return (
        <div className="loading" style={{ display: isLoading ? 'flex' : 'none' }}> 
            <div className="loadingBall" />
        </div>
    );
}
