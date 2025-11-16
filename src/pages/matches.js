import React from 'react'
import * as classes from './matches.module.scss'
import Navbar from '../components/Navbar/Navbar'
import HeroImage from '../images/gp.jpg'
import SEO from '../components/SEO/SEO'
import { serviceSchema, breadcrumbSchema } from '../utils/schema'

function MatchesPage() {
    return (
        <div className={classes.matchesPage}>
            <Navbar />

            <div className={classes.matchesHero}>
                <div className={classes.heroBackground}>
                    <img src={HeroImage} alt="Cricket Ground" />
                </div>
                <div className={classes.glassContainer}>
                    <h1 className={classes.matchesTitle}>Where Matches Begin</h1>
                    <p className={classes.matchesSubtitle}>
                       In a game shaped by open fields and uncertain plans, Crickonnect brings rhythm.
A clear day, a chosen session, a request sent with intent — and suddenly, the match finds its form.
                    </p>
                </div>
            </div>

            {/* Problem Section */}
            <section className={classes.problemSection}>
                <div className={classes.problemContainer}>
                    <h2 className={classes.problemTitle}>The Problems Every Captain Knows</h2>

                    <div className={classes.problemGrid}>
                        <div className={classes.problemCard}>
                            <div className={classes.problemNumber}>01</div>
                            <h3 className={classes.problemCardTitle}>Unclear Availability</h3>
                            <p className={classes.problemCardText}>
                                Grounds don't show when they're open or booked.
                            </p>
                        </div>

                        <div className={classes.problemCard}>
                            <div className={classes.problemNumber}>02</div>
                            <h3 className={classes.problemCardTitle}>Endless Chat Messages</h3>
                            <p className={classes.problemCardText}>
                                Captains chase confirmations in scattered WhatsApp groups.
                            </p>
                        </div>

                        <div className={classes.problemCard}>
                            <div className={classes.problemNumber}>03</div>
                            <h3 className={classes.problemCardTitle}>Last-Minute Cancellations</h3>
                            <p className={classes.problemCardText}>
                                No visibility = poor planning.
                            </p>
                        </div>

                        <div className={classes.problemCard}>
                            <div className={classes.problemNumber}>04</div>
                            <h3 className={classes.problemCardTitle}>Unorganized Scheduling</h3>
                            <p className={classes.problemCardText}>
                                No official calendar or slot structure.
                            </p>
                        </div>

                        <div className={classes.problemCard}>
                            <div className={classes.problemNumber}>05</div>
                            <h3 className={classes.problemCardTitle}>Confusion About Who's Playing</h3>
                            <p className={classes.problemCardText}>
                                Opponents change, timings change, nothing is documented.
                            </p>
                        </div>

                        <div className={classes.problemCard}>
                            <div className={classes.problemNumber}>06</div>
                            <h3 className={classes.problemCardTitle}>No Record of Requests</h3>
                            <p className={classes.problemCardText}>
                                Everything disappears in messages — no trail.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className={classes.solutionSection}>
                <div className={classes.solutionContainer}>
                    <div className={classes.solutionHeader}>
                        <h2 className={classes.solutionTitle}>How Crickonnect Solves the Match Chaos</h2>
                    </div>

                    <div className={classes.solutionFeatures}>
                        <div className={classes.featureBlock}>
                            <div className={classes.featureNumber}>1</div>
                            <div className={classes.featureContent}>
                                <h3 className={classes.featureTitle}>Ground Availability, Made Visible</h3>
                                <p className={classes.featureText}>
                                    Ground-owning teams set available dates, sessions (morning/afternoon/evening), and play mode: Hosting or Playing.
                                </p>
                                <p className={classes.featureHighlight}>
                                    Captains no longer guess. They see real, updated availability instantly.
                                </p>
                            </div>
                        </div>

                        <div className={classes.featureBlock}>
                            <div className={classes.featureNumber}>2</div>
                            <div className={classes.featureContent}>
                                <h3 className={classes.featureTitle}>Send Match Requests in One Tap</h3>
                                <p className={classes.featureText}>
                                    Captains choose Date, Session, and Opponent (the ground-owning team).
                                </p>
                                <p className={classes.featureHighlight}>
                                    No messaging. No confusion. Just a clean structured request.
                                </p>
                            </div>
                        </div>

                        <div className={classes.featureBlock}>
                            <div className={classes.featureNumber}>3</div>
                            <div className={classes.featureContent}>
                                <h3 className={classes.featureTitle}>Opponent Accepts → Match is Set</h3>
                                <p className={classes.featureText}>
                                    The ground-owning team accepts inside their panel. Once accepted: Both teams get confirmation, match goes to the calendar, notifications are sent.
                                </p>
                                <p className={classes.featureHighlight}>
                                    Clear. Fast. Traceable.
                                </p>
                            </div>
                        </div>

                        <div className={classes.featureBlock}>
                            <div className={classes.featureNumber}>4</div>
                            <div className={classes.featureContent}>
                                <h3 className={classes.featureTitle}>Hosting Mode: Let Two Other Teams Play</h3>
                                <p className={classes.featureText}>
                                    If a ground-owning team chooses Hosting Mode: They won't play. Two external teams can request the same slot. The ground owner approves the match.
                                </p>
                                <p className={classes.featureHighlight}>
                                    More matches happen. More cricket is played. Grounds stay active.
                                </p>
                            </div>
                        </div>

                        <div className={classes.featureBlock}>
                            <div className={classes.featureNumber}>5</div>
                            <div className={classes.featureContent}>
                                <h3 className={classes.featureTitle}>Automatic Slot Locking</h3>
                                <p className={classes.featureText}>
                                    Once a match is accepted: That date & session is locked. No double-booking. No overlap. No confusion.
                                </p>
                                <p className={classes.featureHighlight}>
                                    Captains see accurate real-time availability always.
                                </p>
                            </div>
                        </div>

                        <div className={classes.featureBlock}>
                            <div className={classes.featureNumber}>6</div>
                            <div className={classes.featureContent}>
                                <h3 className={classes.featureTitle}>Prior Notifications & Reminders</h3>
                                <p className={classes.featureText}>
                                    Teams receive match confirmation, reminders, slot updates, cancellations (if any), and change notifications.
                                </p>
                                <p className={classes.featureHighlight}>
                                    Everything the messaging-world fails at.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className={classes.howItWorksSection}>
                <div className={classes.howItWorksContainer}>
                    <h2 className={classes.howItWorksTitle}>How It Works</h2>

                    <div className={classes.stepsGrid}>
                        <div className={classes.stepCard}>
                            <div className={classes.stepNumber}>1</div>
                            <h3 className={classes.stepTitle}>Choose Date & Session</h3>
                            <p className={classes.stepText}>
                                Captains see ground availability and select their preferred time slot.
                            </p>
                        </div>

                        <div className={classes.stepArrow}>→</div>

                        <div className={classes.stepCard}>
                            <div className={classes.stepNumber}>2</div>
                            <h3 className={classes.stepTitle}>Send Match Request</h3>
                            <p className={classes.stepText}>
                                Select opponent, review details, and send a structured request.
                            </p>
                        </div>

                        <div className={classes.stepArrow}>→</div>

                        <div className={classes.stepCard}>
                            <div className={classes.stepNumber}>3</div>
                            <h3 className={classes.stepTitle}>Opponent Accepts → Match Booked</h3>
                            <p className={classes.stepText}>
                                Automatic calendar update + notifications sent to both teams.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MatchesPage

export const Head = () => {
    const matchServiceSchema = serviceSchema({
        name: "Cricket Match Booking",
        description: "Find and book cricket matches with teams in your area. Request, accept, or schedule matches instantly with organized match booking system."
    })

    const breadcrumbs = breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Matches", url: "/matches" }
    ])

    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [matchServiceSchema, breadcrumbs]
    }

    return (
        <SEO
            title="Cricket Match Booking - Find & Schedule Matches | Crickonnect"
            description="Connect with cricket teams in your area. Request, accept, or schedule matches instantly with Crickonnect's organized match booking system. Ground availability made visible with automatic slot locking."
            keywords="cricket match booking, book cricket match, cricket ground availability, schedule cricket match, cricket match requests, cricket ground booking, local cricket matches, cricket team finder"
            url="/matches"
            image="/images/og-matches.jpg"
            schema={combinedSchema}
        />
    )
}
