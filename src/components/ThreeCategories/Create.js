import React, { useState, useEffect } from 'react'
import * as classes from './threecat.module.scss'
import { showToast } from '../../utility/utility';
import { TeamCreation } from '../../services/services';


function Create() {


    const [formData, setFormData] = useState({
        teamName: "",
        teamLogo: null,
        hasOwnGround: "",
        groundDescription: "",
        groundImage: null,
        groundFee: "",
    });

    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const options = [
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
        "Refreshment Stalls",
    ];

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    const handleOptionClick = (option) => {
        setSelectedOptions((prev) => {
            if (prev.includes(option)) {
                return prev.filter((item) => item !== option);
            }
            return [...prev, option];
        });
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

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched((prev) => ({ ...prev, [name]: true }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.teamName.trim()) newErrors.teamName = "please enter your team name";
        if (!formData.teamLogo) newErrors.teamLogo = "please upload your team logo";
        if (!formData.hasOwnGround) newErrors.hasOwnGround = "please select your answer";

        if (formData.hasOwnGround === "Yes") {
            if (!formData.groundDescription.trim())
                newErrors.groundDescription = "please describe your ground";
            if (!formData.groundImage) newErrors.groundImage = "please upload your ground image";
            if (!formData.groundFee || isNaN(formData.groundFee))
                newErrors.groundFee = "please enter your ground fee";
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

        // Convert "Yes" and "No" to boolean values for backend compatibility
        const hasOwnGroundBoolean = formData.hasOwnGround === "Yes";
        data.append("hasOwnGround", hasOwnGroundBoolean);

        if (hasOwnGroundBoolean) {
            if (formData.groundDescription) {
                data.append("groundDescription", formData.groundDescription);
            }
            if (formData.groundImage) {
                data.append("groundImage", formData.groundImage);
            }
            if (formData.groundFee) {
                data.append("groundFee", formData.groundFee);
            }

            if (hasOwnGroundBoolean && selectedOptions.length > 0) {
                selectedOptions.forEach((option) => {
                    data.append("facilities", option); // Use "facilities" as the key
                });
            }

        }

        // Submit data to the backend
        try {
            const response = await TeamCreation(data);
            console.log("Form submitted successfully:", response.data);

            // Optional: reset form or provide feedback to the user
            // resetForm();
            showToast("success", "Team created successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            showToast("error", "An error occurred while submitting the form. Please try again.");
            // Optional: provide error feedback to the user
            // alert("An error occurred while submitting the form. Please try again.");
        }
    };






    return (
        <>
            <div className='mainsec'>


                <h2 className={classes.ctheader}>Create Your Team</h2>

                <div className={classes.createform}>
                    <form onSubmit={handleSubmit}>
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

                        {/* Conditional Fields */}
                        {formData.hasOwnGround === "Yes" && (
                            <>
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

                                <div className={classes.inputcon}>
                                    <label>Ground Facilities</label>
                                    <div
                                        className={classes.dropdownTrigger} // Added className
                                        onClick={toggleDropdown}
                                    >
                                        {selectedOptions.length === 0
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
                                                        onChange={() => handleOptionClick(option)}
                                                    />
                                                    {option}
                                                </label>
                                            ))}
                                        </div>
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
                            </>
                        )}

                        <button type="submit" className={classes.btn}>
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </>
    );
}

export default Create;