function delay(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function getHospitals() {
    
    await delay(5000)
    const res = await fetch('http://localhost:5000/api/v1/hospitals');
    const json = await res.json();
    if(!res.ok){
        throw new Error('Faild to fetch dataa')
    }
    console.log(json)
    return json;

    
    

} ;


