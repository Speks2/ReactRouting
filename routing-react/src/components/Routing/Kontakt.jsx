import styles from './Kontakt.module.scss';



export function Kontakt() {


    return (

    <div className={styles.Kontakt}>
      <h2>Contact Us</h2>
      <img src="/src/assets/images/contactUs.jpg" alt="contactBackground" />
      <img src="/src/assets/images/contactUsImage.jpg" alt="contactUsImage" height={'500px'} width={'350px'}/>
    </div>
    
    );
}