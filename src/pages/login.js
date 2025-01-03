import React, { useState } from 'react';
import *as classes from '../styles/auth.module.scss'
import { showToast, setCookieData } from '../utility/utility';
import { SignIn } from '../services/services';
import { navigate } from 'gatsby';


function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [loading, setLoading] = useState(false);


    const validateFields = () => {
        let isValid = true;

        setEmailError(null);
        setPasswordError(null);

        if (!email) {
            setEmailError("Email is required");
            isValid = false;
        }

        if (!password) {
            setPasswordError("Password is required");
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!validateFields()) {
            return;
        }

        try {
            setLoading(true);

            const loginResponse = await SignIn({
                emailOrMobile: email,
                password,
            });



            if (loginResponse.data && loginResponse.data.token) {

                showToast("success", "Login successful!");
                setCookieData('authO_tk', loginResponse.data.token);  // Store token in cookie

                setTimeout(() => {
                    navigate('/')
                }, 2000);
            } else {

                console.error("Token not found in response");
                showToast("error", "Invalid credentials, please try again.");
            }
        } catch (err) {

            console.error("Error during login:", err.response?.data || err.message);
            showToast("error", err.response?.data?.message || "Something went wrong. Please try again.");
        }
        finally {
            setLoading(false);
        }
    };




    return (
        <>
            <div className={classes.cabgcon}>
                <div className={classes.container}>
                    <div className={classes.panel}>

                        <div className={classes.formcon}>
                            <h1>Login or Create Your Account</h1>
                            <div className={classes.inputcon}>
                                <label className="labeltxt">Email / Mobile Number</label>
                                <input
                                    type="text"
                                    placeholder="email or phone"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailError && <p style={{ color: "red", margin: 0, paddingTop: "10px" }}>{emailError}</p>}
                            </div>
                            <div className={classes.inputcon}>
                                <label className="labeltxt">Password</label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {passwordError && <p style={{ color: "red", margin: 0, paddingTop: "10px" }}>{passwordError}</p>}
                            </div>
                            <a>Forgot Password</a>
                            <button style={{ marginTop: "20px" }} className="ipbtn" onClick={handleSubmit}>
                                <span>
                                    {loading ? (
                                        <div className="loader"></div>
                                    ) : (
                                        'Log In'
                                    )}
                                </span>
                            </button>

                            <p>Don't have an account? <a href='/signup/'>Sign-up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login