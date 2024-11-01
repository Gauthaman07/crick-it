import React from 'react'
import * as classes from './home.module.scss'
import { navigate } from 'gatsby'
import Layout from '../Layout/Layout'


function Home() {
    return (
        <>
            {/* <Layout> */}
            <div className='mainsec'>
                <div className={classes.container}>
                    <div className={classes.alertpanel}>
                        <h1>Step onto the Field of Your Dreams!</h1>
                        <p>Effortlessly organize and join cricket matches and tournaments—anytime, anywhere.</p>

                    </div>
                </div>


                <div className={classes.imgblock}>
                    <div className={classes.subblock}>
                        <div className={classes.textblock}>
                            <p>Create Team</p>
                            <h3>Unleash Your Squad – Form the Ultimate Team!</h3>
                            <button onClick={() => {
                                navigate('/create-team')
                            }}>Create</button>
                        </div>
                        <img src="https://th.bing.com/th/id/R.75b29478422fe01ed321d2afb8db3c1b?rik=uVu1pjeCcgyrdA&riu=http%3a%2f%2fi.nextmedia.com.au%2fNews%2fGettyImages-1588583.jpg&ehk=aR38PClS5EOTTNSmoMf3Ig7T%2bPrQSDPp4EP%2fbZPkcvE%3d&risl=&pid=ImgRaw&r=0" />
                    </div>
                    <div className={classes.subblock}>
                        <div className={classes.textblock}>
                            <p>Match Booking
                            </p>
                            <h3>Seize the Pitch – Book Your Battle Now!</h3>
                            <button onClick={() => {
                                navigate('/match-booking')
                            }}>Book</button>
                        </div>
                        <img src="https://staticc.sportskeeda.com/editor/2018/01/c4c7d-1516361145-800.jpg" />
                    </div>
                    <div className={classes.subblock}>
                        <div className={classes.textblock}>
                            <p>Tournament Booking
                            </p>
                            <h3>Claim Glory – Enter the Tournament Arena!</h3>
                            <button
                                onClick={() => {
                                    navigate('/tournaments')
                                }}
                            >Join</button>
                        </div>
                        <img src='https://image.crictracker.com/wp-content/uploads/2018/07/MS-Dhoni-2.jpg' />
                    </div>


                </div>
            </div>
            {/* </Layout> */}
        </>
    )
}

export default Home