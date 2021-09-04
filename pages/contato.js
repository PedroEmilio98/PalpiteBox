import React from 'react';
import Link from 'next/dist/client/link';

const contato = () => {
    return (
        <div>
            <PageTitle title='Contato' />
            <h1>Contato</h1>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    )
}

export default contato;