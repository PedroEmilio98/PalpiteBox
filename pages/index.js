import Link from 'next/link';
import React from 'react';

const Index = () => {
    return (
        <div>
            <h1>Olá mundo!</h1>
            <Link href='/contato'>
                <a>Contato</a>
            </Link>
            <Link href='/sobre'>
                <a>Sobre</a>
            </Link>
            <Link href='/sugestao'>
                <a>Sugestão</a>
            </Link>
        </div>
    )
}

export default Index;