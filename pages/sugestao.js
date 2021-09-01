import React from 'react';
import Link from 'next/dist/client/link';

const sugestao = () => {
    return (
        <div className='mx-auto text-center p-4 w-2/5'>
            <h1 className='font-bold my-4'>Crítica ou sugestão</h1>
            <p className='mb-4 font-bold'>O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
            <div className='w-1/5 mx-auto'>
                <div className='mx-auto text-left'>
                    <label className='font-bold'>Seu nome:</label>
                    <input type='text' className='bg-blue-100 block shadow-lg rouded py-4 px-12' />
                </div>
            </div>
        </div>
    )
}

export default sugestao;