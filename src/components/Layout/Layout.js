import React, { useState } from 'react'
import Header from '../Header/Header'
import Locationpop from '../Locationpop/Locationpop'

function Layout({ children }) {

    const [location, setLocation] = useState(localStorage.getItem('selectedCity') || '');

    return (
        <>

            <Header location={location} />

            <main className="layout-main">
                <Locationpop setLocation={setLocation} />
                {children}
            </main>
        </>
    )
}

export default Layout