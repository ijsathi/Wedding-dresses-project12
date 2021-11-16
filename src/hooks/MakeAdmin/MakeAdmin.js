import { TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {contexts} = useAuth()


    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e =>{
        const user = {email};
        fetch('https://evening-basin-66678.herokuapp.com/users/admin', {
            method:'PUT',
            headers:{
                'authorization':`Bearer ${contexts.token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
            console.log(data);
            setSuccess(true);
        }
        })
        e.preventDefault();
    }
    return (
        <div style={{textAlign:"center"}}>
            <h3>Make Admin</h3>
            <form onSubmit={handleAdminSubmit}>
            <TextField sx={{width:"50%"}}  label="email" type='email' onBlur={handleOnBlur} variant="standard" />
            <Button type='submit' variant='contained' style={{backgroundColor:"#adb5bd"}}>Make Admin</Button>
            </form>
            {success && <Alert severity="success">MAKE ADMIN SUCCESSFULLY✅</Alert>}
        </div>
    );
};

export default MakeAdmin;