import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/navbar/navbar'
import Layout from '../src/layout/layout'
import TituloMain from '../src/components/tituloMain/tituloMain'
import TarjetaMain from '../src/components/tarjetasMain/tarjetasMain'
import Button from '@mui/material/Button'
import Tarjetas from '../src/components/tarjetasMain/tarjetass_dos'
import imagen1 from '../img/donadores.jpg'


const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>


      <main className={styles.main}>
        <TituloMain />
        <h1 className={styles.empiezaDonar}>Empieza a Donar</h1>
         <Tarjetas />
      </main>

    </Layout>
  )
}

export default Home
