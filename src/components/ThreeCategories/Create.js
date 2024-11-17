import React, { useState, useEffect } from 'react'
import * as classes from './threecat.module.scss'
import { showToast } from '../../utility/utility';
import { TeamCreation } from '../../services/services';


function Create() {
    const [teamName, setTeamName] = useState('');
    const [teamLogo, setTeamLogo] = useState(null);
    const [hasGround, setHasGround] = useState('');
    const [groundDescription, setGroundDescription] = useState('');
    const [groundImage, setGroundImage] = useState(null);
    const [facilities, setFacilities] = useState('');
    const [groundFees, setGroundFees] = useState('');
    const [errors, setErrors] = useState({});
    const [tempPreview, setTempPreview] = useState(null);
    const [GDPreview, setGDPreview] = useState(null);

    const facilitiesOptions = [
        "Drinking Water", "Changing Rooms", "Parking", "Showers", "Floodlights",
        "Seating Area", "Wi-Fi", "Food & Beverages", "Restrooms", "Locker Rooms",
        "First Aid Kit", "Coaching Staff", "Medical Assistance", "Ground Maintenance",
        "CCTV Surveillance", "Security Personnel", "Sound System", "Fitness Center",
        "Storage Facilities", "Refreshment Stalls"
    ];

    const [selectedFacilities, setSelectedFacilities] = useState([]);
    console.log(selectedFacilities);
    
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsOpen(prev => !prev);  // Toggle the dropdown open state
    };

    // Select or deselect facility
    const handleFacilitySelect = (facility) => {
        setSelectedFacilities(prev => {
            // If the facility is already selected, remove it; otherwise, add it
            if (prev.includes(facility)) {
                return prev.filter(item => item !== facility);  // Remove facility
            } else {
                return [...prev, facility];  // Add facility
            }
        });
    };


    const validateForm = () => {
        const validationErrors = {};

        // Validate Team Name
        if (!teamName.trim()) validationErrors.teamName = "Team Name is required.";

        // Validate Team Logo
        if (!teamLogo) validationErrors.teamLogo = "Team Logo is required.";

        // Validate Has Ground
        if (!hasGround) validationErrors.hasGround = "Please select if your team has its own ground.";

        // If team has a ground, validate ground-related fields
        if (hasGround === "yes") {
            // Ground Description
            if (!groundDescription.trim()) validationErrors.groundDescription = "Ground Description is required.";

            // Ground Image
            if (!groundImage) validationErrors.groundImage = "Ground Image is required.";

            // Facilities: Ensure at least one facility is selected
            if (selectedFacilities.length === 0) {
                validationErrors.facilities = "At least one facility must be selected.";
            }

            // Ground Fees: Check if it's a valid number
            if (!groundFees.trim() || isNaN(groundFees)) {
                validationErrors.groundFees = "Ground Fees must be a valid number.";
            }
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };


    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setTeamLogo(file); // Assuming this is where you store the file
            setTempPreview(URL.createObjectURL(file)); // Generate a preview URL
        }
    };

    const handleGroundImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setGroundImage(file);
            setGDPreview(URL.createObjectURL(file));
        }
    };

    const handleRadio = (e) => {
        setHasGround(e.target.value);
    };


    const saveData = async () => {
        if (!validateForm()) {
            return; // Exit if validation fails
        }

        const formData = new FormData();
        formData.append("name", teamName);
        formData.append("teamLogo", teamLogo);  // Should match the field name in backend (teamLogo)
        formData.append("hasGround", hasGround);

        if (hasGround === "yes") {
            formData.append("groundDescription", groundDescription);
            formData.append("groundImage", groundImage);
            
            // Send facilities as an array
            selectedFacilities.forEach(facility => {
                formData.append("facilities[]", facility);
            });
        
            // Ensure groundFee is included
            if (groundFees) {
                formData.append("groundFees", groundFees);
            } else {
                showToast("error", "Ground Fee is required.");
                return;
            }
        }
        
        try {
            const response = await TeamCreation(formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                showToast("success", "Team saved successfully!");
            }
        } catch (err) {
            console.error("Error saving team:", err);
            showToast("error", err.message || "Failed to save team. Please try again.");
        }
    };





    return (
        <>
            <div className='mainsec'>

                <div className={classes.container}>
                    {/* {teamName && preview ? (
                        <div className={classes.savedDataContainer}>
                            <h3>{teamName}</h3>
                            <img src={preview} alt="Team Logo" className={classes.logoPreview} />
                        </div>
                    ) : ( */}
                    <>

                        <h2 className={classes.ctheader}>Create Your Team</h2>
                        <form className={classes.form} onSubmit={(e) => { e.preventDefault(); saveData(); }}>
                            <div className={classes.inputGroup}>
                                <label className='labeltxt'>Team Name</label>
                                <input
                                    type="text"
                                    value={teamName}
                                    onChange={(e) => setTeamName(e.target.value)}
                                    required
                                    className={classes.input}
                                />
                                {errors.teamName && <p style={{ color: "red", margin: 0, paddingTop: "10px" }}>{errors.teamName}</p>}
                            </div>
                            <div className={classes.inputGroup}>
                                <label className='labeltxt'>Team Logo</label>
                                <div className={classes.logoUploadContainer}>
                                    <input
                                        type="file"
                                        name="teamLogo"
                                        accept="image/*"
                                        onChange={handleLogoChange}
                                        className={classes.fileInput}
                                    />
                                    <div className={classes.uploadBox}>
                                        {tempPreview ? (
                                            <img
                                                src={tempPreview}
                                                alt="Logo Preview"
                                                className={classes.logoPreview}
                                            />
                                        ) : (
                                            <p className={classes.placeholderText}>Upload Team Logo</p>
                                        )}
                                    </div>
                                    {errors.teamLogo && <p className="error-text">{errors.teamLogo}</p>}
                                </div>
                            </div>

                            <div className={classes.inputGroup}>
                                <label className="labeltxt">Does Your Team Have Own Ground?</label>
                                <div className={classes.radioGroup}>
                                    <div className={classes.radiocon}>
                                        <label className='labeltxt'>
                                            Yes
                                        </label>
                                        <input
                                            type="radio"
                                            name="ownGround"
                                            value="yes"
                                            onChange={handleRadio}
                                        />
                                    </div>
                                    <div className={classes.radiocon}>
                                        <label className='labeltxt'>
                                            No
                                        </label>
                                        <input
                                            type="radio"
                                            name="ownGround"
                                            value="no"
                                            onChange={handleRadio}
                                        />
                                    </div>
                                </div>
                                {errors.hasGround && <p className="error-text">{errors.hasGround}</p>}
                            </div>
                            {hasGround === "yes" && (
                                <>
                                    <div className={classes.inputGroup}>
                                        <label className='labeltxt'>Ground Description</label>
                                        <input
                                            type="text"
                                            value={groundDescription}
                                            onChange={(e) => setGroundDescription(e.target.value)}
                                            required
                                            className={classes.input}
                                        />
                                        {errors.groundDescription && <p className="error-text">{errors.groundDescription}</p>}
                                    </div>
                                    <div className={classes.inputGroup}>
                                        <label className='labeltxt'>Upload Ground Image</label>
                                        <div className={classes.logoUploadContainer}>
                                            <input
                                                type="file"
                                                name="groundImage"
                                                accept="image/*"
                                                onChange={handleGroundImageChange}
                                                className={classes.fileInput}
                                            />
                                            <div className={classes.uploadBox}>
                                                {GDPreview ? (
                                                    <img
                                                        src={GDPreview}
                                                        alt="Ground Preview"
                                                        className={classes.logoPreview}
                                                    />
                                                ) : (
                                                    <p className={classes.placeholderText}>Upload Ground Image</p>
                                                )}
                                            </div>
                                        </div>
                                        {errors.groundImage && <p className="error-text">{errors.groundImage}</p>}
                                    </div>
                                    <div className={classes.inputGroup}>
                                        <label className='labeltxt'>Facilities</label>
                                        <div className={classes.selectContainer} onClick={handleDropdownToggle}>

                                            {/* Dropdown Button */}
                                            <button type="button" className={classes.selectbtn}>
                                                {selectedFacilities.length > 0 ? selectedFacilities.join(', ') : "Select Facilities"}
                                            </button>

                                            {/* Dropdown List */}
                                            <div className={`${classes.selectDropdown} ${isOpen ? classes.open : ''}`}>
                                                {facilitiesOptions.map(facility => (
                                                    <div
                                                        key={facility}
                                                        className={`${classes.option} ${selectedFacilities.includes(facility) ? classes.selected : ''}`}
                                                        onClick={() => handleFacilitySelect(facility)}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedFacilities.includes(facility)}
                                                            readOnly
                                                        />
                                                        {facility}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>



                                        {errors.facilities && <p className="error-text">{errors.facilities}</p>}
                                    </div>
                                    <div className={classes.inputGroup}>
                                        <label className='labeltxt'>Ground Fees</label>
                                        <input
                                            type="text"
                                            value={groundFees}
                                            onChange={(e) => setGroundFees(e.target.value)}
                                            className={classes.input}
                                        />
                                        {errors.groundFees && <p className="error-text">{errors.groundFees}</p>}
                                    </div>
                                </>
                            )}
                            <button type="submit" style={{ marginTop: "20px" }} className="ipbtn">Save Team</button>
                        </form>

                    </>
                    {/* )} */}
                </div>
            </div>
        </>
    );
}

export default Create;