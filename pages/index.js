import Link from 'next/link';
import React from 'react';

const Index = () => {
    return (
        <div className='mx-auto'>
            <p className='text-center font-bold mt-6'>
                O restaurante X sempre busca por atender melhor seus clientes.
                <br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='text-center my-12'>
                <Link href='./sugestao' >
                    <a className='bg-blue-400  py-4 px-12 font-bold rounded-md shadow-lg'>Deixar opinião</a>
                </Link>
            </div>
            <p className='text-center font-bold mb-6'>
                Mensagem do desconto
            </p>



        </div >
    )
}

export default Index;