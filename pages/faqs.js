import Head from 'next/head'
import styles from '../styles/Faqs.module.css'

export default function Faqs() {
  return (
    <div>
      <Head>
      <title>Networkmallo: FAQs</title>
        <meta name="description" content="Learn the art of realtime networking FAQs" />
        <meta property="og:description" content="Learn the art of realtime networking FAQs" />
        <meta property="og:title" content="Networkmallo FAQs" />
        <meta name="keywords" content="social networking,lifestyle coach,networkmallo,network mallo" />
        <meta property="og:url" content="https://networkmallo.com/faqs" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Frequently Asked Questions</h1>
    <section>
        <ol>
            <li>
                <h2 className={styles.h2Class}>Is this system free to learn?</h2>
                <p>Yes, this system is absolutely free to learn. However, if you want you can support me by clicking on - Buy me a coffee.</p>
            </li>
            {/* <li>
                <h2 className={styles.h2Class}>Why have I created this website?</h2>
                <p></p>
            </li> */}
            <li>
                <h2 className={styles.h2Class}>What is the purpose of this website?</h2>
                <p>To teach you a simple system to effectively grow your network by learning to approach and interact with people you're not acquainted with presently.</p>
            </li>
            <li>
                <h2 className={styles.h2Class}>What is this website not about?</h2>
                <p>Although it will indirectly help, this website is not meant to teach the skills for social media networking, dating, etc.</p>
            </li>
            <li>
                <h2 className={styles.h2Class}>Does the system herein really work?</h2>
                <p>Make no mistake, the system I'm giving you is one of the most effective ones in the world (yes you read it right!) for effectively expanding your network. I have been learning about, improvising, and teaching it for almost the last ten years. So, yes it works! But you'll have to trust the system and put in the work.</p>
            </li>
            {/* <li>
                <h2 className={styles.h2Class}>What are the factors that will ensure our success in learning this system?</h2>
                <p>
                    <ol>
                        <li>Revise the principles every week. They should be at your finger tips.</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </p>
            </li> */}
            <li>
                <h2 className={styles.h2Class}>Is this system gender specific?</h2>
                <p>Yes, this system varies according to gender, just because of the fact that interpersonal communication varies according to gender. So while going through it make sure that you check out the section relevant to your gender.</p>
            </li>
        </ol>
    </section>
    </div>
  )
}