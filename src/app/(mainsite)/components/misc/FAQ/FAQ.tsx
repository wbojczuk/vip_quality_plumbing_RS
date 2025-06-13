import Link from "next/link"
import styles from "./faq.module.css"
import FAQItem from "./FAQItem"
import faqData from "@/app/(mainsite)/data/faqData"
import Shader from "../Shader/Shader"

export default function FAQ() {
    const faqElems = faqData.map((data, i)=>{
        return <FAQItem {...data} key={i} />
    })
  return (
    <section className={`${styles.section}`}>

       <div className={styles.faqWrapper}>
        
         {faqElems}
          <Link className={`main-link ${styles.mobileShow}`} href={"/contact"}>Contact Us <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M9 6c0-.852.986-1.297 1.623-.783l.084.076l6 6a1 1 0 0 1 .083 1.32l-.083.094l-6 6l-.094.083l-.077.054l-.096.054l-.036.017l-.067.027l-.108.032l-.053.01l-.06.01l-.057.004L10 19l-.059-.002l-.058-.005l-.06-.009l-.052-.01l-.108-.032l-.067-.027l-.132-.07l-.09-.065l-.081-.073l-.083-.094l-.054-.077l-.054-.096l-.017-.036l-.027-.067l-.032-.108l-.01-.053l-.01-.06l-.004-.057z"></path></svg></Link>
       </div>

       <div className={styles.imgWrapper}>
        <h3 id="faqHeading" className="small-heading">Frequently Asked <span className="highlight-gradient">Questions</span></h3>
          <div className={styles.imgContainer}>
            <img src="/img/faqq.png" alt="iamge of shower" />

              <div className={styles.imgStyle1}></div>
              <div className={styles.imgStyle2}></div>

              <div className={styles.imgText}>We Will Respond Fast To Any Questions!</div>
          </div>
          <Link className={`main-link ${styles.mobileHide}`} href={"/contact"}>Contact Us <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M9 6c0-.852.986-1.297 1.623-.783l.084.076l6 6a1 1 0 0 1 .083 1.32l-.083.094l-6 6l-.094.083l-.077.054l-.096.054l-.036.017l-.067.027l-.108.032l-.053.01l-.06.01l-.057.004L10 19l-.059-.002l-.058-.005l-.06-.009l-.052-.01l-.108-.032l-.067-.027l-.132-.07l-.09-.065l-.081-.073l-.083-.094l-.054-.077l-.054-.096l-.017-.036l-.027-.067l-.032-.108l-.01-.053l-.01-.06l-.004-.057z"></path></svg></Link>

       </div>
      
        <img src='/img/faq-bg.png' alt='Image of house' className='bg-img' />
        <Shader background="var(--secondary-color)" opacity={0.86} />
    </section>
  )
}
