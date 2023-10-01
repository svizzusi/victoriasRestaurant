import style from "./Contact.module.css"
import Map from "./Map.jsx";
import { AiOutlinePhone } from 'react-icons/ai';


const Contact = () => {
  return (
    <section className={style.contactSection}>
        <h1>Location and Hours</h1>
        <p>757 1st St Gilroy, CA 95020</p>
        <p><AiOutlinePhone/> (408) 848-1052</p>
        <section className={style.contactHoursMapSection}>
            <Map />
            <div className={style.contactHours}>
                <span>Sun & Mon Closed</span>
                <span>Tue 11:00 AM - 8:00 PM</span>
                <span>Wed 11:00 AM - 8:00 PM</span>
                <span>Thu 11:00 AM - 8:00 PM</span>
                <span>Fri 11:00 AM - 8:00 PM</span>
                <span>Sat 11:00 AM - 8:00 PM</span>
            </div>
            </section>
    </section>
  )
};

export default Contact;
