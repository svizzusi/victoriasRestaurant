import style from './About.module.css'
import victoriasTestImage from '../../assets/images/victoriasTestImage.jpeg'

const About = () => {
  return (
    <section className={style.aboutSection}>
        <img src={victoriasTestImage} alt='TestImage' className={style.aboutSectionImage}/>
        <h1>About Us</h1>
        <p>Welcome to Victoria's Mexican Restaurant, a beloved Gilroy, California landmark for over four decades. Founded in 1981, we've become a cherished tradition in our community, serving multiple generations. Our family-run establishment, named after our matriarch, Victoria, was started by her daughter, Linda, as a tribute to her mother. Linda, along with her cherished sisters, Carmen and Maria, has lovingly nurtured this restaurant.</p>

        <p>We proudly remember Don, Linda's son, a charismatic Elvis Presley impersonator who was adored by our patrons. Don graced our famed Thursday karaoke nights, and his memory lives on through photos throughout the restaurant.</p>

        <p>Today, Linda's daughter, Vicki, named after her beloved grandmother, manages the restaurant and a Pilates studio next door. Our commitment to family and community shines through every dish we serve.</p>

        <p>Since 1981, we've been honored to serve multiple generations of families. We invite you to become part of our extended family at Victoria's! Join us soon for a warm, unforgettable dining experience</p>
    </section>
  )
};

export default About;
