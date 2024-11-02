import React, { useState, useEffect } from 'react'
import * as classes from './threecat.module.scss'


function Create() {


    const [teamName, setTeamName] = useState('');
    const [logo, setLogo] = useState(null);
    const [preview, setPreview] = useState(null);
    const [hasGround, sethasGround] = useState(null);

    useEffect(() => {
        // Check if running in the browser environment
        if (typeof window !== 'undefined') {
            const savedTeamName = localStorage.getItem('teamName');
            const savedLogo = localStorage.getItem('teamLogo');

            if (savedTeamName) setTeamName(savedTeamName);
            if (savedLogo) setPreview(savedLogo);
        }
    }, []);

    const saveData = () => {
        // Check if running in the browser environment
        if (typeof window !== 'undefined') {
            localStorage.setItem('teamName', teamName);
            localStorage.setItem('teamLogo', preview);
            alert("Team details saved successfully!");
        }
    };

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                setLogo(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRadio = (e) => {
        sethasGround(e.target.value)
    }

    return (
        <>
            <div className='mainsec'>
                <h2 className={classes.ctheader}>Your Team's Profile</h2>
                <div className={classes.container}>


                    {teamName && preview ? (
                        <div className={classes.savedDataContainer}>
                            <h3>{teamName}</h3>
                            <img src={preview} alt="Team Logo" className={classes.logoPreview} />
                        </div>
                    ) : (
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
                            </div>
                            <div className={classes.inputGroup}>
                                <label className='labeltxt'>Team Logo</label>
                                <div className={classes.logoUploadContainer}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleLogoChange}
                                        className={classes.fileInput}
                                    />
                                    <div className={classes.uploadText}>
                                        {preview ? (
                                            <img src={preview} alt="Logo Preview" className={classes.logoPreview} />
                                        ) : (
                                            <p>Click to upload team logo</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={classes.inputGroup}>
                                <label className="labeltxt">Does Your Team Have Own Ground?</label>
                                <div className={classes.radioGroup}>
                                    <div className={classes.radiocon}>
                                        <label className='labeltxt' style={{ marginBottom: "0px" }}>
                                            Yes
                                        </label>
                                        <input
                                            type="radio"
                                            name="ownGround"
                                            value="yes"
                                            className={classes.radioInput}
                                            onChange={handleRadio}
                                        />
                                    </div>
                                    <div className={classes.radiocon}>
                                        <label className='labeltxt' style={{ marginBottom: "0px" }}>
                                            No
                                        </label>
                                        <input
                                            type="radio"
                                            name="ownGround"
                                            value="no"
                                            className={classes.radioInput}
                                            onChange={handleRadio}
                                        />
                                    </div>
                                </div>
                            </div>

                            {hasGround === "yes" && (
                                <>
                                    <div className={classes.inputGroup}>
                                        <label className='labeltxt'>Ground Description</label>
                                        <input
                                            type="text"
                                            value={teamName}
                                            onChange={(e) => setTeamName(e.target.value)}
                                            required
                                            className={classes.input}
                                        />
                                    </div>
                                    <div className={classes.inputGroup}>
                                        <label className='labeltxt'>Upload Ground Image</label>
                                        <div className={classes.logoUploadContainer}>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleLogoChange}
                                                className={classes.fileInput}
                                            />
                                            <div className={classes.uploadText}>
                                                {preview ? (
                                                    <img src={preview} alt="Logo Preview" className={classes.logoPreview} />
                                                ) : (
                                                    <p>Click to upload team logo</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.inputGroup}>
                                        <label className='labeltxt'>Facilities</label>
                                        <input
                                            type="text"
                                            value={teamName}
                                            onChange={(e) => setTeamName(e.target.value)}
                                            required
                                            className={classes.input}
                                        />
                                    </div>
                                    <div className={classes.inputGroup}>
                                        <label className='labeltxt'>Ground Fees</label>
                                        <input
                                            type="text"
                                            value={teamName}
                                            onChange={(e) => setTeamName(e.target.value)}
                                            required
                                            className={classes.input}
                                        />
                                    </div>
                                </>
                            )}

                            <button type="submit" className="ipbtn">Save Team</button>
                        </form>
                    )}
                </div>
            </div>
        </>
    )
}

export default Create