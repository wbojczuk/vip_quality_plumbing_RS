import styles from './formandmap.module.css';
import FreeEstimateForm from '../../homepage/Header/FreeEstimateForm/FreeEstimateForm';

export default function FormAndMap(){
return (
 <div className={styles.formAndMap}>
    <div className={styles.formWrapper}>
        <FreeEstimateForm />
    </div>

    <div className={styles.mapWrapper}>
        <div className={styles.menuCover} >
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55583.1065176817!2d-95.19243045!3d29.9810265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640ac4fc609e075%3A0x96834aefd27812e0!2sAtascocita%2C%20TX%2C%20USA!5e1!3m2!1sen!2suk!4v1749836838639!5m2!1sen!2suk" width="600" height="450" style={{border: 0}}  loading="lazy" ></iframe>
        </div>
    </div>
 </div>
)};