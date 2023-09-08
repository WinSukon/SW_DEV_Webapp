'use client'

import { Select , MenuItem ,TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MyText from "./MyText";

const Form = () => {
    return (  
        <form >
            <MyText title="Name"></MyText>
            <MyText title="Sur Name"></MyText>
            <MyText title="Id"></MyText>
            <div>
                <Select variant="standard" label="choose hospital" className="w-[150px]">
                    <MenuItem>Chulalongkorn Hospital</MenuItem>
                    <MenuItem>Rajavithi Hospital</MenuItem>
                    <MenuItem>Thammasat University Hospital</MenuItem>

                </Select>
            </div>

            <div className="p-3">Select Date</div>
            <div className="p-3">
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker></DatePicker>
                </LocalizationProvider>
            </div>

            <div>
                <button>Confirm</button>
            </div>
           
        </form>
    );
}
 
export default Form;