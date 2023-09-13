import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import ClientCompCard from '@/components/InteractiveCard'
import CardPanel from '@/components/CardPanel'


export default function Home() {
  const data={
    name:'Because we care.'
  }
  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <Banner {...data}/>
      <CardPanel></CardPanel>
    
     
    </main>
  )
}
