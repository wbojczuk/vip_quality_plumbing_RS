import Link from 'next/link';
import styles from './needhelp.module.css';

export default function NeedHelp(){
return (
 <div className={styles.needHelp}>
    <div className={styles.text}>Need Some Plumbing Done?<br />Get Your Project Started Today!</div>

    <Link href={"/contact"} className='main-link main-link-outline-light'>Get A Quote <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M9 6c0-.852.986-1.297 1.623-.783l.084.076l6 6a1 1 0 0 1 .083 1.32l-.083.094l-6 6l-.094.083l-.077.054l-.096.054l-.036.017l-.067.027l-.108.032l-.053.01l-.06.01l-.057.004L10 19l-.059-.002l-.058-.005l-.06-.009l-.052-.01l-.108-.032l-.067-.027l-.132-.07l-.09-.065l-.081-.073l-.083-.094l-.054-.077l-.054-.096l-.017-.036l-.027-.067l-.032-.108l-.01-.053l-.01-.06l-.004-.057z"></path></svg></Link>
 </div>
)};