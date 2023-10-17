'use client'
import {useState,useEffect} from 'react' 
import Rating from '@mui/material/Rating';

const ClientCompCard = ({children,title,ratingHandler,hospitalRating}:{children:React.ReactNode,title:string,ratingHandler?:Function,hospitalRating?:Map<string,Number>}) => {

    const [value,setValue]=useState<number | null>(0);
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

    useEffect(()=>{
        if(hospitalRating){
            setValue(Number(hospitalRating.get(title)?.toString()))
        } 
    },[hospitalRating])

    return ( 
       <div className="w-[250px] h-[300px] rounded-lg m-8 shadow-xl bg-white"
       onMouseOver={(e)=>onMouseAction(e)}
       onMouseOut={(e)=>onMouseAction(e)}>
            {children}
            {ratingHandler?  <div className="w-full h-[10%] px-3">     
                <Rating  value={value} precision={0.05} size="small" 
                onChange={(e,newValue)=>{
                    if(newValue!==null){
                        setValue(newValue);
                        ratingHandler(title,newValue)}
                    }
                    
                    }
                onClick={(e)=>{
                    // e.preventDefault()
                    e.stopPropagation()

                }}/>
                
            </div> : ''}
           
       </div> 
    );
}
export default ClientCompCard;