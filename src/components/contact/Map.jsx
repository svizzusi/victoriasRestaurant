import style from './Contact.module.css'

const Map = () => {
  

  return ( 
      <div className={style.mapContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.8048142808925!2d-121.58632198782726!3d37.01445257207073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8091e3ccdefb37d1%3A0x701dd0c7ed18b44b!2sVictoria&#39;s%20Mexican%20Restaurant!5e0!3m2!1sen!2sus!4v1696170729695!5m2!1sen!2sus" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
  )
};

export default Map;
