import React, { useState, useEffect } from 'react';
import * as classes from './threecat.module.scss'
import { FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import { fetchGrounds, Bookground } from '../../services/services';
import Customloader from '../Elements/Customloader';
import { navigate } from 'gatsby';
import { IoLocationOutline } from "react-icons/io5";


function Matches() {


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

    const teamId = localStorage.getItem('teamId');

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
    const handleBookingConfirm = async () => {
        if (!selectedDate || !selectedTime) {
            alert("Please select both date and time.");
            return;
        }

        if (!teamId) {
            alert("No team found. Please create a team first.");
            navigate('/my-team');
            return;
        }

        try {
            const bookingData = {
                bookedDate: selectedDate,
                timeSlot: selectedTime,
                bookedByTeam: teamId,
                groundId: selectedGround._id // Assuming ground has _id
            };

            const response = await Bookground(bookingData);

            if (response.data) {
                alert("Booking confirmed successfully!");
                setShowModal(false);
                // Optionally refresh the grounds list
                fetchGroundsForLocation(selectedCity);
            }
        } catch (error) {
            console.error('Booking error:', error);
            alert(error.response?.data?.message || "Failed to book ground. Please try again.");
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

                        <div className={classes.inputcon}>
                            <label className="labeltxt">Date</label>
                            <input
                                type="date"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className={classes.input}
                            />
                        </div>

                        <div className={classes.inputcon}>
                            <label className="labeltxt">Time Slot</label>
                            <select
                                className={classes.select}
                                value={selectedTime}
                                onChange={(e) => setSelectedTime(e.target.value)}
                            >
                                <option value="">Select Time Slot</option>
                                <option value="morning">Morning</option>
                                <option value="afternoon">Afternoon</option>
                            </select>
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