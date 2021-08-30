import React from 'react';
import Link from 'next/dist/client/link';

const sugestao = () => {
    return (
        <div>
            <h1>Sugestão</h1>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    )
}

export default sugestao;