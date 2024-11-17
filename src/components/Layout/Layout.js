import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Locationpop from '../Locationpop/Locationpop'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Layout({ children }) {

    const [location, setLocation] = useState('');
    useEffect(() => {
        // Check if we're in the browser environment
        if (typeof window !== 'undefined') {
            const savedLocation = localStorage.getItem('selectedCity');
            if (savedLocation) {
                setLocation(savedLocation);
            }
        }
    }, []);
    return (
        <>

            <Header location={location} />

            <main className="layout-main">
                <Locationpop setLocation={setLocation} />
                {children}
            </main>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
        </>
    )
}

export default Layout