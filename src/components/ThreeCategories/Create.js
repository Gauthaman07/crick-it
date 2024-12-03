import React, { useState, useEffect } from 'react'
import * as classes from './threecat.module.scss'
import { showToast } from '../../utility/utility';
import { TeamCreation } from '../../services/services';


function Create() {


    const [formData, setFormData] = useState({
        teamName: "",
        teamLogo: null,
        teamlocation: "placeholder",
        hasOwnGround: "",
        groundName: "",
        groundDescription: "",
        maplink: "",
        groundImage: null,
        groundFee: "",
    });

    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setloading] = useState(false);


    const options = [
        "Single End",
        "Double End",
        "Drinking Water",
        "Changing Rooms",
        "Parking",
        "Showers",
        "Floodlights",
        "Seating Area",
        "Wi-Fi",
        "Food & Beverages",
        "Restrooms",
        "Locker Rooms",
        "First Aid Kit",
        "Coaching Staff",
        "Medical Assistance",
        "Ground Maintenance",
        "CCTV Surveillance",
        "Security Personnel",
        "Sound System",
        "Fitness Center",
        "Storage Facilities",
    ];

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    const handleOptionClick = (option) => {
        // Update selected options
        setSelectedOptions((prev) => {
            if (prev.includes(option)) {
                return prev.filter((item) => item !== option);
            }
            return [...prev, option];
        });

        // Mark the field as touched once the user interacts
        setTouched((prev) => ({ ...prev, selectedOptions: true }));
    };



    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            if (newErrors[name]) delete newErrors[name];
            return newErrors;
        });

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };
    const handleSelectChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear the error dynamically for teamlocation
        if (name === "teamlocation" && value !== "placeholder") {
            setErrors((prev) => {
                const { teamlocation, ...rest } = prev; // Remove teamlocation error
                return rest;
            });
        }

        setTouched((prev) => ({ ...prev, [name]: true })); // Mark as touched
    };
    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };
    const handleselectBlur = (field) => {
        setTouched((prev) => ({
            ...prev,
            [field]: true,
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.teamName.trim()) newErrors.teamName = "Please enter your team name";
        if (!formData.teamLogo) newErrors.teamLogo = "Please upload your team logo";
        if (formData.teamlocation === "placeholder") {
            newErrors.teamlocation = "Please select a location";
        }
        if (!formData.hasOwnGround) newErrors.hasOwnGround = "Please select your answer";

        if (formData.hasOwnGround === "Yes") {
            if (!formData.groundName.trim())
                newErrors.groundName = "Please enter ground name";
            if (!formData.groundDescription.trim())
                newErrors.groundDescription = "Please describe your ground";
            if (!formData.maplink.trim())
                newErrors.maplink = "Please provide your ground location";
            if (!formData.groundImage) newErrors.groundImage = "Please upload your ground image";
            if (touched.selectedOptions && selectedOptions.length === 0) {
                newErrors.selectedOptions = "Please select at least one ground facility";
            }
            if (!formData.groundFee || isNaN(formData.groundFee))
                newErrors.groundFee = "Please enter your ground fee";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Mark all fields as touched to show validation errors if any
        const touchedFields = Object.keys(formData).reduce((acc, field) => {
            acc[field] = true;
            return acc;
        }, {});
        setTouched(touchedFields);

        // Perform validation
        const isValid = validate();
        if (!isValid) {
            console.error("Validation Failed", errors);
            return;
        }

        // Prepare FormData
        const data = new FormData();
        data.append("teamName", formData.teamName);

        if (formData.teamLogo) {
            data.append("teamLogo", formData.teamLogo);
        }
        if (formData.teamlocation) {
            data.append("location", formData.teamlocation);
        }
        // Convert "Yes" and "No" to boolean values for backend compatibility
        const hasOwnGroundBoolean = formData.hasOwnGround === "Yes";
        data.append("hasOwnGround", hasOwnGroundBoolean);

        if (hasOwnGroundBoolean) {
            if (formData.groundName) {
                data.append("groundName", formData.groundName);
            }
            if (formData.groundDescription) {
                data.append("description", formData.groundDescription);
            }
            if (formData.maplink) {
                data.append("groundMaplink", formData.maplink);
            }
            if (formData.groundImage) {
                data.append("groundImage", formData.groundImage);
            }
            if (formData.groundFee) {
                data.append("groundFee", formData.groundFee);
            }

            console.log("Selected options:", selectedOptions);
            if (hasOwnGroundBoolean && selectedOptions.length > 0) {
                selectedOptions.forEach((option) => {
                    data.append("facilities[]", option); 
                });
            }

        }

    
        try {
            setloading(true)
            const response = await TeamCreation(data);
            console.log("Form submitted successfully:", response.data);

        
            showToast("success", "Team created successfully!");
            setTimeout(() => {
                if (typeof window !== "undefined") {
                    window.location.reload();
                }
            }, 3000);
        } catch (error) {
            console.error("Error submitting form:", error);
            showToast("error", "An error occurred while submitting the form. Please try again.");
    
            // alert("An error occurred while submitting the form. Please try again.");
        }
        finally {
            setloading(false);
        }
    };






    return (
        <>
            <div className='mainsec'>


                <h2 className={classes.ctheader}>Create Your Team</h2>


                <form onSubmit={handleSubmit}>
                    <div className={classes.createform}>
                        <div className={classes.row}>
                            {/* Team Name */}
                            <div className={classes.inputcon}>
                                <label>Team Name *</label>
                                <input
                                    type="text"
                                    name="teamName"
                                    value={formData.teamName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.teamName && errors.teamName && (
                                    <p className={classes.error}>{errors.teamName}</p>
                                )}
                            </div>

                            {/* Team Logo */}
                            <div className={classes.filecon}>
                                <label>Team Logo *</label>
                                <input
                                    type="file"
                                    name="teamLogo"
                                    accept="image/*"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.teamLogo && errors.teamLogo && (
                                    <p className={classes.error}>{errors.teamLogo}</p>
                                )}
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.inputcon}>
                                <label>Team/Ground Location *</label>
                                <select
                                    className={classes.select}
                                    name="teamlocation"
                                    value={formData.teamlocation}
                                    onChange={handleSelectChange}
                                    onBlur={() => handleselectBlur("teamlocation")}
                                    required
                                >
                                    <option value="placeholder" disabled>
                                        Select a location
                                    </option>
                                    <option value="Tirupur">Tirupur</option>
                                    <option value="Coimbatore">Coimbatore</option>
                                    <option value="Chennai">Chennai</option>
                                    <option value="Salem">Salem</option>
                                    <option value="Dindigul">Dindigul</option>
                                </select>
                                {touched.teamlocation && errors.teamlocation && (
                                    <p className={classes.error}>{errors.teamlocation}</p>
                                )}
                            </div>
                            {/* Own Ground */}
                            <div className={classes.inputcon}>
                                <label>Does Your Team Have Own Ground? *</label>
                                <div className={classes.radios}>
                                    <label>
                                        <input
                                            type="radio"
                                            name="hasOwnGround"
                                            value="Yes"
                                            onChange={handleChange}
                                            checked={formData.hasOwnGround === "Yes"}
                                            onBlur={handleBlur}
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="hasOwnGround"
                                            value="No"
                                            onChange={handleChange}
                                            checked={formData.hasOwnGround === "No"}
                                            onBlur={handleBlur}
                                        />
                                        No
                                    </label>
                                </div>
                                {touched.hasOwnGround && errors.hasOwnGround && (
                                    <p className={classes.error}>{errors.hasOwnGround}</p>
                                )}
                            </div>
                        </div>
                        {/* Conditional Fields */}
                        {formData.hasOwnGround === "Yes" && (
                            <>
                                <div className={classes.row}>
                                    <div className={classes.inputcon}>
                                        <label>Ground Name *</label>
                                        <input
                                            type="text"
                                            name="groundName"
                                            value={formData.groundName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.groundName && errors.groundName && (
                                            <p className={classes.error}>{errors.groundName}</p>
                                        )}
                                    </div>

                                    <div className={classes.filecon}>
                                        <label>Ground Image *</label>
                                        <input
                                            type="file"
                                            name="groundImage"
                                            accept="image/*"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.groundImage && errors.groundImage && (
                                            <p className={classes.error}>{errors.groundImage}</p>
                                        )}
                                    </div>
                                </div>

                                <div className={classes.inputcon}>
                                    <label>Ground Description *</label>
                                    <textarea
                                        className={classes.txtarea}
                                        name="groundDescription"
                                        value={formData.groundDescription}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.groundDescription && errors.groundDescription && (
                                        <p className={classes.error}>{errors.groundDescription}</p>
                                    )}
                                </div>
                                <div className={classes.inputcon}>
                                    <label>Paste your ground location from google map *</label>
                                    <textarea
                                        className={classes.txtareaml}
                                        name="maplink"
                                        value={formData.maplink}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {touched.maplink && errors.maplink && (
                                        <p className={classes.error}>{errors.maplink}</p>
                                    )}
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.inputcon}>
                                        <label>Ground Facilities *</label>
                                        <div
                                            className={classes.dropdownTrigger}
                                            onClick={toggleDropdown}
                                        >
                                            {selectedOptions.length === 0 && touched.selectedOptions
                                                ? "Select Facilities" 
                                                : selectedOptions.join(", ")} 
                                        </div>
                                        {isOpen && (
                                            <div className={classes.dropdownMenu}>
                                                {options.map((option) => (
                                                    <label key={option}>
                                                        <input
                                                            type="checkbox"
                                                            checked={selectedOptions.includes(option)}
                                                            onChange={() => handleOptionClick(option)} // Update selection
                                                        />
                                                        {option}
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                      
                                        {touched.selectedOptions && errors.selectedOptions && (
                                            <p className={classes.error}>{errors.selectedOptions}</p>
                                        )}
                                    </div>



                                    <div className={classes.inputcon}>
                                        <label>Ground Fee ₹ *</label>
                                        <input
                                            type="number"
                                            name="groundFee"
                                            value={formData.groundFee}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            min="0"
                                            onWheel={(e) => e.target.blur()}
                                        />
                                        {touched.groundFee && errors.groundFee && (
                                            <p className={classes.error}>{errors.groundFee}</p>
                                        )}
                                    </div>
                                </div>
                            </>
                        )}

                        <button type="submit" className={classes.btn}>
                            {loading ? (
                                <div className="loader"></div>
                            )
                                : (
                                    "Submit"
                                )}
                        </button>
                    </div>
                </form>
            </div>


        </>
    );
}

export default Create;