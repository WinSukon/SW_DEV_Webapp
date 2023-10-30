'use client'
import MyText from "./MyText";

const AddHospitalForm = () => {


    return ( 
        <div className="flex flex-row">
            <div className="flex flex-col">
                <MyText title="Name" ></MyText>
                <MyText title="Address" ></MyText>
                <MyText title="District" ></MyText>
            </div>
            <div className="flex flex-col">
                <MyText title="Province" ></MyText>
                <MyText title="Postalcode" ></MyText>
                <MyText title="Tel" ></MyText>
                <MyText title="Picture" ></MyText>
            </div>
        </div> 
    );
}
 
export default AddHospitalForm;