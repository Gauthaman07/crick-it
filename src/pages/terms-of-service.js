import React from 'react'
import * as classes from './privacy-policy.module.scss'
import Navbar from '../components/Navbar/Navbar'
import SEO from '../components/SEO/SEO'
import { breadcrumbSchema } from '../utils/schema'

function TermsOfServicePage() {
    return (
        <div className={classes.policyPage}>
            <Navbar />

            <div className={classes.policyContent}>
                <div className={classes.policyContainer}>
                    <h1 className={classes.policyTitle}>Terms of Service</h1>
                    <p className={classes.lastUpdated}>Last Updated: January 2025</p>

                    <section className={classes.policySection}>
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using Crickonnect, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our platform.
                        </p>
                    </section>

                    <section className={classes.policySection}>
                        <h2>2. Use of Service</h2>
                        <p>Our platform provides cricket match booking and tournament management services. You agree to:</p>
                        <ul>
                            <li>Provide accurate and complete information</li>
                            <li>Maintain the security of your account</li>
                            <li>Use the service in compliance with all applicable laws</li>
                            <li>Respect other users and teams on the platform</li>
                        </ul>
                    </section>

                    <section className={classes.policySection}>
                        <h2>3. Match Bookings and Tournaments</h2>
                        <p>
                            When booking matches or registering for tournaments, you agree to honor your commitments. Cancellations should be made in accordance with our cancellation policy to ensure fairness to all teams.
                        </p>
                    </section>

                    <section className={classes.policySection}>
                        <h2>4. User Conduct</h2>
                        <p>You agree not to:</p>
                        <ul>
                            <li>Post false, misleading, or inappropriate content</li>
                            <li>Harass, abuse, or harm other users</li>
                            <li>Attempt to gain unauthorized access to the platform</li>
                            <li>Use the service for any illegal purposes</li>
                        </ul>
                    </section>

                    <section className={classes.policySection}>
                        <h2>5. Limitation of Liability</h2>
                        <p>
                            Crickonnect provides a platform for cricket teams to connect and organize matches. We are not responsible for disputes between teams, match outcomes, or issues arising from bookings made through our platform.
                        </p>
                    </section>

                    <section className={classes.policySection}>
                        <h2>6. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. We will notify users of any material changes. Your continued use of the platform after such changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section className={classes.policySection}>
                        <h2>7. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us at:{' '}
                            <a href="mailto:contact@crickonnect.com">contact@crickonnect.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default TermsOfServicePage

export const Head = () => {
    const breadcrumbs = breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Terms of Service", url: "/terms-of-service" }
    ])

    return (
        <SEO
            title="Terms of Service | Crickonnect"
            description="Read Crickonnect's terms of service for cricket match booking and tournament management. Understand user responsibilities and platform guidelines."
            keywords="terms of service, user agreement, cricket platform terms, service conditions"
            url="/terms-of-service"
            schema={breadcrumbs}
        />
    )
}
