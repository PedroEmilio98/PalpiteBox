import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import PageTitle from '../Components/PageTitle/PageTitle.js';

const fetcher = (...args) => fetch(...args).then(res => res.json())


const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher)
    return (
        <div className='mx-auto p-16 mb-15'>
            <PageTitle title='Home' />
            <p className='text-center font-bold text-xl sm:text-sm py-6'>
                O restaurante X sempre busca por atender melhor seus clientes.
                <br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='text-center my-12'>
                <Link href='./sugestao' >
                    <a className='bg-blue-400  p-4 lg:py-8 lg:px-24 md:py-8 md:px-24 text-lg font-bold rounded-full shadow-lg'>Deixar opinião</a>
                </Link>
            </div>
            {!data && <p>Carregando...</p>}
            {!error && data && data.showCoupon &&
                <p className='text-center font-bold mb-10 py-10'>
                    {data.message}
                </p>
            }



        </div >
    )
}

export default Index;