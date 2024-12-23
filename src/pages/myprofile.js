import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../store/profileSlice';

function MyProfile() {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.profile);

    useEffect(() => {
        if (!user) {
            dispatch(fetchProfile());
        }
    }, [dispatch, user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!user) {
        return <div>No profile data available.</div>;
    }

    return (
        <div>
            <h1>My Profile</h1>
            {/* <p><strong>Name:</strong> {user.name || "Not Available"}</p> */}
            <p><strong>Email:</strong> {user.email || "Not Available"}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumber || "Not Available"}</p>
        </div>
    );
}

export default MyProfile;
