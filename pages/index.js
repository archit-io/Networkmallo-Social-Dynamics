import Head from 'next/head'
import Landing from '../components/Landing/landing'

export default function LandingPage() {
  return (
    <div>
      <Head>
        <title>Networkmallo.com</title>
        <meta name="description" content="Learn the art of realtime networking" />
        <meta property="og:description" content="Learn the art of realtime networking" />
        <meta property="og:title" content="Networkmallo.com" />
        <meta name="keywords" content="social networking,lifestyle coach,networkmallo,network mallo" />
        <meta property="og:url" content="https://networkmallo.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  )
}
