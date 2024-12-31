import React, { useState, useEffect } from 'react';
import * as classes from './threecat.module.scss'
import { FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';
import { fetchGrounds, Bookground, updateBookingStatus } from '../../services/services';
import Customloader from '../Elements/Customloader';
import { navigate } from 'gatsby';
import { IoLocationOutline } from "react-icons/io5";
import { showToast } from '../../utility/utility';



function Matches() {


    const [selectedGround, setSelectedGround] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [teamid, setteamid] = useState();

    const [bookingStatus, setbookingStatus] = useState([]);
    const [groundsData, setGroundsData] = useState([]);
    const [myGround, setmyGround] = useState();
    console.log("myground", myGround);

    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedCity, setSelectedCity] = useState('Tirupur');



    useEffect(() => {
        if (typeof window !== 'undefined') {
            const teamId = localStorage.getItem('teamId');
            setteamid(teamId)
        }
    }, []);

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
            }
            if (response.data?.yourGround) {
                console.log('yourGround:', response.data.yourGround);
                if (Object.keys(response.data.yourGround).length > 0) {
                    setmyGround(response.data.yourGround); // Set valid yourGround data
                    console.log('myGround successfully set.');
                } else {
                    console.log('yourGround is empty.');
                }
            }
            if ((response.data?.userBookings && response.data.userBookings.length > 0)
            ) {
                setbookingStatus(response.data.userBookings)
            }
            else {
                // setGroundsData([]);
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

        // Check if teamId exists
        if (!teamid) {
            alert("No team found. Please create a team first.");
            navigate('/my-team');
            return;
        }

        try {
            const bookingData = {
                bookedDate: selectedDate,
                timeSlot: selectedTime,
                bookedByTeam: teamid, // Changed to team_id to match backend expectation
                groundId: selectedGround._id // Changed to ground_id if that's what backend expects
            };

            console.log('Sending booking data:', bookingData); // Debug log

            const response = await Bookground(bookingData);

            if (response.data) {
                showToast("success", "Booking requested successfully!")
                // alert("Booking confirmed successfully!");
                setShowModal(false);
                // Optionally refresh the grounds list
                // fetchGroundsForLocation(selectedCity);
            }
        } catch (error) {
            console.error('Booking error:', error);
            showToast("error", "Failed to book ground. Please try again.")
            // alert(error.response?.data?.message || "Failed to book ground. Please try again.");
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


    const handleBookingAction = async (bookingId, status) => {
        // Add validation
        if (!bookingId) {
            console.error('No booking ID provided');
            alert('Error: Booking ID is missing');
            return;
        }

        try {
            console.log('Attempting to update booking:', {
                bookingId,
                status
            });

            const response = await updateBookingStatus({
                bookingId,
                status
            });

            if (response.data) {
                alert(`Booking ${status} successfully!`);
                // Refresh the grounds data
                if (selectedCity) {
                    fetchGroundsForLocation(selectedCity);
                }
            }
        } catch (error) {
            console.error('Booking update error:', error);
            alert(error.response?.data?.message || `Failed to ${status} booking. Please try again.`);
        }
    };

    return (


        <>
            <div className='mainsec'>
              

            {myGround && myGround?.pendingBookings?.length > 0 && (
    <div className={classes.notificationPanel}>
        <h2 className={classes.panelTitle}>Booking Requests</h2>
        <div className={classes.notificationCard}>
            <div className={classes.bookingDetails}>
                <h3>{myGround.pendingBookings[0].teamName}</h3>
                <p><strong>Date:</strong> {myGround.pendingBookings[0].date}</p>
                <p><strong>Time Slot:</strong> {myGround.pendingBookings[0].timeSlot}</p>
            </div>
        </div>
     
        <div className={classes.btncon}>
                    <button
                        onClick={() => {
                            // Debug log to check the entire booking object
                            console.log('Full booking object:', myGround.pendingBookings[0]);

                            // Check what ID field is available
                            console.log('Possible IDs:', {
                                _id: myGround.pendingBookings[0]._id,
                                id: myGround.pendingBookings[0].id,
                                bookingId: myGround.pendingBookings[0].bookingId
                            });

                            const bookingId = myGround.pendingBookings[0]._id ||
                                myGround.pendingBookings[0].id ||
                                myGround.pendingBookings[0].bookingId;

                            if (!bookingId) {
                                alert('Booking ID not found!');
                                return;
                            }

                            handleBookingAction(bookingId, 'booked');
                        }}
                    >
                        ACCEPT
                    </button>
                    <button
                        onClick={() => {
                            const bookingId = myGround.pendingBookings[0]._id ||
                                myGround.pendingBookings[0].id ||
                                myGround.pendingBookings[0].bookingId;

                            if (!bookingId) {
                                alert('Booking ID not found!');
                                return;
                            }

                            handleBookingAction(bookingId, 'rejected');
                        }}
                    >
                        REJECT
                    </button>
                </div>

    </div>
)}




                {bookingStatus && bookingStatus.length > 0 && (
                    <div className={classes.notificationPanel}>
                        <h2 className={classes.panelTitle}>Your Booking</h2>

                        {bookingStatus.map((booking, index) => (
                            <div key={index} className={classes.notificationCard}>
                                <div className={classes.bookingDetails}>
                                    <h3>{booking.groundName}</h3>
                                    <p>
                                        {booking.date}
                                    </p>
                                    <p>
                                        {booking.timeSlot}
                                    </p>
                                    <p className={classes.status}>
                                        <span
                                            className={
                                                booking.status === 'booked'
                                                    ? classes.statusBooked
                                                    : classes.statusPending
                                            }
                                        >
                                            {booking.status}
                                        </span>
                                    </p>
                                </div>

                            </div>
                        ))}

                    </div>
                )}




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
                        {groundsData && groundsData.length > 0 ? (
                            groundsData.map((ground) => (
                                <div className={classes.gc} key={ground._id}>
                                    <div className={classes.groundCard}>
                                        <div className={classes.imageContainer}>
                                            <img
                                                src={ground.image || '/default-image.jpg'}
                                                alt={ground.groundName || 'Ground'}
                                                className={classes.groundImage}
                                            />
                                        </div>
                                        <div className={classes.detailsContainer}>
                                            <h3 className={classes.groundName}>{ground.groundName || 'Ground'}</h3>
                                            <div className={classes.lctndt}>
                                                <IoLocationOutline style={{ width: '24px', height: '24px' }} />
                                                <a href={ground.groundMaplink} target="_blank" rel="noopener noreferrer">Get Directions</a>
                                            </div>
                                            <p>₹{ground.fee || 'Not Specified'}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleBookClick(ground)} className={classes.bookButton}>Book Now</button>
                                </div>
                            ))
                        ) : (
                            <div className="error-container">
                                <div className="error-message">
                                    <p>No grounds available for the selected location</p>
                                </div>
                            </div>
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
                                        min={new Date().toISOString().split("T")[0]}
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
            </div>
        </>
    );
}
export default Matches