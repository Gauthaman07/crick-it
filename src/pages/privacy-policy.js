import React from 'react'
import * as classes from './privacy-policy.module.scss'
import Navbar from '../components/Navbar/Navbar'
import SEO from '../components/SEO/SEO'
import { breadcrumbSchema } from '../utils/schema'

function PrivacyPolicyPage() {
    return (
        <div className={classes.policyPage}>
            <Navbar />

            <div className={classes.policyContent}>
                <div className={classes.policyContainer}>
                    <h1 className={classes.policyTitle}>Privacy Policy</h1>
                    <p className={classes.lastUpdated}>Last Updated: January 2025</p>

                    <section className={classes.policySection}>
                        <h2>1. Introduction</h2>
                        <p>
                            Welcome to Crickonnect. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                        </p>
                    </section>

                    <section className={classes.policySection}>
                        <h2>2. Information We Collect</h2>
                        <p>We collect information that you provide directly to us, including:</p>
                        <ul>
                            <li>Name and contact information</li>
                            <li>Team and player details</li>
                            <li>Match booking and tournament information</li>
                            <li>Communication preferences</li>
                        </ul>
                    </section>

                    <section className={classes.policySection}>
                        <h2>3. How We Use Your Information</h2>
                        <p>We use the information we collect to:</p>
                        <ul>
                            <li>Provide and maintain our services</li>
                            <li>Process match bookings and tournament registrations</li>
                            <li>Send you notifications and updates</li>
                            <li>Improve our platform and user experience</li>
                        </ul>
                    </section>

                    <section className={classes.policySection}>
                        <h2>4. Data Security</h2>
                        <p>
                            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section className={classes.policySection}>
                        <h2>5. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at:{' '}
                            <a href="mailto:contact@crickonnect.com">contact@crickonnect.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicyPage

export const Head = () => {
    const breadcrumbs = breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Privacy Policy", url: "/privacy-policy" }
    ])

    return (
        <SEO
            title="Privacy Policy | Crickonnect"
            description="Learn how Crickonnect collects, uses, and protects your personal information. Read our privacy policy for cricket match booking and team management platform."
            keywords="privacy policy, data protection, cricket app privacy, user data security"
            url="/privacy-policy"
            schema={breadcrumbs}
        />
    )
}
