import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import * as classes from './header.module.scss'
import Locationicon from '../../images/icons/pin.png'
import { Menu, Input, Button, Drawer } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined, MenuOutlined } from '@ant-design/icons';


function Header({ location }) {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const handleMenuClick = () => {
        setVisible(false);
    };


    return (
        <>


            <header >
                <div className={`onlyDes ${classes.header}`}>
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
                </div>
                <div className={`onlyMob ${classes.mobnav}`}>
                    <Button style={{ color: 'white', borderColor: 'none', backgroundColor: 'transparent' }} type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
                    <Drawer
                        title="CricKOnnect"
                        placement="right"
                        onClose={onClose}
                        visible={visible}
                    >

                        <Menu onClick={handleMenuClick} mode="inline" className="customnav">
                            <Menu.Item key="home">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="dreateteam">
                                <Link to="/create-team">Create Team</Link>
                            </Menu.Item>
                            <Menu.Item key="match">
                                <Link to="/match-booking">Match Booking</Link>
                            </Menu.Item>
                            <Menu.Item key="tournament">
                                <Link to="/tournaments">Tournaments</Link>
                            </Menu.Item>
                            <Menu.Item key="login">
                                <Link to="/login">Login</Link>
                            </Menu.Item>
                        </Menu>
                    </Drawer>
                    <div className={classes.logo}>
                        <Link to="/">CricKOnnect</Link>
                    </div>
                    <div>
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
                    </div>
                </div>

            </header></>
    )
}

export default Header