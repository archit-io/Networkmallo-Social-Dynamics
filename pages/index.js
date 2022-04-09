import Head from 'next/head'
import Image from 'next/image'
import Landing from '../components/Landing/landing'
import Navigation from '../components/Navigation'

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>Networkmallo.com</title>
        <meta name="description" content="Learn the art of realtime networking" />
        <meta name="keywords" content="social networking, lifestyle coach" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  )
}
