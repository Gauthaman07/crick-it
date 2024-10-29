import React from 'react'
import *as classes from '../styles/auth.module.scss'

function signup() {
    return (
        <div className={classes.cabgcon}>
            <div className={classes.container}>
                <div className={classes.panel}>

                    <img src="https://aadcdn.msftauthimages.net/c1c6b6c8-0szh86gogeqp1rzy7edvut0du0txcycjc5yyqmeonk4/logintenantbranding/0/bannerlogo?ts=638336507741520629" />
                    <div className={classes.formcon}>
                        <h1>Create Your Account</h1>
                        <div className={classes.inputcon}>
                            <label className='labeltxt'>First Name</label>
                            <input type='text' placeholder='First Name' />
                        </div>
                        <div className={classes.inputcon}>
                            <label className='labeltxt'>Last Name</label>
                            <input type='text' placeholder='Last Name' />
                        </div>
                        <div className={classes.inputcon}>
                            <label className='labeltxt'>Mobile Number</label>
                            <input type='number' placeholder='Mobile Number' />
                        </div>
                        <div className={classes.inputcon}>
                            <label className='labeltxt'>Email</label>
                            <input type='text' placeholder='Email' />
                        </div>
                        <div className={classes.inputcon}>
                                <label className='labeltxt'>Password</label>
                                <input type='password' placeholder='Password' />
                            </div>
                            <div className={classes.inputcon}>
                                <label className='labeltxt'>Confirm Password</label>
                                <input type='password' placeholder='Confirm Password' />
                            </div>
                        <button style={{ marginTop: "20px" }} className="ipbtn">Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signup