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
        <Card title='Chulalongkorn Hospital' img='/img/Chulalongkorn Hospital.jpg'/>
        <Card title='Rajavithi Hospital' img='/img/Rajavithi Hospital.jpg'/>
        <Card title=' Thammasat University Hospital' img='/img/Thammasat University Hospital.jpg'/>


    
      </div>
     
    </main>
  )
}
