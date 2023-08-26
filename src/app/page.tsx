import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from '@/components/Card'

export default function Home() {
  const data={
    name:'jakrin sukonpongpao'
  }
  return (
    <main className={styles.main}>
      <Banner {...data}/>
  
      <div className={styles.cards}>
        <Card title='Chulalongkorn Hospital' imgSrc='/img/Chulalongkorn Hospital.jpg'/>
        <Card title='Rajavithi Hospital' imgSrc='/img/Rajavithi Hospital.jpg'/>
        <Card title=' Thammasat University Hospital' imgSrc='/img/Thammasat University Hospital.jpg'/>


    
      </div>
     
    </main>
  )
}
