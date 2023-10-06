import style from "./Contact.module.css"
import Map from "./Map.jsx";
import { AiOutlinePhone } from 'react-icons/ai';


const Contact = () => {
  return (
    <section className={style.contactSection}>
      <div className={style.contactSectionHeader}>
        <div className={style.contactSectionHeaderLine}></div>
        <h1>Location and Hours</h1>
        <p>757 1st St Gilroy, CA 95020</p>
        <p><AiOutlinePhone/> (408) 848-1052</p>
        <div className={style.contactHoursMapSectionline}></div>
      </div>
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
      <div className={style.contactHoursMapSectionline}></div>
    </section>
  )
};

export default Contact;
