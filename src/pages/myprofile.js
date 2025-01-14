import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../store/profileSlice';
import * as classes from '../components/Home/home.module.scss'

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
        <>
            <div className={classes.profilecon}>
            <h1>My Profile</h1>
            <div className={classes.profile}>

                <p>{user.name || "Not Available"}</p>
                <p>{user.mobile || "Not Available"}</p>
                <p>{user.email || "Not Available"}</p>
                
            </div>
        </div >
        </>
    );
}

export default MyProfile;
