import style from './Footer.module.css'
import { BsYelp } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className={style.footerContainer}>  
      <footer className={style.footer}>
        <span className={style.footerLogo}>Victoria's Restaurant</span>
        <div className={style.footerAddress}>
          <a 
            href='https://www.google.com/maps/place/757+1st+St,+Gilroy,+CA+95020/@37.0136786,-121.5870736,17z/data=!3m1!4b1!4m6!3m5!1s0x8091e232beab13a5:0x363ee1aa7b293300!8m2!3d37.0136786!4d-121.5844987!16s%2Fg%2F11ggr9jjgc?entry=ttu' 
            target="_blank">
            757 1st St Gilroy, CA 95020
          </a>
        </div>
        <div className={style.footerHours}>
          <span>Sun & Mon Closed</span>
          <span>Tue- Sat 11:00 AM - 8:00 PM</span>
        </div>
        <div>
          <a 
            href='https://www.yelp.com/biz/victorias-mexican-restaurant-gilroy' 
            target="_blank">
              <BsYelp className={style.footerSocialLink}/>
          </a>
        </div>
      </footer>
    </div>
  )
};

export default Footer;
