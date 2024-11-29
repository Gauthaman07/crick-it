import React, { useState, useEffect } from 'react'
import * as classes from './locationpop.module.scss'


const Locationpop = () => {
    const [selectedCity, setSelectedCity] = useState('');
    const [location, setLocation] = useState('');

    // Retrieve saved location from localStorage on component mount
    useEffect(() => {
        const savedLocation = localStorage.getItem('selectedCity');
        if (savedLocation) {
            setSelectedCity(savedLocation);
            setLocation(savedLocation);
        }
    }, []);

    // Handle city selection
    const handleChange = (event) => {
        const city = event.target.value;
        setSelectedCity(city);
        setLocation(city);

        // Save selected city to localStorage
        localStorage.setItem('selectedCity', city);
    };

    // If no city is selected, display the location selection dropdown
    if (!selectedCity) {
        return (
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
                            <option value="" disabled>
                                Select a city
                            </option>
                            <option value="Tirupur">Tirupur</option>
                            <option value="Coimbatore">Coimbatore</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Salem">Salem</option>
                            <option value="Dindigul">Dindigul</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }

    // If a city is selected, return null (or optionally return a success message)
    return null;
};

export default Locationpop;