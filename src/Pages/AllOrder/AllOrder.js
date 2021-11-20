import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const AllOrder = () => {
    const [allOrder,setAllOrder ] = useState([]);

    useEffect(() =>{
        fetch('https://evening-basin-66678.herokuapp.com/cart')
        .then(res => res.json())
        .then(data => setAllOrder(data))
    },[])

    const handleDeleteUser = id =>{
      const proceed = window.confirm('Are You Sure, you want to delete?!?')
      if(proceed){
          const uri=`https://evening-basin-66678.herokuapp.com/cart/${id}`;
      fetch(uri, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          if(data.deletedCount > 0){
              
              const remainigOrders = allOrder.filter(allOrder => allOrder._id !== id)
              setAllOrder(remainigOrders)
          }
      }) 
      }
  }
    return (
        <>
            <IconButton aria-label="cart">
            <StyledBadge style={{textAlign:"center"}} badgeContent={allOrder.length} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
            </IconButton>
                    <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>NAME</StyledTableCell>
                    <StyledTableCell align="right">DRESS</StyledTableCell>
                    <StyledTableCell align="right">PRICE</StyledTableCell>
                    <StyledTableCell align="right">REMOVE</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allOrder.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                     <Avatar>U</Avatar>
                     Unknown
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.name}</StyledTableCell>
                      <StyledTableCell align="right">{row.price}</StyledTableCell>
                      <StyledTableCell align="right">
                          <IconButton  onClick={() => handleDeleteUser(row._id)} aria-label="delete">
                                <DeleteIcon  />
                             </IconButton>
                     </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </>
    );
};

export default AllOrder;