'use client'


const ClientCompCard = ({children}:{children:React.ReactNode}) => {

    function onCardClicked(){
        alert('card clicked')
        
    }

    function onMouseAction(e:React.SyntheticEvent){
        if(e.type==='mouseover'){
            e.currentTarget.classList.remove('shadow-lg')
            e.currentTarget.classList.add('shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]')

            e.currentTarget.classList.remove('bg-white')
            e.currentTarget.classList.add('bg-neutral-200')
        }
        else{
            e.currentTarget.classList.remove('shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]')
            e.currentTarget.classList.add('shadow-lg')

            e.currentTarget.classList.remove('bg-neutral-200')
            e.currentTarget.classList.add('bg-white')
        }
    }

    return ( 
       <div className="w-[250px] h-[300px] rounded-lg m-8 shadow-lg bg-white"
       onClick={()=>onCardClicked()}
       onMouseOver={(e)=>onMouseAction(e)}
       onMouseOut={(e)=>onMouseAction(e)}>
        {children}
       </div> 
    );
}
 
export default ClientCompCard;