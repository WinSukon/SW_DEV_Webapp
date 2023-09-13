import Card from "./Card";
const CardPanel = () => {
    return (  
        
        <div className="flex flex-row ">
            <Card {...{title:'Chulalongkorn Hospital' ,imgSrc:'/img/Chulalongkorn Hospital.jpg'}}/>
            <Card title='Rajavithi Hospital' imgSrc='/img/Rajavithi Hospital.jpg'/>
            <Card title=' Thammasat University Hospital' imgSrc='/img/Thammasat University Hospital.jpg'/>
        </div>
    );
}
 
export default CardPanel;