import React, { useState } from 'react';
import PageTitle from '../Components/PageTitle/PageTitle';



const sugestao = () => {

    const notas = [0, 1, 2, 3, 4, 5];
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: ''
    })
    const [sucess, SetSucces] = useState(false);
    const [retorno, setRetorno] = useState({});

    const save = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json();
            SetSucces(true);
            setRetorno(data)
        } catch (err) {
        }
    }
    const onChange = evt => {
        const value = evt.target.value;
        const key = evt.target.name;
        setForm(old => ({
            ...old,
            [key]: value,
        }))
    }
    return (
        <div className='mx-auto text-center p-4 w-2/5'>
            <PageTitle title='Sugestao' />
            <h1 className='font-bold my-4'>Crítica ou sugestão</h1>
            <p className='mb-4 font-bold'>O restaurante X sempre busca por atender melhor seus clientes.<br />
                Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
            {!sucess && <div className='w-1/2 mx-auto'>
                <div className='mx-auto text-left'>
                    <label className='font-bold'>Seu nome:</label>
                    <input type='text' className='bg-blue-100 block shadow-lg rouded py-4 px-12' placeholder='Nome' name='Nome' onChange={onChange} value={form.Nome} />
                    <label className='font-bold'>Email:</label>
                    <input type='text' className='bg-blue-100 block shadow-lg rouded py-4 px-12' placeholder='seuemail@email.com' name='Email' onChange={onChange} value={form.Email} />
                    <label className='font-bold'>Whatsapp:</label>
                    <input type='text' className='bg-blue-100 block shadow-lg rouded py-4 px-12' placeholder='DDDXXXXXXXXX' name='Whatsapp' onChange={onChange} value={form.Whatsapp} />
                    <label className='font-bold'>Nota:</label>
                    <div className='flex py-4'>
                        {notas.map(nota => {
                            return (
                                <label className='block w-1/6 text-center '>
                                    {nota}<br />
                                    <input type='radio' name='Nota' value={nota} onChange={onChange} />
                                </label>)
                        })}
                    </div>
                    <button className="bg-blue-400 mt-4 py-4 px-12 font-bold rounded-md shadow-lg" onClick={save}>Salvar</button>
                </div>
            </div>}
            {sucess &&
                <div className='mx-auto w-1/2'>
                    <p className='mb-6 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado pela contribuição!</p>
                    {retorno.showCupom &&
                        <div className='mb-1 border px-4 py-3'>
                            Seu Cupom: <br />
                            <span className='mb-4 font-bold text-black text-2xl'>{retorno.Cupom}</span><br />
                            <span className=' text-black'>{form.Nome}</span>
                        </div>}
                    <div className='mb-4 border px-4 py-3'>
                        <span className=' text-black'>{retorno.Promo}</span>
                    </div>
                    <div className='mb-4 italic'>
                        Apresente uma foto desta tela na sua próxima compra
                    </div>
                </div>}
        </div>
    )
}

export default sugestao;