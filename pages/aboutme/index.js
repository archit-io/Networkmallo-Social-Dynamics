import Head from 'next/head'
import styles from '../../styles/Aboutme.module.css'

export default function Aboutme() {
  return (
    <div>
      <Head>
      <title>Networkmallo: About</title>
        <meta name="description" content="Networkmallo Learn the art of realtime networking" />
        <meta property="og:description" content="Networkmallo Learn the art of realtime networking" />
        <meta property="og:title" content="Networkmallo" />
        <meta name="keywords" content="social networking,lifestyle coach,networkmallo,network mallo" />
        <meta property="og:url" content="https://networkmallo.com/about" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainClass}>
        <section>
            <h1>Hi! My name is Archit...</h1>
            <p>I'm a software engineer and a social dynamics coach by profession. I am passionate about how human interactions work and I have been learning, researching, and teaching social dynamics for almost the last ten years. I have spent countless hours simplifying this process to a kind of bare skeleton of principles that can be learned and used effectively by most people.</p>
            <h2>My past</h2>
            <p>I had been a very shy and introverted guy since my childhood. I was unable to communicate effectively due to my introversion. This continued till my college. Then I decided to take matters into my own hands and learn about human communication and behavior. I studied a lot of psychology, self-help, and books about human behavior. However, the more I read the more confused I got. Then one day I found a community of like-minded individuals who were working to study and learn about the same area. I took mentorship from a few of them. They took me out into the real world and made me approach and interact with people. From day one itself, I understood that my life would now never be the same. They taught me concrete and actionable steps that I learned and improvised with great diligence over the years. I realized this skill couldn't be learned by reading books or in college, but it can be learned gradually by deliberately, systematically, and consistently interacting with a large number of people. </p>
        </section>
        <section>
            <img src="/images/archit.jpg" alt="archit" />
        </section>
        </main>

        <section>
            <h2>As a coach</h2>
            <p>In 2018 beginning, I started teaching this system all over India. I usually took three days bootcamps. I quickly gained clientele from diverse professional fields. These have been the most satisfying things that I have done in my life.</p>
        </section>
        <section>
            <h2>Currently</h2>
            <p>Since the COVID-19 began I started giving online consulting. Also, I came to realize that many of my prospects were impacted financially by the pandemic. Therefore, I further streamlined this system and started providing this system online free of cost. For those who have any doubts regarding this, I have kept my email open and also written a number of articles (present in the Article section) to help people understand the system and its underlying concepts better. Also, for those who have further doubts, I have kept open the paid options of online consultation and bootcamps. However, they're not mandatory, and with a certain amount of effort, you should be able to achieve the desired results by yourselves.</p>
        </section>

    </div>
  )
}