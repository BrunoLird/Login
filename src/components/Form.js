import React from 'react'
import bgImg from '../assets/innovatica.webp';
import { useForm } from 'react-hook-form';
import './FormStyle.css'

export default function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);
    
  return (
    <section>
        <div className="login">
            <div className="log-1">
                <h2>Innovatica</h2>
                <span>Ingresar para administrar el sistema</span>
                <form id='form' className='flex flex-log' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='Usuario'/>
                    <input type="password" {...register("password")} placeholder='Contraseña'/>
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='Identificador'/>
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Ingresar</button>
                </form>
            </div>
            <div className="log-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}
