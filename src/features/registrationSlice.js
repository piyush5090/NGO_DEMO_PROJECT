import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    registrations: []
};

const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        addRegistration: (state, action) =>{
            state.registrations = action.payload.data;
        },
    }
});

export const {addRegistration} = registrationSlice.actions;
export default registrationSlice.reducer;

