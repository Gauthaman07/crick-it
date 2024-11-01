import React from 'react'
import *as classes from '../styles/auth.module.scss'

function Login() {
    return (
        <>
           <div className={classes.cabgcon}>
                <div className={classes.container}>
                    <div className={classes.panel}>

                        {/* <img src="https://aadcdn.msftauthimages.net/c1c6b6c8-0szh86gogeqp1rzy7edvut0du0txcycjc5yyqmeonk4/logintenantbranding/0/bannerlogo?ts=638336507741520629" /> */}
                        <div className={classes.formcon}>
                            <h1>Login or Create Your Account</h1>
                            <div className={classes.inputcon}>
                                <label className='labeltxt'>Mobile Number</label>
                                <input type='text' placeholder='Mobile Number' />
                            </div>
                            <div className={classes.inputcon}>
                                <label className='labeltxt'>Password</label>
                                <input type='password' placeholder='Password' />
                            </div>
                            <a>Forgot Password</a>
                            <button style={{ marginTop: "20px" }} className="ipbtn">Log In</button>

                            <p>Don't have an account? <a href='/signup/'>Sign-up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login