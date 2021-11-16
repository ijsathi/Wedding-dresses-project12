import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './SignUp.css';

const SignUp = () => {
  const { contexts} = useAuth();
  const {signInWithGoogle } = contexts;
  const location = useLocation();
  const history = useHistory();
  // const redirect_uri = location.state?.from || '/home';

  const handleGoogleLogin = () =>{
    signInWithGoogle (location, history)
  //   .then(result =>{
  //     history.push(redirect_uri);
  //     console.log(result);
  // })
  // .catch(error=>{
  //   console.log(error.message);
  // })
  }
    return (
           <div className='sign-form' style={{textAlign:'center', padding:'30px'}}>
            <button onClick={handleGoogleLogin} ><img style={{width:'20px',style:'none'}} src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="" /> Google sign up</button>
          </div>
    );
};

export default SignUp;