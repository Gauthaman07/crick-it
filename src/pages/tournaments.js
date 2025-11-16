import React from 'react'
import * as classes from './tournaments.module.scss'
import Navbar from '../components/Navbar/Navbar'
import HeroImage from '../images/gp.jpg'
import SEO from '../components/SEO/SEO'
import { serviceSchema, breadcrumbSchema } from '../utils/schema'

function TournamentsPage() {
    return (
        <div className={classes.tournamentsPage}>
            <Navbar />

            <div className={classes.tournamentsHero}>
                <div className={classes.heroBackground}>
                    <img src={HeroImage} alt="Cricket Tournament" />
                </div>
                <div className={classes.glassContainer}>
                    <h1 className={classes.tournamentsTitle}>Tournaments, Rebuilt for Real Cricket</h1>
                    <p className={classes.tournamentsSubtitle}>
                        Grassroots tournaments are exciting — but the way they're organized isn't. Crickonnect brings structure, fairness, and automated fixtures that take the chaos out of tournament play.
                    </p>
                </div>
            </div>

            {/* Problems Section */}
            <section className={classes.problemsSection}>
                <div className={classes.problemsContainer}>
                    <h2 className={classes.problemsTitle}>The Problems Every Tournament Faces</h2>

                    <div className={classes.problemsGrid}>
                        <div className={classes.problemItem}>
                            <div className={classes.problemDiagonal}></div>
                            <div className={classes.problemCircle}>1</div>
                            <h3 className={classes.problemItemTitle}>Unclear Registrations</h3>
                            <p className={classes.problemItemText}>
                                Teams don't know where to register or how many slots are left.
                            </p>
                        </div>

                        <div className={classes.problemItem}>
                            <div className={classes.problemDiagonal}></div>
                            <div className={classes.problemCircle}>2</div>
                            <h3 className={classes.problemItemTitle}>Manual Fixtures That Break</h3>
                            <p className={classes.problemItemText}>
                                Organizers use random PDFs, group chats, Excel files, or hand-written fixtures that cause conflicts.
                            </p>
                        </div>

                        <div className={classes.problemItem}>
                            <div className={classes.problemDiagonal}></div>
                            <div className={classes.problemCircle}>3</div>
                            <h3 className={classes.problemItemTitle}>No Transparent Structure</h3>
                            <p className={classes.problemItemText}>
                                Teams don't see brackets, formats, or how progression works.
                            </p>
                        </div>

                        <div className={classes.problemItem}>
                            <div className={classes.problemDiagonal}></div>
                            <div className={classes.problemCircle}>4</div>
                            <h3 className={classes.problemItemTitle}>Delayed Updates</h3>
                            <p className={classes.problemItemText}>
                                Scores, next matches, and results arrive late or not at all.
                            </p>
                        </div>

                        <div className={classes.problemItem}>
                            <div className={classes.problemDiagonal}></div>
                            <div className={classes.problemCircle}>5</div>
                            <h3 className={classes.problemItemTitle}>Zero Match Flow</h3>
                            <p className={classes.problemItemText}>
                                Teams don't know who plays next, which leads to delays, arguments, and chaos on match day.
                            </p>
                        </div>

                        <div className={classes.problemItem}>
                            <div className={classes.problemDiagonal}></div>
                            <div className={classes.problemCircle}>6</div>
                            <h3 className={classes.problemItemTitle}>Miscommunication Everywhere</h3>
                            <p className={classes.problemItemText}>
                                Because nothing is centralized, everything gets lost in groups.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section - Timeline Style */}
            <section className={classes.solutionSection}>
                <div className={classes.solutionContainer}>
                    <h2 className={classes.solutionMainTitle}>How Crickonnect Fixes the Tournament Mess</h2>

                    <div className={classes.timelineWrapper}>
                        <div className={classes.timelineLine}></div>

                        <div className={classes.timelineItem}>
                            <div className={classes.timelineCircle}>1</div>
                            <div className={classes.timelineContent}>
                                <h3 className={classes.timelineTitle}>Automated Fixtures — The Game Changer</h3>
                                <p className={classes.timelineText}>
                                    Crickonnect builds tournament fixtures automatically, based on: number of teams, format (knockout, league, hybrid), schedule, and rounds.
                                </p>
                                <p className={classes.timelineHighlight}>
                                    No manual errors. No broken brackets. No delays. In seconds, everything aligns.
                                </p>
                            </div>
                        </div>

                        <div className={classes.timelineItem}>
                            <div className={classes.timelineCircle}>2</div>
                            <div className={classes.timelineContent}>
                                <h3 className={classes.timelineTitle}>Transparent Structure for Every Team</h3>
                                <p className={classes.timelineText}>
                                    Teams see the entire bracket, rounds, and match path upfront.
                                </p>
                                <p className={classes.timelineHighlight}>
                                    No confusion. No surprises.
                                </p>
                            </div>
                        </div>

                        <div className={classes.timelineItem}>
                            <div className={classes.timelineCircle}>3</div>
                            <div className={classes.timelineContent}>
                                <h3 className={classes.timelineTitle}>Clean Registration System</h3>
                                <p className={classes.timelineText}>
                                    Teams enter the tournament cleanly, with accurate slots and confirmation.
                                </p>
                            </div>
                        </div>

                        <div className={classes.timelineItem}>
                            <div className={classes.timelineCircle}>4</div>
                            <div className={classes.timelineContent}>
                                <h3 className={classes.timelineTitle}>Live Tournament Flow</h3>
                                <p className={classes.timelineText}>
                                    Teams know: match timings, who they face next, results, and round progression.
                                </p>
                                <p className={classes.timelineHighlight}>
                                    Everything updates instantly.
                                </p>
                            </div>
                        </div>

                        <div className={classes.timelineItem}>
                            <div className={classes.timelineCircle}>5</div>
                            <div className={classes.timelineContent}>
                                <h3 className={classes.timelineTitle}>Organizers Stay in Control</h3>
                                <p className={classes.timelineText}>
                                    No need for spreadsheets. No need for messaging groups. Crickonnect manages: fixtures, scheduling, flow, updates, and visibility.
                                </p>
                                <p className={classes.timelineHighlight}>
                                    Organizers become efficient. Captains stay informed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hype Section */}
            <section className={classes.hypeSection}>
                <div className={classes.hypeContainer}>
                    <div className={classes.hypeContent}>
                        <h2 className={classes.hypeTitle}>Why Automated Fixtures Matter</h2>
                        <div className={classes.hypeReasons}>
                            <p className={classes.hypeReason}>Because manual fixtures break tournaments.</p>
                            <p className={classes.hypeReason}>Because one mistake ruins entire brackets.</p>
                            <p className={classes.hypeReason}>Because teams deserve fairness, clarity, and structure.</p>
                        </div>
                    </div>
                    <div className={classes.hypeImpact}>
                        <h3 className={classes.hypeImpactTitle}>Crickonnect's auto-fixture engine eliminates:</h3>
                        <ul className={classes.hypeList}>
                            <li>Match conflicts</li>
                            <li>Wrong matchups</li>
                            <li>Human errors</li>
                            <li>Confusion on match day</li>
                        </ul>
                        <div className={classes.hypeStatement}>
                            <p>This is fair cricket.</p>
                            <p>This is organized cricket.</p>
                            <p>This is tournament cricket done right.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className={classes.howItWorksSection}>
                <div className={classes.howItWorksContainer}>
                    <h2 className={classes.howItWorksTitle}>How Tournaments Work in Crickonnect</h2>

                    <div className={classes.stepsWrapper}>
                        <div className={classes.stepBox}>
                            <div className={classes.stepBgNumber}>1</div>
                            <div className={classes.stepContentWrapper}>
                                <h3 className={classes.stepBoxTitle}>Set Tournament Format</h3>
                                <p className={classes.stepBoxText}>
                                    Choose type, teams, rounds, sessions.
                                </p>
                            </div>
                        </div>

                        <div className={classes.stepBox}>
                            <div className={classes.stepBgNumber}>2</div>
                            <div className={classes.stepContentWrapper}>
                                <h3 className={classes.stepBoxTitle}>Auto-Fix Everything</h3>
                                <p className={classes.stepBoxText}>
                                    Fixtures, brackets, schedules — all generated instantly.
                                </p>
                            </div>
                        </div>

                        <div className={classes.stepBox}>
                            <div className={classes.stepBgNumber}>3</div>
                            <div className={classes.stepContentWrapper}>
                                <h3 className={classes.stepBoxTitle}>Track Live Progress</h3>
                                <p className={classes.stepBoxText}>
                                    Teams follow updates, results, and next rounds without confusion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TournamentsPage

export const Head = () => {
    const tournamentServiceSchema = serviceSchema({
        name: "Cricket Tournament Management",
        description: "Organize cricket tournaments with automated fixtures, transparent structures, and live tournament flow. Built for grassroots tournaments."
    })

    const breadcrumbs = breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Tournaments", url: "/tournaments" }
    ])

    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [tournamentServiceSchema, breadcrumbs]
    }

    return (
        <SEO
            title="Cricket Tournament Management - Automated Fixtures | Crickonnect"
            description="Organize grassroots cricket tournaments with automated fixtures, transparent brackets, and live tournament flow. Clean registration system with instant updates for all teams."
            keywords="cricket tournament management, cricket tournament organization, automated cricket fixtures, cricket tournament brackets, cricket tournament registration, grassroots cricket tournament, local cricket tournament"
            url="/tournaments"
            image="/images/og-tournaments.jpg"
            schema={combinedSchema}
        />
    )
}
