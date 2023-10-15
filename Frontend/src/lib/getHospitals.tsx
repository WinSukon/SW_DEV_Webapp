
export default async function getHospitals() {
    
    setTimeout(async ()=>{
        const res = await fetch('http://localhost:5000/api/v1/hospitals');

        if(!res.ok){
            throw new Error('Faild to fetch dataa')
        }
        return await res.json();

    },5000)
} ;
