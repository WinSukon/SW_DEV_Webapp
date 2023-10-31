
import { dbConnect } from "@/db/dbConnect";
import MyText from "./MyText";
import Hospital from "@/db/models/Hospital";
import { revalidatePath} from "next/cache";
import { redirect } from "next/navigation";

const AddHospitalForm = () => {

    const addHospital =async (addhospitalForm:FormData) => {
        "use server"

        const Name = addhospitalForm.get('Name')
        const Address = addhospitalForm.get('Address')
        const District = addhospitalForm.get('District')
        const Province = addhospitalForm.get('Province')
        const Postalcode = addhospitalForm.get('Postalcode')
        const Tel = addhospitalForm.get('Tel')
        const Picture = addhospitalForm.get('Picture')

        try{
            await dbConnect();
            const hospital = await Hospital.create({
                "name":Name,
                "address": Address,
                "district" : District,
                "province" : Province,
                "postalcode" :Postalcode,
                "tel" : Tel,
                "picture" :Picture

            })
        }
        catch(error){
            console.log(error)
        }
        revalidatePath('/hospital')

    }

    return ( 
        <form action={addHospital}>
            <div className="text-2xl text-center">Add your hospital</div>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <MyText title="Name"></MyText>
                    <MyText title="Address" ></MyText>
                    <MyText title="District" ></MyText>
                    <MyText title="Province" ></MyText>
                </div>
                <div className="flex flex-col">
                    <MyText title="Postalcode" ></MyText>
                    <MyText title="Tel" ></MyText>
                    <MyText title="Picture" placeholder="URL"></MyText>
                    <div className="flex left-[36%] top-[10%] relative ">
                        <button type="submit"className="rounded-md bg-sky-600 text-white px-3 py-2  shadow-sm hover:bg-indigo-600 relative">Submit</button>
                    </div>
                </div>
            </div> 
        </form>
        
    );
}
 
export default AddHospitalForm;