import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import PageTitle from '../Components/PageTitle/PageTitle.js';

const fetcher = (...args) => fetch(...args).then(res => res.json())


const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher)
    return (
        <div className='mx-auto p-20 mb-20'>
            <PageTitle title='Home' />
            <p className='text-center font-bold my-6 text-xl'>
                O restaurante X sempre busca por atender melhor seus clientes.
                <br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>
            <div className='text-center my-12'>
                <Link href='./sugestao' >
                    <a className='bg-blue-400  py-8 px-24 text-lg font-bold rounded-full shadow-lg'>Deixar opinião</a>
                </Link>
            </div>
            {!data && <p>Carregando...</p>}
            {!error && data && data.showCoupon &&
                <p className='text-center font-bold mb-4'>
                    {data.message}
                </p>
            }



        </div >
    )
}

export default Index;