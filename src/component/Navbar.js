import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import Model from 'react-modal';
import axios from 'axios';
import AuthContext from './Pages/AuthContext.js';
import {UserContext} from "./Pages/UserContext";


const Navbar = () => {
    const [log, setLog] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [visible, setVisible] = useState(false);
    const [reschedule, setReschedule] = useState(false);
    const [cancel, setCancel] = useState(false);

    const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
    const [signinData, setSigninData] = useState({ email: '', password: '' });


    const [user, setUser] = useState(null);
    const [userType, setUserType] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const { IsloggedIn, setIsLoggedIn } = useContext(AuthContext);
    const { userId, setUserId } = useContext(UserContext);


    const handleSignupChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const handleSigninChange = (e) => {
        setSigninData({ ...signinData, [e.target.name]: e.target.value });
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/signup', signupData);
            console.log(response.data);
            alert("User created successfully");
            setToggle(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSigninSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/signin', signinData);
            console.log(response.data);
            alert("User logged in successfully");
            setUserType(response.data.user_type);
            setLoggedIn(true);
             setIsLoggedIn(true);
             setUserId(response.data.user.id);


            setLog(false);


        } catch (error) {
            console.error(error);
            alert('Wrong credentials');
        }
    };

    const handleLogout = () => {
        if (window.confirm('Are you sure you want to log out?')) {
            setUserType('');
            setLoggedIn(false);
            setIsLoggedIn(false);
            setUserId(0);
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <p><span>Imperial</span> Car Detailing</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current='page' to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/AutoDetail">Auto Detailing</Link></li>
                                    <li><Link className="dropdown-item" to="/Ceramic">Ceramic coating</Link></li>
                                    <li><Link className="dropdown-item" to="/Engine">Engine detailing</Link></li>
                                    <li><Link className="dropdown-item" to="/Paint">Paint Protection Film</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Progressbar">Progress Bar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Appointmenthandle">My Appointments</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                            {userType === 'super' && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Adminpanel">Admin Panel</Link>
                                </li>
                            )}
                        </ul>
                        {!loggedIn ? (
                            <>
                                <a id='signin' className="nav-link dropdown-toggle" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Sign in
                                </a>
                                <ul id='signdrop' className="dropdown-menu">
                                    <li><a onClick={() => setLog(true)} className="dropdown-item" href="#">Log in</a></li>
                                    <Model className='popup' isOpen={log}>
                                        <h4>Login</h4>
                                        <form className='form12' onSubmit={handleSigninSubmit}>
                                            <div>
                                                <input placeholder='Email' name="email" type="email" onChange={handleSigninChange} />
                                                <i className="fa-solid fa-envelope"></i><br />
                                            </div>
                                            <div>
                                                <input placeholder='Password' name="password" type="password" onChange={handleSigninChange} />
                                                <i className="fa-solid fa-lock"></i> <br />
                                            </div>
                                            <button className='login'>Login</button>
                                            <br />
                                            <span id='login-span'>Not a member?<a onClick={() => setToggle(true)} href="#">Signup</a></span>
                                        </form>
                                        <button id='close' onClick={() => setLog(false)}>X</button>
                                    </Model>
                                    <li><a onClick={() => setToggle(true)} className="dropdown-item" href="#">Sign up</a></li>
                                    <Model className='popup1' isOpen={toggle}>
                                        <h4>Signup</h4>
                                        <form className='form12' onSubmit={handleSignupSubmit}>
                                            <div>
                                                <input placeholder='Name' name="name" type='text' onChange={handleSignupChange} />
                                                <i className="fa-solid fa-user"></i><br />
                                            </div>
                                            <div>
                                                <input placeholder='Email' name="email" type="email" onChange={handleSignupChange} />
                                                <i className="fa-solid fa-envelope"></i><br />
                                            </div>
                                            <div>
                                                <input placeholder='Password' name="password" type="password" onChange={handleSignupChange} />
                                                <i className="fa-solid fa-lock"></i><br />
                                            </div>
                                            <button className='login'>Sign up</button>
                                            <br />
                                            <span id='login-span'>Already a member?<a onClick={() => setToggle(false)} href="#">Login</a></span>
                                        </form>
                                        <button id='close' onClick={() => setToggle(false)}>X</button>
                                    </Model>
                                </ul>
                            </>
                        ) : (
                            <>
                                <span className="nav-link">User Type: {userType === 'customer' ? 'Customer' : 'Owner'}&nbsp;&nbsp;&nbsp;</span>
                                <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
