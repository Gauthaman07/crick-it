import React, { useState, useEffect, useRef } from 'react'
import * as classes from './home.module.scss'
import { navigate } from 'gatsby'
import { Link } from 'gatsby'
import Logo from '../../images/ckwlogowo.png'
import Ground from '../../images/gp.jpg'
import { Menu, Drawer } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { IoCalendarOutline } from 'react-icons/io5'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { GiTrophy } from 'react-icons/gi'
import SubtleParticles from '../SubtleParticles/SubtleParticles'


function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showOutline, setShowOutline] = useState(false);
    const [showBold, setShowBold] = useState(false);
    const scrollTextRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollTextRef.current) {
                const rect = scrollTextRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Show outline text when section enters viewport (earlier trigger)
                if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
                    setShowOutline(true);
                }

                // Show bold text only when section is centered/scrolled well into view
                if (rect.top < windowHeight * 0.2 && rect.bottom > windowHeight * 0.3) {
                    setShowBold(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={classes.heroSection}>
                <div className={classes.heroOverlay}></div>

                {/* New Header inside Hero Section */}
                <header className={classes.heroHeader}>
                    <div className={classes.headerLogo} onClick={() => navigate('/')}>
                        <img src={Logo} alt="CricKonnect Logo" />
                    </div>

                    {/* Desktop Navigation */}
                    <nav className={classes.headerNav}>
                        <Link to="/matches">Matches</Link>
                        <Link to="/tournaments">Tournaments</Link>
                        <Link to="/blog">The Nightwatchman Notes</Link>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className={classes.hamburger}
                        onClick={() => setMobileMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <MenuOutlined />
                    </button>
                </header>

                {/* Mobile Menu Drawer */}
                <Drawer
                    placement="right"
                    onClose={() => setMobileMenuOpen(false)}
                    open={mobileMenuOpen}
                    className={classes.mobileDrawer}
                    closeIcon={<CloseOutlined style={{ color: '#ffffff' }} />}
                    styles={{
                        body: {
                            background: 'rgba(0, 0, 0, 0.95)',
                            padding: 0
                        },
                        header: {
                            background: 'rgba(0, 0, 0, 0.95)',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                        }
                    }}
                >
                    <Menu
                        mode="inline"
                        className={classes.mobileMenu}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <Menu.Item key="matches">
                            <Link to="/matches">Matches</Link>
                        </Menu.Item>
                        <Menu.Item key="tournaments">
                            <Link to="/tournaments">Tournaments</Link>
                        </Menu.Item>
                        <Menu.Item key="blog">
                            <Link to="/blog">Blog</Link>
                        </Menu.Item>
                    </Menu>
                </Drawer>

                <div className={classes.heroContent}>
                    <div className={classes.heroText}>
                        <h1 className={classes.heroTitle}>
                            Cricket,<br />
                            <span className={classes.heroSubtitle}>without<br />the chaos.</span>
                        </h1>
                    </div>
                    <div className={classes.heroDescription}>
                        <p>Match booking and team management made simple, powerful, and organized.
                            Built for captains who want complete control of their game.</p>
                    </div>
                </div>
            </div>

            {/* Move to Zero Section */}
            <section className={classes.moveToZeroSection}>
                {/* <SubtleParticles count={20} /> */}
                <div className={classes.moveContainer}>
                    <div className={classes.moveHeader}>
                        <h2 className={classes.moveTitle}>LEAD WITH CLARITY</h2>
                        <p className={classes.moveSubtext}>
                           Captains shouldn’t have to run everything alone. Crickonnect becomes your team’s manager — organizing matches, tracking team activity, and bringing structure to tournaments, so you can focus on leading, not coordinating.
                        </p>
                    </div>

                    {/* <div className={classes.pathSection}>
                        <h3 className={classes.pathTitle}>OUR PATH TO BETTER CRICKET</h3>
                        <p className={classes.pathText}>
                            Cricket thrives on passion, but coordination holds it back.
                            We’re fixing that.
                            From match requests to tournament entries, we’re building a simple, connected system that supports captains, empowers teams, and strengthens the game from the ground up.
                        </p>
                    </div> */}
                </div>
            </section>

            {/* Hero Card Section */}
            <section className={classes.heroCardSection}>
                <div className={classes.heroCardContainer}>
                    <div className={classes.heroCard2}>
                        <div className={classes.heroCardOverlay}></div>
                        <div className={classes.heroCardContent}>
                            <h2 className={classes.heroCardTitle}>
                                THE GAME IS BEAUTIFUL.<br />
                                <span className={classes.heroCardTitleGray}>THE SYSTEM IS NOT.</span>
                            </h2>
                            <div className={classes.heroCardText}>
                                <p>
                                    Grassroots cricket runs on passion, but match booking is still unorganized.
                                    Captains chase opponents across scattered chats.
                                    Teams wait without clear timings.
                                    Tournaments appear randomly with no structure.
                                </p>
                                <p className={classes.heroCardHighlight}>
                                    Crickonnect brings order to the chaos — so captains can focus on the game, not the coordination.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scroll Animation Text Section */}
            <section className={classes.scrollTextSection} ref={scrollTextRef}>
                <div className={classes.scrollTextContainer}>
                    <div className={`${classes.outlineText} ${showOutline ? classes.visible : ''}`} data-text="Lead Your">
                        Lead Your
                    </div>
                    <div className={`${classes.boldText} ${showBold ? classes.visible : ''}`}>
                        Team
                    </div>
                </div>
            </section>

            {/* Feature Cards Section */}
            <section className={classes.cardsSection}>
                <div className={classes.redStripe}></div>
                <div className={classes.cardsContainer}>
                    <h2 className={classes.cardsMainTitle}>
                        CRICKONNECT GIVES YOUR TEAM THE EDGE
                    </h2>

                    <div className={classes.cardsGrid}>
                        {/* Card 1 */}
                        <div className={classes.card}>
                            <div className={classes.cardIcon}>
                                <IoCalendarOutline />
                            </div>
                            <h3 className={classes.cardTitle}>Match Booking Made Easy</h3>
                            <p className={classes.cardDescription}>
                                Request, accept or schedule matches instantly — no more scattered chats.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className={classes.card}>
                            <div className={classes.cardIcon}>
                                <HiOutlineUserGroup />
                            </div>
                            <h3 className={classes.cardTitle}>Your Team, Organized</h3>
                            <p className={classes.cardDescription}>
                                Keep your team connected and organized with a clean, unified team space.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className={classes.card}>
                            <div className={classes.cardIcon}>
                                <GiTrophy />
                            </div>
                            <h3 className={classes.cardTitle}>Tournaments Without Confusion</h3>
                            <p className={classes.cardDescription}>
                                Find tournaments, join instantly, or create your own with structured clarity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promotional Cards Section */}
            <section className={classes.promoSection}>
                <div className={classes.promoContainer}>
                    {/* Promo Card 1 */}
                    <div className={classes.promoCard}>
                        <div className={classes.promoContent}>
                            <h2 className={classes.promoTitle}>Matches, Made Simple</h2>
                            <p className={classes.promoText}>
                          See how Crickonnect organizes match requests between teams with clean structure, clear visibility, and zero confusion.
                            </p>
                            <button className={classes.promoButton} onClick={() => navigate('/matches')}>Explore</button>
                        </div>
                        <div className={classes.promoImage}>
                            <img src={Ground} alt="Cricket match booking - organized ground scheduling and team management" />
                        </div>
                    </div>

                    {/* Promo Card 2 */}
                    <div className={classes.promoCard}>
                        <div className={classes.promoImage}>
                            <img src={Ground} alt="Cricket tournament management - automated fixtures and tournament organization" />
                        </div>
                        <div className={classes.promoContent}>
                            <h2 className={classes.promoTitle}>Where Tournaments Take Shape</h2>
                            <p className={classes.promoText}>
                            Crickonnect brings order to grassroots tournaments with automated fixtures, organized schedules, and transparent entries — everything teams need to compete without confusion.
                            </p>
                            <button className={classes.promoButton} onClick={() => navigate('/tournaments')}>Explore</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home