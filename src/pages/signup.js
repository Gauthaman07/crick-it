import React, { useState } from 'react';
import *as classes from '../styles/auth.module.scss'
import { Signup, Login } from '../services/services'
import { showToast } from '../utility/utility';
import { navigate } from 'gatsby';


function SignupForm() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // Validation error states
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateFields = () => {
        let isValid = true;

        // Reset previous errors
        setEmailError(null);
        setPasswordError(null);
        setConfirmPasswordError(null);

        if (!email) {
            setEmailError("Email is required.");
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            setEmailError("Enter a valid email address.");
            isValid = false;
        }

        if (!password) {
            setPasswordError("Password is required.");
            isValid = false;
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters.");
            isValid = false;
        }

        if (!confirmPassword) {
            setConfirmPasswordError("Confirm Password is required.");
            isValid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match.");
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate fields
        if (!validateFields()) {
            return; // Exit if validation fails
        }

        try {
            setLoading(true); // Start loading

            // Call the signup API
            const signupResponse = await Signup({ email, password, confirmPassword });

            showToast('success', 'Account created successfully! Redirecting to login...');

            // Redirect to login after a delay
            setTimeout(() => {
                navigate('/login');
            }, 3000);

            // Reset form fields
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (err) {
            console.error('Error during signup:', err.response?.data || err.message);
            showToast(
                'error',
                err.response?.data?.message || 'Failed to create account. Please try again.'
            );
        } finally {
            setLoading(false); // Stop loading
        }
    };


    return (
        <div className={classes.cabgcon}>
            <div className={classes.container}>
                <div className={classes.panel}>
                    <div className={classes.formcon}>
                        <h1>Create Your Account</h1>
                        <div className={classes.inputcon}>
                            <label className="labeltxt">Email</label>
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && <p style={{ color: "red", margin: 0, paddingTop: "10px" }}>{emailError}</p>}
                        </div>
                        <div className={classes.inputcon}>
                            <label className="labeltxt">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordError && <p style={{ color: "red", margin: 0, paddingTop: "10px" }}>{passwordError}</p>}
                        </div>
                        <div className={classes.inputcon}>
                            <label className="labeltxt">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {confirmPasswordError && <p style={{ color: "red", margin: 0, paddingTop: "10px" }}>{confirmPasswordError}</p>}
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            style={{ marginTop: '20px' }}
                            className="ipbtn"
                            disabled={loading} 
                        >
                            {loading ? (
                                <div className={classes.loader}></div> 
                            ) : (
                                'Create Account'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm