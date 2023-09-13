'use client'
import {useReducer} from 'react'
import Card from "./Card";
import Rating from '@mui/material/Rating';

const CardPanel = () => {


    const reducerRating=(hospitalRating:Map<string,Number>,action:{'type':string,'name':string,'rating':Number})=>{
        switch(action.type){
            case 'add':
                return new Map(hospitalRating.set(action.name,action.rating));
            case 'delete':
                hospitalRating.delete(action.name);
                // hospitalRating.forEach((value:Number,key:string,map:Map<string,Number>)=>{
                //     console.log(key,value);
                // })
                return new Map(hospitalRating);
            default:
                return hospitalRating;
        }
    }
    const [hospitalRating,dispatchRating] = useReducer(reducerRating,new Map<string,Number>())


    return (  
        <div className="flex flex-col">
            <div className="flex flex-row ">
                <Card title='Chulalongkorn Hospital' imgSrc='/img/Chulalongkorn Hospital.jpg' ratingHandler={(name:string,value:Number)=>dispatchRating({'type':'add','name':name,'rating':value}) } hospitalRating={hospitalRating}/>
                <Card title='Rajavithi Hospital' imgSrc='/img/Rajavithi Hospital.jpg' ratingHandler={(name:string,value:Number)=>dispatchRating({'type':'add','name':name,'rating':value})} hospitalRating={hospitalRating}/>
                <Card title='Thammasat University Hospital' imgSrc='/img/Thammasat University Hospital.jpg' ratingHandler={(name:string,value:Number)=>dispatchRating({'type':'add','name':name,'rating':value})} hospitalRating={hospitalRating}/>

            </div>
            <div>
                <div>Rating list</div>
                {hospitalRating.has('Chulalongkorn Hospital') && <div onClick={()=>dispatchRating({'type':'delete','name':'Chulalongkorn Hospital','rating':0})}>Chulalongkorn Hospital Rating = {hospitalRating.get('Chulalongkorn Hospital')?.toString()}</div>}
                {hospitalRating.has('Rajavithi Hospital') && <div onClick={()=>dispatchRating({'type':'delete','name':'Rajavithi Hospital','rating':0})}>Rajavithi Hospital Rating = {hospitalRating.get('Rajavithi Hospital')?.toString()}</div>}
                {hospitalRating.has('Thammasat University Hospital') && <div onClick={()=>dispatchRating({'type':'delete','name':'Thammasat University Hospital','rating':0})}>Thammasat University Hospital Rating = {hospitalRating.get('Thammasat University Hospital')?.toString()}</div>}
       
       
            </div>
          
        </div>  
     
      
    );
}
 
export default CardPanel;