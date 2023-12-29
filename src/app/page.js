import Image from 'next/image'
import Index from '@/components/Index/Index'
import Goals from '@/components/Goals/Goals'
import About from '@/components/About/About'
import Quote from '@/components/Quote/Quote'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Index/>
        <Goals/>
        <About/>
        <Quote/>
    </main>
  )
}
