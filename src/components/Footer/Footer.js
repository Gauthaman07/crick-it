import React from 'react'
import * as classes from './footer.module.scss'
import { InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Link } from 'gatsby';

function Footer() {
    return (
        <>
            <div className={classes.footer}>
                {/* <div className={classes.btop}></div> */}
                <div className={classes.dfooter}>

                    <div>
                        <Link to="/matches"><p>Grounds</p></Link>
                        <Link to="/tournaments"><p>Tournaments</p></Link>


                    </div>
                    <div>
                        <a href="mailto:contact@crickonnect.com"><p>Contact us</p></a>
                        <Link to="/blog"><p>The Nightwatchman Notes</p></Link>

                    </div>
                    <div>
                        <Link to="/privacy-policy"><p>Privacy policy</p></Link>
                        <Link to="/terms-of-service"><p>Terms of service</p></Link>
                    </div>
                    <div>
                        <p>Follow us on</p>
                        <div className={classes.socialIcons}>
                            <a href="https://www.instagram.com/cric_konnect_?igsh=MWhrZHZnMDRkaWE4OA==" target="_blank" rel="noopener noreferrer">
                                <InstagramOutlined style={{ fontSize: '32px', color: '#E1306C' }} />
                            </a>
                            <a href="https://www.youtube.com/@Crick_connect10" target="_blank" rel="noopener noreferrer">
                                <YoutubeOutlined style={{ fontSize: '32px', color: '#FF0000' }} />
                            </a>
                        </div>
                    </div>

                </div>


                <div>

                    <div className={classes.bbottom}></div>
                    <p className={classes.copyright}>
                       ©
 Crickonnect 2025. All Rights
                        Reserved.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Footer