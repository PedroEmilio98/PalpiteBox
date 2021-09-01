import React from 'react';
import style from './style.module.css';
import Link from 'next/dist/client/link';

const header = () => {
    return (
        <React.Fragment>
            <div className={style.wrapper}>
                <div className='container mx-auto'>
                    <Link href='/'>
                        <a><img src='./logo_ppb.png' alt='PalpiteBox' className='mx-auto' /></a>
                    </Link>
                </div>
            </div>
            <div className='bg-gray-300 p-4 shadow-lg text-center'>
                <Link href='/contato'>
                    <a className='p-4 hover:underline'>Contato</a>
                </Link>
                <Link href='/sobre'>
                    <a className='p-4 hover:underline'>Sobre</a>
                </Link>
                <Link href='/sugestao'>
                    <a className='p-4 hover:underline'>Sugestão</a>
                </Link>
            </div>
        </React.Fragment>
    )
}
export default header;




