import React from 'react';
import Link from 'next/link';
import PageTitle from '../Components/PageTitle/PageTitle';

const sobre = () => {
    return (
        <div>
            <PageTitle title='Sobre' />
            <div className='border-2 mx-auto my-40 md:w-1/2 lg:1/2 p-20 text-center bg-gray-200'>
                Nesta página são inseridas as informações do seu restaurante
            </div>
        </div>
    )
}
export default sobre;