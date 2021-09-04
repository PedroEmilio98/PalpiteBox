import React from 'react';
import Link from 'next/dist/client/link';
import PageTitle from '../Components/PageTitle/PageTitle';

const contato = () => {
    return (
        <div>
            <PageTitle title='Contato' />
            <h1>Contato</h1>
            <div>Esta pagina contem as informações de contato do estabelicimento</div>
        </div>
    )
}

export default contato;