import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProfiles } from '../services/services';

export const fetchProfile = createAsyncThunk('profile/fetchProfile', async () => {
    const response = await getProfiles();
    return response.data.data;
});

const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        user: null,
        team: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProfile.fulfilled, (state, action) => {
                // Safely handle the payload data
                state.user = {
                    name: action.payload?.user?.name || null,
                    email: action.payload?.user?.email || null,
                    phoneNumber: action.payload?.user?.phoneNumber || null,
                };
                state.team = action.payload?.team || null;
                state.loading = false;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    },
});

export default profileSlice.reducer;