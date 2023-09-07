import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import ClientCompCard from '@/components/InteractiveCard'


export default function Home() {
  const data={
    name:'Because we care.'
  }
  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <Banner {...data}/>
  
      <div className="flex flex-row ">
        <Card {...{title:'Chulalongkorn Hospital' ,imgSrc:'/img/Chulalongkorn Hospital.jpg'}}/>
        <Card title='Rajavithi Hospital' imgSrc='/img/Rajavithi Hospital.jpg'/>
        {/* <Card title=' Thammasat University Hospital' imgSrc='/img/Thammasat University Hospital.jpg'/> */}
        <ClientCompCard ><Card title=' Thammasat University Hospital' imgSrc='/img/Thammasat University Hospital.jpg'/></ClientCompCard>
      </div>
     
    </main>
  )
}
