'use client'


const ClientCompCard = ({children}:{children:React.ReactNode}) => {

    function onCardClicked(){
        alert('card clicked')
    }

    return ( 
       <div
       onClick={()=>onCardClicked()}>
        {children}
       </div> 
    );
}
 
export default ClientCompCard;