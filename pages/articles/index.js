import Head from 'next/head'
import Link from 'next/link';

export default function Articles() {
  return (
    <div>
      <Head>
      <title>Networkmallo: Articles</title>
        <meta name="description" content="Learn the art of realtime networking system following up" />
        <meta property="og:description" content="Learn the art of realtime networking system following up" />
        <meta property="og:title" content="Networkmallo following up" />
        <meta name="keywords" content="social networking,lifestyle coach,networkmallo,network mallo" />
        <meta property="og:url" content="https://networkmallo.com/articles" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Articles</h1>
        <ul>
            <li>Read and understand <Link href='/articles/read'><a aria-label="read and understand">click here</a></Link></li>
            <li>Principle for working of this system <Link href='/articles/principle'><a aria-label="principles">click here</a></Link></li>
            <li>Positivity <Link href='/articles/positivity'><a aria-label="positivity">click here</a></Link></li>
            <li>Grooming <Link href='/articles/grooming'><a aria-label="grooming">click here</a></Link></li>
            <li>Exercising <Link href='/articles/exercising'><a aria-label="exercising">click here</a></Link></li>
            <li>Body language <Link href='/articles/bodylanguage'><a aria-label="body language">click here</a></Link></li>
            <li>Conversational ninja <Link href='/articles/conversation'><a aria-label="art of conversation">click here</a></Link></li>
            <li>Leading to building connection <Link href='/articles/leading'><a aria-label="leading">click here</a></Link></li>
            <li>Following up <Link href='/articles/followingup'><a aria-label="following up">click here</a></Link></li>
            <li>Practice-1 <Link href='/articles/practice1'><a aria-label="practice part one">click here</a></Link></li>
            <li>Practice-2 <Link href='/articles/practice2'><a aria-label="practice part two">click here</a></Link></li>
            <li>Making mistakes <Link href='/articles/mistakes'><a aria-label="mistakes">click here</a></Link></li>
            <li>Procrastination <Link href='/articles/procrastination'><a aria-label="procrastination">click here</a></Link></li>
            <li>Neediness <Link href='/articles/neediness'><a aria-label="neediness">click here</a></Link></li>

        </ul>
      </main>

    </div>
  )
}