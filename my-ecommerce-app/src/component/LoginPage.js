import {React, useState, useEffect} from "react";
// import { useAuth } from '../AuthContext';
import Header from "./Header";
import Footer from "./Footer";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginPage = () => {
    const [loginStatus, setLoginStatus] = useState(true)
    // const [loggedInState, setLoggedInState] = useState(false);
    const [loggedInState, setLoggedInState] = useState(() => {
        const storedLoggedInState = localStorage.getItem('loggedInState');
        return storedLoggedInState ? JSON.parse(storedLoggedInState) : false;
    });
    // const {loggedInState, setLoggedInState} = useAuth();

    useEffect(() => {
        console.log(loggedInState ? "logged in before loginpage" : "not logged in before loginpage")
        localStorage.setItem('loggedInState', JSON.stringify(loggedInState))
        console.log(loggedInState ? "logged in after loginpage" : "not logged in before loginpage")
    }, [loggedInState]);

    return(
        <div>
            <Header />
            {loginStatus && <LoginForm setLoginStatus={setLoginStatus} />}
            {!loginStatus && <SignupForm setLoginStatus={setLoginStatus}/>}
            <Footer />
        </div>
    );
}
export default LoginPage;