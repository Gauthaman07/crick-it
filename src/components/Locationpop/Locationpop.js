import React, { useState, useEffect } from 'react'
import * as classes from './locationpop.module.scss'


function Locationpop() {

    const [selectedCity, setSelectedCity] = useState('');
    const [location, setLocation] = useState();


    useEffect(() => {

        const savedLocation = localStorage.getItem('selectedCity');
        if (savedLocation) {
            setSelectedCity(savedLocation);
            setLocation(savedLocation);
        }
    }, [setLocation]);

    const handleChange = (event) => {
        const city = event.target.value;
        setSelectedCity(city);
        setLocation(city);
        localStorage.setItem('selectedCity', city);
        window.location.reload()
    };

    if (!selectedCity) {
        return (
            <>
                <div className={classes.lcncon}>
                    <div className={classes.lcn}>
                        <h1>Select Your Location</h1>
                        <div>
                            <select
                                id="city"
                                value={selectedCity}
                                onChange={handleChange}
                                className={classes.cityDropdown}
                            >
                                <option value="" disabled>Select a city</option>
                                <option value="Tirupur">Tirupur</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Salem">Salem</option>
                                <option value="Dindigul">Dindigul</option>
                            </select>
                        </div>
                    </div>
                </div>
            </>
        )
        return null;
    }
}

export default Locationpop