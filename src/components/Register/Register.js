import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register:Create Account</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email"/>
                    <br/>
                    <input type="password" name="" id="" placeholder ="Your password"/>
                    <br/>
                    <input type="password" name="" id="" placeholder ="Re Enter password"/>
                    <br/>
                    <input type= "submit" value ="Submit" />
                </form>
                <p>Already have an account?<Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;