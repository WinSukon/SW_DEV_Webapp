import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookSlice from "./feature/bookSlice";
import {useSelector, TypedUseSelectorHook} from 'react-redux'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //local storage

const persistConfig = {
        key : "rootPersist",
        storage
}

const rootReducer = combineReducers({bookSlice})
const reduxPersistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
        reducer:reduxPersistedReducer;
})

export type Rootstate = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<Rootstate> =useSelector