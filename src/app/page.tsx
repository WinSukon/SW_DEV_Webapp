import Banner from '@/components/Banner'
import CardPanel from '@/components/CardPanel'


export default function Home() {
  const data={
    name:'Because we care.'
  }
  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <Banner {...data}/>
    </main>
  )
}
