'use client'
import { useAppSelector } from "@/redux/store";
import {useDispatch} from 'react-redux';
import { AppDispatch } from "@/redux/store";
import { cancelBooking } from "@/redux/feature/bookSlice";

export default function mybooking(){
    const bookItems = useAppSelector((state)=>state.bookSlice.bookItems)
   
    const dispatch = useDispatch<AppDispatch>();

    const cancel=()=>{
        dispatch(cancelBooking())
    }
    
    return(
        <>
            {bookItems.length===0 ?
                <div className="flex">
                    <h1>No Vaccine Booking</h1>
                    
                </div>
                
                :
                <div className="flex flex-col bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={bookItems[0].id}>
                    <div className="text-xl">{bookItems[0].name} {bookItems[0].surname}</div>
                    <div className="text-lg">{bookItems[0].id}</div>
                    <div className="text-lg">{bookItems[0].hospital}</div>
                    <div className="text-lg">{bookItems[0].date}</div>
                    <button className="rounded-md bg-sky-600 text-white px-3 py-2  shadow-sm hover:bg-indigo-600" 
                    onClick={cancel}>Cancel Booking</button>
                </div>
                
            }
        </>
  
    );
}