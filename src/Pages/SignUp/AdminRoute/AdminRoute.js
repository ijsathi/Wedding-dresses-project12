import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {contexts} = useAuth();
    if(contexts.loading){
      return (
        <>
        <div className='text-danger text-center'>
          <Spinner animation="border" role="status">
             <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
        </>
      );
    }
    return (
        <Route
        {...rest}
        render={({location}) => contexts.user.email && contexts.admin? (children):(<Redirect
          to={{
            pathname: "/",
            state: { from: location }
          }}
        />)
      
      }
        
        >
            
        </Route>
    );
};

export default AdminRoute;