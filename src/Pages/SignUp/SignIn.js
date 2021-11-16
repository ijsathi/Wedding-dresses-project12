import {Container, Grid, Typography,Button, TextField ,CircularProgress, Alert} from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { NavLink,useLocation, useHistory } from 'react-router-dom';
import loginFrm from '../../images/banner/login-img2.png';
import SignUp from './SignUp';
// import useAuth from '../../../hooks/useAuth';
import useAuth from '../../hooks/useAuth';
import './SignUp.css';
import BridalFooter from '../../components/Footer/BridalFooter';
import Header from '../../components/Header/Header';

const SignIn = () => {
    const [loginData, setLoginData] = useState({});
    const {contexts} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnchange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        contexts.loginUser(loginData.email, loginData.password, location, history);
        
        e.preventDefault();
    }
    return (
        <>
        <Header></Header>
        <Container style={{textAlign:'center'}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Grid className='register-form'>
                <Typography  style={{border:'1px solid gray',backgroundColor:'#6c757d',color:"white"}} variant="body1"  gutterBottom>Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                <TextField
                    sx={{width:'75%', m:1}}
                    id="standard-basic"
                    label="user email"
                    type="email"
                    name='email'
                    onChange={handleOnchange}
                    variant="standard"
                  />
                  <TextField
                    sx={{width:'75%', m:1}}
                    id="standard-basic"
                    label="Password"
                    type="password"
                    name="password"
                    onChange={handleOnchange}
                    variant="standard"
                  />
                  <Button style={{backgroundColor:'rgb(33, 62, 54)'}} sx={{width:'75%', m:1}} variant='contained' type='submit'>
                      Login
                  </Button>
                  <NavLink
                    style={{textDecoration:'none'}}
                    to='/reg'>
                      <Button variant='text'>New user? Please register</Button>
                  </NavLink> 
                  <p>-------------------------------------@-----------------------------------</p>
                  <SignUp></SignUp>
                 </form>
                </Grid>
                 {contexts.loading && <CircularProgress color="inherit" />}
                 {contexts.user?.email && <Alert severity="success">SUCCESSFULLY</Alert>}
                 {contexts.error && <Alert severity="error">{contexts.error}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                  <img src={loginFrm} alt="" />
                </Grid>
            </Grid>
        </Container>
        <BridalFooter></BridalFooter>
        </>
    );
};

export default SignIn;