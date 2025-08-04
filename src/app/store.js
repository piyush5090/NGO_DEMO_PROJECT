import { configureStore } from "@reduxjs/toolkit";
import registrationReducer from "../features/registrationSlice"


const store = configureStore({
    reducer: {
    registration: registrationReducer, 
  },
});

export default store;