import React from 'react';
import Link from 'next/link';
import PageTitle from '../Components/PageTitle/PageTitle';

const sobre = () => {
    return (
        <div>
            <PageTitle title='Sobre' />
            <h1>Sobre</h1>
            <div>Esta página contem as informações sobre o estabelicimento</div>
        </div>
    )
}
export default sobre;