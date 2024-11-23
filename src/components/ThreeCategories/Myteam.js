import React, { useState, useEffect } from 'react';
import { fetchMyTeam } from '../../services/services';
import Create from './Create';

const Myteam = () => {
    const [team, setTeam] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTeamDetails = async () => {
            try {
                const response = await fetchMyTeam();
                setTeam(response.data.team); // Assuming the response structure includes `team`
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
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    // Render team details if available
    if (team) {
        return (
            <div>
                <h1>Team Details</h1>
                <h2>Team Name: {team.teamName}</h2>
                <img src={team.teamLogo} alt="Team Logo" style={{ width: '150px' }} />
                {team.hasOwnGround && (
                    <>
                        <h3>Ground: {team.groundDescription}</h3>
                        <p>Facilities: {team.facilities.join(', ')}</p>
                        <p>Ground Fee: ₹{team.groundFee}</p>
                        <img src={team.groundImage} alt="Ground" style={{ width: '200px' }} />
                    </>
                )}
            </div>
        );
    }

    // Render the "Create Team" form if no team exists
    return <Create />;
};

export default Myteam;
