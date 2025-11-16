import React from 'react'
import * as classes from './downloadapp.module.scss'

function DownloadApp() {
    return (
        <section className={classes.downloadAppSection}>
            <div className={classes.downloadAppContainer}>
                <h2 className={classes.downloadAppTitle}>
                    DOWNLOAD THE OFFICIAL CRICKONNECT APP
                </h2>
                <div className={classes.appButtons}>
                    <a
                        href="#"
                        className={classes.appButton}
                        aria-label="Download on the App Store"
                    >
                        <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="Download on the App Store"
                        />
                    </a>
                    <a
                        href="#"
                        className={classes.appButton}
                        aria-label="Get it on Google Play"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Get it on Google Play"
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default DownloadApp
