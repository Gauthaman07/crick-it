import React from 'react'
import * as classes from './downloadAppBanner.module.scss'

function DownloadAppBanner() {
    return (
        <div className={classes.appBannerWrapper}>
            <div className={classes.appBannerContainer}>
                <h2 className={classes.appBannerTitle}>
                    DOWNLOAD THE OFFICIAL CRICKONNECT APP
                </h2>
                <div className={classes.appStoreButtons}>
                    <a
                        href="#"
                        className={classes.appStoreLink}
                        aria-label="Download on the App Store"
                    >
                        <img
                            src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
                            alt="Download on the App Store"
                            className={classes.appStoreImage}
                        />
                    </a>
                    <a
                        href="#"
                        className={classes.appStoreLink}
                        aria-label="Get it on Google Play"
                    >
                        <img
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                            alt="Get it on Google Play"
                            className={classes.playStoreImage}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DownloadAppBanner
