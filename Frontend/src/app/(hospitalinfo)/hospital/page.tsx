import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/lib/getHospitals";
import {Suspense} from 'react';
import { LinearProgress } from "@mui/material";
import AddHospitalForm from "@/components/AddHospitalForm";
import getUserProfile from "@/lib/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AllHospital (){

    const hospitals=  getHospitals();

    const session = await getServerSession(authOptions);

    if(!session) return(
        <main className="flex flex-col justify-between items-center min-h-screen">
        {/* <CardPanel></CardPanel> */}
        <Suspense fallback={
        <p className="text-lg">Loading...<LinearProgress></LinearProgress></p>
        }>
            <HospitalCatalog hosJson={hospitals} ></HospitalCatalog>

        </Suspense>
    </main>
    )

    const profile = await getUserProfile(session.user.token);

    return ( 
        <main className="flex flex-col justify-between items-center min-h-screen">
            {/* <CardPanel></CardPanel> */}
            <Suspense fallback={
            <p className="text-lg">Loading...<LinearProgress></LinearProgress></p>
            }>
                <HospitalCatalog hosJson={hospitals} ></HospitalCatalog>

                {profile.data.role=="admin" ? <AddHospitalForm></AddHospitalForm> : null}
            </Suspense>
        </main>
     );
}
 

