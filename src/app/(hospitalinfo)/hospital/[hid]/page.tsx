import Image from "next/image"
const HospitalDetails = ({params}:{params:{hid:string}}) => {
    const mockdata=new Map()
    mockdata.set('001',{
        title:'Chulalongkorn Hospital', 
        imgSrc:'/img/Chulalongkorn Hospital.jpg'
     })
     mockdata.set('002',{
        title:'Rajavithi Hospital' ,
        imgSrc:'/img/Rajavithi Hospital.jpg' 
     })
     mockdata.set('002',{
        title:'Thammasat University Hospital' ,
        imgSrc:'/img/Thammasat University Hospital.jpg' 
     })
    return ( 
        <main>
            <div className="flex flex-row">
            <Image src={(mockdata.get(params.hid)).imgSrc} 
            alt='Product Picture' width={0} height={0} sizes="100vw"
            className=" rounded-t-lg w-[40%] m-[5%]"></Image>
            <div className="text-xl m-[5%] ">{(mockdata.get(params.hid)).title}</div>

            </div>

        </main>
     );
}
 
export default HospitalDetails;