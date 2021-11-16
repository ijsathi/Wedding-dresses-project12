import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import MakeAdmin from '../../hooks/MakeAdmin/MakeAdmin';
import AddedService from '../../components/AddedService/AddedService';
import AllOrder from '../AllOrder/AllOrder';
import AdminRoute from '../SignUp/AdminRoute/AdminRoute';

const drawerWidth = 180;

function BridalDashboard(props) {
  
  const {contexts} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar ><i className="fas fa-bars"> MENU</i></Toolbar>
      <Divider />
        <Link style={{textDecoration:'none',color:'black'}} to='/'>
          <Button color="inherit"><i className="fas fa-home"></i>HOME</Button>
        </Link><br />
        <Link style={{textDecoration:'none',color:'black'}} to={`${url}`}>
          <Button color="inherit"><i className="fas fa-th-large"></i>DASHBOARD</Button>
        </Link><br />
        <Link style={{textDecoration:'none',color:'black'}} to={`/mybooking`}>
          <Button color="inherit"><i className="fas fa-luggage-cart"></i>MY ORDER</Button>
        </Link><br />
        <Link style={{textDecoration:'none',color:'black'}} to='/paybill'>
          <Button color="inherit"><i className="fas fa-file-invoice-dollar"></i>PAY BILL</Button>
        </Link><br />
        <Link style={{textDecoration:'none',color:'black'}} to='/writereview'>
          <Button color="inherit"><i className="far fa-edit"></i>REVIEW</Button>
        </Link>
        {
          contexts.admin && <Box>
            <hr />
        <Link style={{textDecoration:'none',color:'black'}} to={`${url}/addedservice`}>
          <Button color="inherit"><i className="fas fa-cart-plus"></i>Add New Dress</Button>
        </Link>
        <Link style={{textDecoration:'none',color:'black'}} to={`${url}/allOrder`}>
          <Button color="inherit"><i className="fas fa-tasks"></i>Manage all orders</Button>
        </Link>

        <Link style={{textDecoration:'none',color:'black'}} to={`${url}/makeAdmin`}>
          <Button color="inherit"><i className="fas fa-user-plus"></i>Make Admin</Button>
        </Link>
        
          </Box>
        }
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{backgroundColor:"rgb(244, 248, 248)", }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2,display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
          <img className=' logo' src="https://bridey.leotheme.com/img/bridey-logo-1590373739.jpg" alt="" />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addedservice`}>
          <AddedService></AddedService>
        </AdminRoute>
        <AdminRoute path={`${path}/allOrder`}>
         <AllOrder></AllOrder>
        </AdminRoute>
      </Switch>
      </Box>
    </Box>
    </>
  );
}        

BridalDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default BridalDashboard;