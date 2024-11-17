import React, { useState } from 'react';
import *as classes from '../styles/auth.module.scss'
import { Signup, Login } from '../services/services'
import { showToast } from '../utility/utility';


function SignupForm() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Validation error states
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState(null);


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

        // Validate the fields before proceeding
        if (!validateFields()) {
            return; // Exit if validation fails
        }

        try {
            // Step 1: Signup the user
            const signupResponse = await Signup({ email, password, confirmPassword });

            // Show success message via toast
            showToast("success", "Account created successfully!");

            // Step 2: Login immediately after signup
            const loginResponse = await Login({ email, password });

            // If login is successful, store the JWT token (e.g., in cookies or localStorage)
            if (loginResponse.data.token) {
                // Example: storing the token in cookies (you can also use localStorage if preferred)
                document.cookie = `authO_tk=${loginResponse.data.token}; path=/`;

                // Optionally, redirect the user to a dashboard or logged-in page
                // Example: navigate("/dashboard");
            }

            // Reset form fields
            setEmail('');
            setPassword('');
            setConfirmPassword('');

        } catch (err) {
            // Show error message via toast if the signup or login request fails
            console.error("Error during signup or login:", err.response?.data || err.message);
            showToast("error", err.response?.data?.message || "Failed to create account. Please try again.");
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
                            {passwordError && <p style={{ color: "red", margin: 0, paddingTop:"10px" }}>{passwordError}</p>}
                        </div>
                        <div className={classes.inputcon}>
                            <label className="labeltxt">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {confirmPasswordError && <p style={{ color: "red", margin: 0, paddingTop:"10px" }}>{confirmPasswordError}</p>}
                        </div>
                        <button
                            style={{ marginTop: "20px" }}
                            className="ipbtn"
                            onClick={handleSubmit}
                        >
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm