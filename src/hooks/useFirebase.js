import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,updateProfile, getIdToken} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication(); 
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name, history) =>{
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError('');
            const newUser = {email, displayName:name};
            setUser(newUser);
            // save user to DB
            saveUser(email, name, 'POST')
            // send name to firebase after creation
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });
            history.replace('/');
        })
        .catch((error) => {
          setError(error.message);
          console.log(error);
        })
        .finally(() => setLoading(false));
    }

    const loginUser = (email, password, location, history) =>{
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
              setError(error.message);
        })
        .finally(() => setLoading(false));
    }

    const signInWithGoogle  = (location, history) =>{
        setLoading(true);
       signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
            setError('');
            const destination = location?.state?.from || '/';
                history.replace(destination);
        }).catch((error) =>{
            setError(error.message);
        })
        .finally(() => setLoading(false));
    }

    // observer user state 
    useEffect( () =>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user ){
                setUser(user);
                getIdToken(user)
                .then(idToken =>{
                    setToken(idToken);
                })
            }else{
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribe
    },[])

    useEffect(() =>{
        fetch(`https://evening-basin-66678.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

    const logOut = () =>{
        setLoading(true);
        signOut(auth)
        .then(() =>{
            setUser({})
        })
        .finally(() => setLoading(false));
    }

    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName};
        fetch('https://evening-basin-66678.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        error,
        admin,
        token,
        registerUser,
        loginUser,
        signInWithGoogle ,
        signInWithPopup,
        logOut,
        loading, 
    }
}
export default useFirebase;