import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./feature/bookSlice";

export const store = configureStore({
        reducer:{
                bookSlice
        }
})

export type Rootstate = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
