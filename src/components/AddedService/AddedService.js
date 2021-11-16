import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddedService.css';

const AddedService = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data =>{
         console.log(data);
         axios.post('https://evening-basin-66678.herokuapp.com/services', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Added successfully');
                reset();
            }
        })
        }
    return (
        <>
        <div className='add-service'>
            <h2 className='text-center p-5' style={{color:'rgb(33, 62, 54)'}}>Please Added Wedding Dress</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='write dress name' />
      <textarea {...register("description")}placeholder='description' />
      <input type="string" {...register("size")}placeholder='size S M X L' />
      <input type="string" {...register("class")}placeholder='example: wedding dress' />
      <input type="string" {...register("price")}placeholder='$ price' />
      <input {...register("img")}placeholder='image url' />
      <input className='sub' style={{background:'rgb(33, 62, 54)'}} type="submit" />
    </form>
        </div>
        </>
    );
};

export default AddedService;