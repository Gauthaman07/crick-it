import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import * as classes from './header.module.scss'
import Locationicon from '../../images/icons/pin.png'


function Header({ location }) {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };





    const [mobiletoggleButtton, setMobileToggleButton] = useState(false);
    const [navExpand, setnavExpand] = useState(false);


    return (
        <>


            <header className={classes.header}>
                <div className={classes.logo}>
                    <Link to="/">CricKOnnect</Link>
                </div>

                {/* Desktop Navigation */}
                <nav className={classes.navLinks}>
                    <Link to="/">Home</Link>
                    <Link to="/create-team">Create Team</Link>
                    <Link to="/match-booking">Match Booking</Link>
                    <Link to="/tournaments">Tournaments</Link>
                    {location &&
                        <div className={classes.lctnav}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="white" // White color for the icon
                                className="location-icon"
                            >
                                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
                            </svg>
                            <p>{location}</p>
                        </div>
                    }
                    <Link to="/login">Login</Link>
                </nav>

                <div className={classes.hamburger} onClick={toggleDrawer}>
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                    <span className={classes.bar}></span>
                </div>

                {/* Drawer Menu */}
                <nav className={`${classes.drawer} ${isDrawerOpen ? classes.drawerOpen : ''}`}>
                <button className={classes.closeButton} onClick={toggleDrawer}>✕</button>

                <Link to="/" onClick={toggleDrawer}>Home</Link>
                <Link to="/create-team" onClick={toggleDrawer}>Create Team</Link>
                <Link to="/match-booking" onClick={toggleDrawer}>Matches</Link>
                <Link to="/tournaments" onClick={toggleDrawer}>Tournaments</Link>
                <Link to="/location" onClick={toggleDrawer}>Location</Link>
                <Link to="/login" onClick={toggleDrawer}>Login</Link>

                {/* Navigation with <p> Tag */}
                <p
                    onClick={() => {
                        navigate('/create-team');
                        toggleDrawer(); // Close drawer after navigation
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    Create Team
                </p>
            </nav>

                {/* Overlay for drawer */}
                {isDrawerOpen && <div className={classes.overlay} onClick={toggleDrawer}></div>}
            </header></>
    )
}

export default Header