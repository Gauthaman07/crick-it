import React, { useState, useEffect } from 'react';
import { fetchMyTeam } from '../../services/services';
import Create from './Create';
import * as classes from './/threecat.module.scss'
import Customloader from '../Elements/Customloader';
import { navigate } from 'gatsby';

const Myteam = () => {
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTeamDetails = async () => {
            try {
                const response = await fetchMyTeam();
                setTeam(response.data.team);
            } catch (err) {
                if (err.response?.status === 404) {
                    // No team found
                    setTeam(null);
                } else {
                    setError(err.response?.data?.message || 'Failed to fetch team details');
                }
            } finally {
                setLoading(false);
            }
        };

        getTeamDetails();
    }, []);

    if (loading) {
        return <Customloader />
    }

    if (error) {
        return (
            <div className="error-container">
                <div className="error-message">
                    <h3>Oops!</h3>
                    <p>{error}</p>
                    <button style={{ width: "240px" }} className='ipbtn' onClick={() => (navigate('/login'))}>
                        Go to Login
                    </button>
                </div>
            </div>
        );
    }


    // Render team details if available
    if (team) {
        return (
            <div className='mainsec'>
                <div className={classes.teaminfo}>

                    <img src={team.teamLogo} alt="Team Logo" />
                    <h2>{team.teamName}</h2>
                </div>

            </div>
        );
    }

    // Render the "Create Team" form if no team exists
    return <Create />;
};

export default Myteam;
