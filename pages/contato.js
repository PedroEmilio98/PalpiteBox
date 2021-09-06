import React from 'react';
import Link from 'next/dist/client/link';
import PageTitle from '../Components/PageTitle/PageTitle';


const contato = () => {
    return (
        <div>
            <PageTitle title='Contato' />

            <Link className='inline mx-auto hover' href='https://api.whatsapp.com/send?phone=051982831917&text=Ola! Gostaria de algumas informações a mais&fbclid=IwAR2Mt2d9aALC-injLfSH-qTwEhx0UJZLMygvJ-9e50dGQWWrKMWiFT-8Qws'>
                <a className='w-1/6 mx-auto'>
                    <div className='bg-green-700 w-1/5 py-10 mx-auto rounded-full my-12 text-white text-center'>
                        Atendimento por WhatssApp
                        <img src='./logo_Wpp1.png' className='w-16 inline' />
                    </div>
                </a>
            </Link >
            <Link className='inline mx-auto hover' href='www.facebook.com'>
                <a className='w-1/6 mx-auto'>
                    <div className='bg-blue-700 w-1/5 py-10 mx-auto rounded-full my-12 text-white text-center'>
                        Facebook
                        <img src='./logo_Fb.png' className='w-16 inline' />
                    </div>
                </a>
            </Link >


        </div >
    )
}

export default contato;