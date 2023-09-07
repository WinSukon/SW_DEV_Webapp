'use client'


const ClientCompCard = ({children}:{children:React.ReactNode}) => {

    function onCardClicked(){
        alert('card clicked')
    }

    return ( 
       <div className="w-[250px] h-[300px] rounded-lg shadow-lg  m-8  
       transition ease-in-out delay-150 hover:scale-105 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
       onClick={()=>onCardClicked()}>
        {children}
       </div> 
    );
}
 
export default ClientCompCard;