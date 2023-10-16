import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/lib/getHospitals";
import {Suspense} from 'react';
import { LinearProgress } from "@mui/material";

export default function AllHospital (){

    const hospitals=  getHospitals();

    return ( 
        <main className="flex flex-col justify-between items-center min-h-screen">
            {/* <CardPanel></CardPanel> */}
            <Suspense fallback={<p>Loading...<LinearProgress></LinearProgress></p>}>
                <HospitalCatalog hosJson={hospitals} ></HospitalCatalog>
            </Suspense>
        </main>
     );
}
 
