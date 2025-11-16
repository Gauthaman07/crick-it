import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import * as classes from './header.module.scss';
import { Menu, Button, Drawer, Dropdown, Popover } from 'antd';
import { MenuOutlined, DownOutlined } from '@ant-design/icons';
import { getCookieData, deleteCookieData } from '../../utility/utility';
import SubMenu from 'antd/es/menu/SubMenu';
// API INTEGRATION COMMENTED OUT FOR REVAMP
// import { useDispatch, useSelector } from 'react-redux';  // Import Redux hooks
// import { fetchProfile, resetProfile } from '../../store/profileSlice';
import Logo from '../../images/ckwlogo.png';

function Header({ location }) {
    const [visible, setVisible] = useState(false);
    const AccessToken = getCookieData("authO_tk");

    // ==========================================
    // API INTEGRATION COMMENTED OUT FOR REVAMP
    // ==========================================

    /*
    // Redux hooks to access and dispatch actions
    const dispatch = useDispatch();
    const { user, team, loading, error } = useSelector((state) => state.profile);


    useEffect(() => {
        // Simplified condition and removed console.logs
        if (AccessToken && !user) {
            dispatch(fetchProfile())
                .unwrap()
                .catch((error) => {
                    // You might want to show a notification here
                    console.error('Failed to fetch profile:', error);
                });
        }
    }, [dispatch, AccessToken, user]);

    useEffect(() => {
        if (team?.id) {
            localStorage.setItem('teamId', team.id);
            console.log('Team ID stored:', team.id);
        }
    }, [team]);
    */

    // Handle Logout
    const handleLogout = () => {
        console.log("Logging out...");
        deleteCookieData('authO_tk');  // Remove token
        navigate('/login');
    };

    // Temporary stub for user display (API commented out)
    const userDisplayName = 'User';

    const menu = (
        <Menu>
            <Menu.Item
            onClick={() => {
                navigate('/myprofile/')
            }}
            >
                My Profile
            </Menu.Item>
            <Menu.Item onClick={handleLogout}>
                Logout
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <header>
                <div className={`onlyDes ${classes.header}`}>
                    <div
                        onClick={() => {
                            navigate('/')
                        }}
                        className={classes.logo}>
                        <img src={Logo} />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className={classes.navLinks}>
                        <Link to="/">Matches</Link>
                        <Link to="/">Tournaments</Link>
                        <Link to="/">Blog</Link>
                    </nav>
                </div>

                <div className={`onlyMob ${classes.mobnav}`}>
                    <Button style={{ color: 'white', borderColor: 'none', backgroundColor: 'black' }} type="primary" icon={<MenuOutlined />} onClick={() => setVisible(true)} />
                    <Drawer
                        title="CricKOnnect"
                        placement="right"
                        onClose={() => setVisible(false)}
                        visible={visible}
                    >
                        <Menu onClick={() => setVisible(false)} mode="inline" className="customnav">
                            <Menu.Item key="home">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="matches">
                                <Link to="/">Matches</Link>
                            </Menu.Item>
                            <Menu.Item key="tournaments">
                                <Link to="/">Tournaments</Link>
                            </Menu.Item>
                            <Menu.Item key="blog">
                                <Link to="/">The Nightwatchman Notes</Link>
                            </Menu.Item>
                        </Menu>
                    </Drawer>
                    <div onClick={() => navigate('/')} className={classes.logo}>
                        <img src={Logo} />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
