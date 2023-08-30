// "use-client"

import Image from 'next/image'
import styles from './page.module.css'
import Hero from './screens/landing/hero'
import Services from './screens/landing/services'
import Footer from './components/footer/footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <Services/>
      <Footer/>
    </main>
  )
}
