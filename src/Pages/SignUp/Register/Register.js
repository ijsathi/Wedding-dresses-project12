import {Container, Grid, Typography,Button, TextField, CircularProgress, Alert } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import useAuth from '../../../hooks/useAuth';
import loginFrm from '../../../images/banner/login-img - Copy.png';
import SignUp from '../SignUp';
import './Register.css';
import img from '../../../images/logo/icon-logo.png';


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {contexts} = useAuth();
    // const {registerUser } = contexts;
    console.log(contexts);
    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value, newLoginData);
    }
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert("Your password didn't match");
            return;
        }
        contexts.registerUser(loginData.email, loginData.password, loginData.name,  history);
        e.preventDefault();
    }
    return (
        <>
        <Header></Header>
        <Container style={{textAlign:'center'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <img src={loginFrm} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid  className='register-form'>
                  <Typography style={{border:'1px solid gray',backgroundColor:'#6c757d',color:"white"}} variant="body1" 
                  gutterBottom>
                    Register
                  </Typography>
                  
                {!contexts.loading && <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{width:'75%', m:1}}
                    id="standard-basic"
                    label="Your name"
                    type="name"
                    name='name'
                    onBlur={handleOnBlur}
                    variant="standard"
                  />
                <TextField
                    sx={{width:'75%', m:1}}
                    id="standard-basic"
                    label="User email"
                    type="email"
                    name='email'
                    onBlur={handleOnBlur}
                    variant="standard"
                  />
                  <TextField
                    sx={{width:'75%', m:1}}
                    id="standard-basic"
                    label="Password"
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    variant="standard"
                  />
                  <TextField
                    sx={{width:'75%', m:1}}
                    id="standard-basic"
                    label="Re-Type Password"
                    type="password"
                    name="password2"
                    onBlur={handleOnBlur}
                    variant="standard"
                  />
                  <Button style={{backgroundColor:'rgb(33, 62, 54)'}} sx={{width:'75%', m:1}} variant='contained' type='submit'>
                      Sign Up
                  </Button>
                  <NavLink
                    style={{textDecoration:'none'}}
                    to='/signin'>
                      <Button variant='text'>Already Register? Please SignUp</Button>
                  </NavLink> 
                  <p>-------------------------------------@-----------------------------------</p>
                  <SignUp></SignUp>
                 </form>}
                  </Grid>
                
                 {contexts.loading && <CircularProgress color="inherit" />}
                 {contexts.user?.email && <Alert severity="success">SUCCESSFULLY</Alert>}
                 {contexts.error && <Alert severity="error">{contexts.error}</Alert>}
                 <Typography>
                    <img src={img} alt="" />
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default Register;