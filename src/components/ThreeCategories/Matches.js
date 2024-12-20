import React, { useState, useEffect } from 'react';
import * as classes from './threecat.module.scss'
import { FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import { fetchGrounds } from '../../services/services';
import Customloader from '../Elements/Customloader';
import { navigate } from 'gatsby';
import { IoLocationOutline } from "react-icons/io5";


function Matches() {
    // const groundsData = [
    //     { id: 1, name: "Tirupur Cricket Ground", location: "Tirupur", facilities: "Parking, Changing Rooms, Spectator Seating", fees: 2000, imageUrl: "https://th.bing.com/th/id/OIP.RuXG2qVx5hnhEU-ig0DDHgHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    //     { id: 2, name: "Coimbatore Sports Arena", location: "Coimbatore", facilities: "Floodlights, Parking, Canteen", fees: 2500, imageUrl: "https://th.bing.com/th/id/OIP.Q8i9LdUuD1HFjF94-kV-cQHaFj?w=220&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    //     { id: 3, name: "Chennai Open Ground", location: "Chennai", facilities: "Restrooms, Parking, Seating", fees: 1800, imageUrl: "https://th.bing.com/th/id/OIP.IRRc2W5XkOEYdZ1ECPi06wHaEF?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    // ];

    const [selectedGround, setSelectedGround] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [showModal, setShowModal] = useState(false);



    const [groundsData, setGroundsData] = useState([]);
    const [myGround, setmyGround] = useState();
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedCity, setSelectedCity] = useState('Tirupur');


   
    const handleBookClick = (ground) => {
        setSelectedGround(ground);
        setShowModal(true);
    };

    const locations = ['Tirupur', 'Coimbatore', 'Chennai', 'Salem', 'Dindigul']; 

    useEffect(() => {
        if (selectedCity) {
            fetchGroundsForLocation(selectedCity);
        }
    }, [selectedCity]);

    const fetchGroundsForLocation = async (location) => {
        try {
            setLoading(true);
            setError(''); 
            const response = await fetchGrounds(location);
            console.log('API Response:', response.data); 

            if (
                (response.data?.grounds && response.data.grounds.length > 0) ||
                (response.data?.otherGrounds && response.data.otherGrounds.length > 0)
            ) {
                setGroundsData(response.data.grounds || response.data.otherGrounds);
            } else {
                setGroundsData([]);
                setError('No grounds available for the selected location.');
            }
        } catch (err) {
            console.error('API Error:', err); 
            setError(err.response?.data?.message || 'Failed to fetch grounds.');
            setGroundsData([]);
        } finally {
            setLoading(false); 
        }
    };


    const handleLocationChange = (event) => {
        setSelectedCity(event.target.value);
    };
    // Confirm booking and save to local storage
    const handleBookingConfirm = () => {
        if (selectedDate && selectedTime) {
            const bookingDetails = {
                ground: selectedGround,
                date: selectedDate,
                time: selectedTime,
            };
            localStorage.setItem('matchBooking', JSON.stringify(bookingDetails));
            alert("Booking confirmed and saved!");
            setShowModal(false);  
        } else {
            alert("Please select a date and time.");
        }
    };

    if (loading) {
        return <Customloader />
    }

    if (error) {
     
        if (error === "You are not logged in. Please log in to continue.") {
            return (
                <div className="error-container">
                    <div className="error-message">
                        <h3>Oops!</h3>
                        <p>You are not logged in. Please log in to continue.</p>
                        <button style={{ width: "240px" }} className="ipbtn" onClick={() => (navigate('/login'))}>
                            Go to Login
                        </button>
                    </div>
                </div>
            );
        } else if (error === "User has not created a team yet.") {
            return (
                <div className="error-container">
                    <div className="error-message">
                        <h3>Uh-oh!</h3>
                        <p>You haven't created a team yet. Please create your team to continue.</p>
                        <button style={{ width: "240px" }} className="ipbtn" onClick={() => (navigate('/my-team/'))}>
                            Create Team
                        </button>
                    </div>
                </div>
            );
        }
    }


    return (
        <div className={classes.bookingContainer}>


           


            {/* <h2 className={classes.title}>Book a Ground for Your Game !</h2> */}

          


            <div className={classes.locationSelector}>
                <p>{`${groundsData.length} Grounds Available in `}</p>
                {/* <label htmlFor="location">Select Location:</label> */}
                <select
                    id="location"
                    value={selectedCity}
                    onChange={handleLocationChange}
                    className={classes.locationst}
                >
                    <option value="" disabled>
                        -- Select a City --
                    </option>
                    {locations.map((location) => (
                        <option key={location} value={location}>
                            {location}
                        </option>
                    ))}
                </select>
            </div>

            <div className={classes.groundsList}>
                {groundsData.length > 0 ? (
                    groundsData.map((ground) => (
                        <div key={ground._id} className={classes.groundCard}>
                            <div className={classes.imageContainer}>
                                <img
                                    src={ground.image || '/default-image.jpg'}
                                    alt={ground.groundName || 'Ground'}
                                    className={classes.groundImage}
                                />
                            </div>
                            <div className={classes.detailsContainer}>
                                <h3 className={classes.groundName}>{ground.groundName || 'Ground'}</h3>
                                <p>
                                    <FaClipboardList />{' '}
                                    {ground.facilities?.join(', ') || 'No facilities listed'}
                                </p>
                                <a
                                    href={ground.groundMaplink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IoLocationOutline style={{ width: '20px', height: '20px' }} />{' '}
                                    Get Directions
                                </a>
                                <p>₹{ground.fee || 'Not Specified'}</p>
                                <button
                                    onClick={() => handleBookClick(ground)}
                                    className={classes.bookButton}
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <>
                        <div className="error-container">
                            <div className="error-message">
                                <p>No grounds available for the selected location

                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>




            {/* Booking Modal */}
            {showModal && (
                <div className={classes.modalOverlay}>
                    <div className={classes.modalContent}>
                        <h3>Book {selectedGround.name}</h3>

                        <div className={classes.inputGroup}>
                            <label className="labeltxt">Date</label>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className={classes.input}
                            />
                        </div>

                        <div className={classes.inputGroup}>
                            <label className="labeltxt">Time Slot</label>
                            <input
                                type="time"
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                                className={classes.input}
                            />
                        </div>

                        <div className={classes.modalActions}>
                            <button style={{ backgroundColor: "black", color: "white" }} onClick={handleBookingConfirm} className={classes.popbtn}>
                                Confirm
                            </button>
                            <button style={{ backgroundColor: "#ccc", color: "black" }} onClick={() => setShowModal(false)} className={classes.popbtn}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Matches