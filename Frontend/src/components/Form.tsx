'use client'

import { Select , MenuItem , SelectChangeEvent } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MyText from "./MyText";
import {useState} from 'react';

const Form = () => {

    const [hos,setHos] = useState('')

    const handleChange=(event: SelectChangeEvent)=>{
        setHos(event.target.value);
    }

    return (  
        <form >
            <div className="flex flex-row m-3">
                <div className="flex flex-col m-4">
                        
                    <MyText title="First Name"></MyText>
                    <MyText title="Last Name"></MyText>
                    <MyText title="Id"></MyText>

                </div>

                <div className="flex flex-col m-4">
                
                    <div className="text-base p-3">Select Hospital</div>
                    <div className="p-3 mb-4">
                        <Select variant="standard" label="choose hospital" className="w-[280px]" value={hos} onChange={handleChange}>
                            <MenuItem value={'Chulalongkorn Hospital'}>Chulalongkorn Hospital</MenuItem>
                            <MenuItem value={'Rajavithi Hospital'}>Rajavithi Hospital</MenuItem>
                            <MenuItem value={'Thammasat University Hospital'}>Thammasat University Hospital</MenuItem>

                        </Select>
                    </div>

                    <div className="p-3 mt-4">Select Date</div>
                    <div className="p-3">
                        
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker></DatePicker>
                        </LocalizationProvider>
                    </div>

                    

                </div>

            </div>
            <div className="left-[46%] absolute m-0">
                <button className="rounded-md bg-sky-600 text-white px-3 py-2  shadow-sm hover:bg-indigo-600">Confirm</button>

            </div>

           
        </form>
    );
}
 
export default Form;