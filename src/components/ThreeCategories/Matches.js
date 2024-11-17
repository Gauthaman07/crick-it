import React, { useState, useEffect } from 'react';
import * as classes from './threecat.module.scss'
import { FaMapMarkerAlt, FaClipboardList } from 'react-icons/fa';

function Matches() {
    const groundsData = [
        { id: 1, name: "Tirupur Cricket Ground", location: "Tirupur", facilities: "Parking, Changing Rooms, Spectator Seating", fees: 2000, imageUrl: "https://th.bing.com/th/id/OIP.RuXG2qVx5hnhEU-ig0DDHgHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { id: 2, name: "Coimbatore Sports Arena", location: "Coimbatore", facilities: "Floodlights, Parking, Canteen", fees: 2500, imageUrl: "https://th.bing.com/th/id/OIP.Q8i9LdUuD1HFjF94-kV-cQHaFj?w=220&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
        { id: 3, name: "Chennai Open Ground", location: "Chennai", facilities: "Restrooms, Parking, Seating", fees: 1800, imageUrl: "https://th.bing.com/th/id/OIP.IRRc2W5XkOEYdZ1ECPi06wHaEF?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    ];

    const [selectedGround, setSelectedGround] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [showModal, setShowModal] = useState(false);

    // Open modal and set the selected ground when "Book" is clicked
    const handleBookClick = (ground) => {
        setSelectedGround(ground);
        setShowModal(true);
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
            setShowModal(false);  // Close modal after confirming
        } else {
            alert("Please select a date and time.");
        }
    };

    return (
        <div className={classes.bookingContainer}>
            <h2 className={classes.title}>Book a Ground for Your Game !</h2>

            {/* Available Grounds List */}
            <div className={classes.groundsList}>
                {groundsData.map((ground) => (
                    <div key={ground.id} className={classes.groundCard}>
                        <div className={classes.imageContainer}>
                            <img src={ground.imageUrl} alt={`${ground.name}`} className={classes.groundImage} />
                        </div>
                        <div className={classes.detailsContainer}>
                            <h3 className={classes.groundName}>{ground.name}</h3>
                            <p><FaMapMarkerAlt /> {ground.location}</p>
                            <p><FaClipboardList /> {ground.facilities}</p>
                            <p>₹{ground.fees}</p>
                            <button
                                onClick={() => handleBookClick(ground)}
                                className={classes.bookButton}
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}
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