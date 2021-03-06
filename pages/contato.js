import React from 'react';
import Link from 'next/dist/client/link';
import PageTitle from '../Components/PageTitle/PageTitle';


const contato = () => {
    return (
        <div>
            <PageTitle title='Contato' />

            <Link className='inline mx-auto hover' href='https://api.whatsapp.com/send?phone=051982831917&text=Ola! Gostaria de algumas informações a mais&fbclid=IwAR2Mt2d9aALC-injLfSH-qTwEhx0UJZLMygvJ-9e50dGQWWrKMWiFT-8Qws'>
                <a className='w-1/6 mx-auto'>
                    <div className='bg-green-700 w-full lg:w-1/4 md:1/4 py-10 mx-auto rounded-full my-12 text-white text-center'>
                        Atendimento por WhatssApp
                        <div className='p-2 inline'>
                            <img src='./logo_Wpp1.png' className='w-16 inline' />
                        </div>
                    </div>
                </a>
            </Link >
            <Link className='inline mx-auto hover' href='https://facebook.com'>
                <a className='w-1/6 mx-auto'>
                    <div className='bg-blue-700 w-full lg:w-1/4 md:1/4  py-10 mx-auto rounded-full my-12 text-white text-center'>
                        Nossa pagina no Facebook
                        <div className='p-3 inline'>
                            <img src='./logo_Fb.png' className='w-16 inline' />
                        </div>
                    </div>
                </a>
            </Link >
            <Link className='inline mx-auto hover' href='mailto:pedroemiliokuhn@gmail.com'>
                <a className='w-1/6 mx-auto'>
                    <div className='bg-gray-600 w-full lg:w-1/4 md:1/4 sm:w-1/3 py-10 mx-auto rounded-full my-12 text-white text-center'>
                        Envie uma mensagem
                        <div className='inline'>
                            <img src='./logo_Email.png' className='w-32 inline' />
                        </div>
                    </div>
                </a>
            </Link >


        </div >
    )
}

export default contato;