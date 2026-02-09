"use client"
import { CSSProperties } from "react"
import styles from "./aboutwithicons.module.css"
import Link from "next/link"
import Shader from "../../misc/Shader/Shader"

export default function AboutWithIcons() {

  const icon = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><defs><mask id="ipSCheckOne0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"/><path stroke="#000" stroke-linecap="round" d="m16 24l6 6l12-12"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)"/></svg>

  const text = ["40+ Years Experience", "Drain & Leak Experts","Family-Owned Business","Honest, Fair Pricing","Reliable Service","Timely Completion"]

  const iconElems = text.map((text, i)=>{
    return(<div key={i} className={styles.icon}>{icon} {text}</div>)
  })

  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <section className={styles.aboutUs}>
        <div className={styles.textWrapper}>
          <h4>About Us</h4>
            <h1>About<br /> <span className="underline">EasTex</span> Plumbing</h1>

            <p>At EasTex Plumbing, we bring over 40 years of trusted experience as a third-generation, family-owned business. We proudly serve both residential and commercial clients with expert plumbing repairs, installations, and drain cleaning. What sets us apart is how we treat our customers—with love, respect, and clear communication. We take the time to explain every job so you feel informed and confident, never talked down to. To us, you're not just a customer—you're the boss.</p>

            <div className={styles.icons}>
              {iconElems}
            </div>

            <Link href={"/contact"} className='main-link'>Get A Quote <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M9 6c0-.852.986-1.297 1.623-.783l.084.076l6 6a1 1 0 0 1 .083 1.32l-.083.094l-6 6l-.094.083l-.077.054l-.096.054l-.036.017l-.067.027l-.108.032l-.053.01l-.06.01l-.057.004L10 19l-.059-.002l-.058-.005l-.06-.009l-.052-.01l-.108-.032l-.067-.027l-.132-.07l-.09-.065l-.081-.073l-.083-.094l-.054-.077l-.054-.096l-.017-.036l-.027-.067l-.032-.108l-.01-.053l-.01-.06l-.004-.057z"></path></svg></Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/faq.webp" alt="image of a supply line" className={styles.mainImg} />
            {/* <Shader background="var(--primary-color)" opacity={.51} zIndex={100}/> */}
            {/* <div className={styles.imgStyle}></div> */}
          </div>
        </div>
    </section>
  )
}
