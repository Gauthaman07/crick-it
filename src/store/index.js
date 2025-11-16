// ==========================================
// REDUX STORE - API calls commented out
// Store configuration kept for compatibility
// ==========================================

import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';

const store = configureStore({
    reducer: {
        profile: profileReducer,
    },
});

export default store;
