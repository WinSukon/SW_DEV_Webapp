
export default async function getHospitals() {
    
    setTimeout(async ()=>{
        const res = await fetch('http://localhost:5000/api/v1/hospitals');
        const json = await res.json();
        if(!res.ok){
            throw new Error('Faild to fetch dataa')
        }
        console.log(json)
        return json;

    },5000)
} ;
