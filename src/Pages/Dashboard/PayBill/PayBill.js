import Button from '@mui/material/Button';
import React from 'react';
import {Link} from 'react-router-dom'

const PayBill = () => {
    return (
        <div style={{ textAlign:"center"}} >
            <img style={{width:"50%", textAlign:"center", alignItems:"center"}} src="https://cdn.dribbble.com/users/34292/screenshots/5371308/expiredfailedpaymentvdrib.gif" alt="" /> <br /> <br />
            <Link to='/bridaldashboard'><Button style={{ textDecoration:"none"}} variant="outlined">GO BACK</Button></Link>
        </div>
    );
};

export default PayBill;