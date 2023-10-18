import getHospital from "@/lib/getHospital";
import Image from "next/image"
const HospitalDetails = async ({params}:{params:{hid:string}}) => {

   const mockdata = await getHospital(params.hid);
   return ( 
         <main>
            <div className="flex flex-row">
            <Image src={mockdata.data.picture} 
            alt='Product Picture' width={0} height={0} sizes="100vw"
            className=" rounded-lg w-[40%] m-[5%]"></Image>
            <div className="m-5 py-6">
               <div className="text-2xl m-[5%] ">{mockdata.data.name}</div>
               <li className="text-lg m-[5%] ">District : {mockdata.data.district}</li>
               <li className="text-lg m-[5%] ">Province : {mockdata.data.province}</li>
               <li className="text-lg m-[5%] ">Postalcode : {mockdata.data.postalcode}</li>
               <li className="text-lg m-[5%] ">Address : {mockdata.data.address}</li>
               <li className="text-lg m-[5%] ">Tel : {mockdata.data.tel}</li>
            </div>
            
            </div>

        </main>
   );
}
export default HospitalDetails;