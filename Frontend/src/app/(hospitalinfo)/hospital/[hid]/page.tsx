import getHospital from "@/lib/getHospital";
import Image from "next/image"
const HospitalDetails = async ({params}:{params:{hid:string}}) => {
   //  const mockdata=new Map()
   //  mockdata.set('001',{
   //      title:'Chulalongkorn Hospital', 
   //      imgSrc:'/img/Chulalongkorn Hospital.jpg'
   //   })
   //   mockdata.set('002',{
   //      title:'Rajavithi Hospital' ,
   //      imgSrc:'/img/Rajavithi Hospital.jpg' 
   //   })
   //   mockdata.set('003',{
   //      title:'Thammasat University Hospital' ,
   //      imgSrc:'/img/Thammasat University Hospital.jpg' 
   //   })

   const mockdata = await getHospital(params.hid);
   return ( 
         <main>
            <div className="flex flex-row">
            <Image src={mockdata.data.picture} 
            alt='Product Picture' width={0} height={0} sizes="100vw"
            className=" rounded-t-lg w-[40%] m-[5%]"></Image>
            <div>
               <div className="text-xl m-[5%] ">{mockdata.data.name}</div>
               <div className="text-xl m-[5%] ">{mockdata.data.address}</div>
               <div className="text-xl m-[5%] ">{mockdata.data.district}</div>
               <div className="text-xl m-[5%] ">{mockdata.data.province}</div>
               <div className="text-xl m-[5%] ">{mockdata.data.postalcode}</div>
               <div className="text-xl m-[5%] ">{mockdata.data.tel}</div>
            </div>
            
            </div>

        </main>
   );
}
 
export default HospitalDetails;