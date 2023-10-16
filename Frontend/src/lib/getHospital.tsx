export default async function getHospital(id:string) {
    
   
    const res = await fetch('http://localhost:5000/api/v1/hospitals/'+id);
    const json = await res.json();
    if(!res.ok){
        throw new Error('Faild to fetch dataa')
    }
    console.log(json)
    return json;
} ;