import style from './Footer.module.css'
import {Link} from 'react-router-dom'
import { BsYelp } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className={style.footerContainer}>  
      <footer className={style.footer}>
        <span className={style.footerLogo}>Victoria's Restaurant</span>
        <div className={style.footerAddress}>
          <Link>757 1st St Gilroy, CA 95020</Link>
        </div>
        <div className={style.footerHours}>
          <span>Mon Closed</span>
          <span>Tue 11:00 AM - 8:00 PM</span>
          <span>Wed 11:00 AM - 8:00 PM</span>
          <span>Thu 11:00 AM - 8:00 PM</span>
          <span>Fri 11:00 AM - 8:00 PM</span>
          <span>Sat 11:00 AM - 8:00 PM</span>
          <span>Sun Closed</span>
        </div>
        <div className={style.footerSocialLink}>
          <BsYelp />
        </div>
      </footer>
    </div>
  )
};

export default Footer;
