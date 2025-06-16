"use client"

import Link from 'next/link';
import styles from './header.module.css';
import FreeEstimateForm from './FreeEstimateForm/FreeEstimateForm';
import Shader from '../../misc/Shader/Shader';
import { useEffect, useState } from 'react';

export default function Header(){
    const [form, setForm] = useState(<div></div>)

    useEffect(()=>{
        setForm(<FreeEstimateForm />)
    }, [])
return (
 <div className={styles.header}>

    <div className={styles.textWrapper}>

        <h1>Professional <br /> <span className="highlight">Plumbing</span><br /> Services</h1>

        {/* <div className={styles.serving}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26.158 26.158 0 0 0 12 20.758a26.14 26.14 0 0 0 3.262-2.994C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053a25.34 25.34 0 0 1-1.214-.94a28.157 28.157 0 0 1-2.853-2.698C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28.145 28.145 0 0 1-3.796 3.44a16.794 16.794 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"/></svg> <span>Serving Florence, AL</span></div> */}

        <h3>Over 40 Years of Experience You Can Count On.</h3>

        <div className={styles.buttonWrapper}>
            <Link href={"/contact"} className='main-link'>Contact Us <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M9 6c0-.852.986-1.297 1.623-.783l.084.076l6 6a1 1 0 0 1 .083 1.32l-.083.094l-6 6l-.094.083l-.077.054l-.096.054l-.036.017l-.067.027l-.108.032l-.053.01l-.06.01l-.057.004L10 19l-.059-.002l-.058-.005l-.06-.009l-.052-.01l-.108-.032l-.067-.027l-.132-.07l-.09-.065l-.081-.073l-.083-.094l-.054-.077l-.054-.096l-.017-.036l-.027-.067l-.032-.108l-.01-.053l-.01-.06l-.004-.057z"></path></svg></Link>

            <Link href={"/#services"} className='main-link main-link-outline-light'>Services <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M9 6c0-.852.986-1.297 1.623-.783l.084.076l6 6a1 1 0 0 1 .083 1.32l-.083.094l-6 6l-.094.083l-.077.054l-.096.054l-.036.017l-.067.027l-.108.032l-.053.01l-.06.01l-.057.004L10 19l-.059-.002l-.058-.005l-.06-.009l-.052-.01l-.108-.032l-.067-.027l-.132-.07l-.09-.065l-.081-.073l-.083-.094l-.054-.077l-.054-.096l-.017-.036l-.027-.067l-.032-.108l-.01-.053l-.01-.06l-.004-.057z"></path></svg></Link>
        </div>

    </div>
    <div className={styles.formWrapper}>
        {form}
    </div>

    <Shader opacity={.71} background='black' />
    <img src="/img/header-bg.webp" alt="image of bathroom" className="bg-img" />
 </div>
)};