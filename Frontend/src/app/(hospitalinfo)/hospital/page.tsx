import CardPanel from "@/components/CardPanel";
import HospitalCatalog from "@/components/HospitalCatalog";
import getHospitals from "@/lib/getHospitals";

export default async function AllHospital (){
    const hospitals= await getHospitals();
    return ( 
        <main className="flex flex-col justify-between items-center min-h-screen">
            {/* <CardPanel></CardPanel> */}
            <HospitalCatalog hosJson={hospitals} ></HospitalCatalog>
        </main>
     );
}
 
