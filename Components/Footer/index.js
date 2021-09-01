import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-700 mx-auto text-center'>
            <div className='mx-auto font-bold text-white pt-4'>
                Projeto desenvolvido por:{'  '}
                <a href='https://www.linkedin.com/in/pedro-emilio-diello-kuhn-156ab916a/' target="_blank" className='hover:underline'>
                    Pedro Emilio
                </a>
            </div>
            <div className='mt-2'>
                <img src='./logo_devpleno.png' className='p-4 pr-8 inline mx-auto' />
                <img src='./logo_sfs.png' className='p-4 pl-8 inline mx-auto' />
            </div>
        </div>
    )
}

export default Footer;