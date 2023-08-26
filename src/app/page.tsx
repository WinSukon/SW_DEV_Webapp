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
      <h2>Hospitals</h2>
      <div className={styles.cards}>
        <Card title='Chulalongkorn Hospital' img='/img/cardimg.avif'/>
        <Card title='Rajavithi Hospital' img='/img/cardimg.avif'/>

    
      </div>

    </main>
  )
}
