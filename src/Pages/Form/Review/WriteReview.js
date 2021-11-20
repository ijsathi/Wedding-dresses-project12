import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Header from '../../../components/Header/Header';
import BridalFooter from '../../../components/Footer/BridalFooter';

const WriteReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://evening-basin-66678.herokuapp.com/review', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Added successfully');
                reset();
            }
        } )
    }
    return (
        <>
        <Header></Header>
        <div className='add-service'>
            <h2 className='text-center p-5' style={{color:'rgb(33, 62, 54)'}}>Please Add Your Review</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("img")}placeholder='your image url' />
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='please write your name' />
      <textarea {...register("review")}placeholder='write your review' />
      <input type="string" {...register("work")}placeholder='write your profession' />
      <input type="number" {...register("rating")}placeholder='give rating' />
      <input className='sub' style={{background:'rgb(33, 62, 54)'}} type="submit" />
    </form>
        </div>
       <BridalFooter></BridalFooter>
        </>
    );
};

export default WriteReview;