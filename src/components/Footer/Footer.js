import React from 'react'
import * as classes from './footer.module.scss'
import { InstagramOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <>
            <div className={classes.footer}>
                {/* <div className={classes.btop}></div> */}
                <div className={classes.dfooter}>

                    <div>
                        <p>Grounds</p>
                        <p>Tournaments</p>
                        <p>Book matches</p>

                    </div>
                    <div>
                        <p>Contact us</p>
                        <p>Blogs</p>

                    </div>
                    <div>
                        <p>Privacy policy</p>
                        <p>Terms of service</p>
                    </div>
                    <div>
                        <p>Follow us on</p>
                        <a href="https://www.instagram.com/cric_konnect_?igsh=MWhrZHZnMDRkaWE4OA==" target="_blank" rel="noopener noreferrer">
                    <InstagramOutlined style={{ fontSize: '32px', color: '#E1306C' }} />
                </a>
                    </div>

                </div>


                <div>

                    <div className={classes.bbottom}></div>
                    <p className={classes.copyright}>
                        Crickonnect 2025. All Rights
                        Reserved.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Footer