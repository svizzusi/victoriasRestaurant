import style from './HeroSection.module.css'
import testImage from '../../assets/images/victoriasTestImage.jpeg'
import logo from '../../assets/images/logo.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const HeroSection = () => {
  return (
    <main className={style.heroMainSection}>
      <section className={style.heroSectionHeading}>
        <h1>Victoria's Mexican Restaurant</h1>
        <div className={style.heroMainImageContainer}>
          <img 
          className={style.heroMainLogo}
            src={logo} 
            alt='Banner' 
          />
        </div>
      </section>
        <hgroup className={style.heroSectionSubHeading}>
          <h2>Victoria's Favorites</h2>
        </hgroup>
      <section className={style.HeroSectionCards}>
        <div 
        className={style.HeroSectionCard}
        data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={testImage} alt='#' />
          <h3>Tacos</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam blanditiis cupiditate unde deleniti culpa eius quidem facilis repudiandae quia debitis.</p>
          <span>$13.99</span>
        </div>
        <div 
          className={style.HeroSectionCard}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={testImage} alt='#' />
          <h3>Tacos</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam blanditiis cupiditate unde deleniti culpa eius quidem facilis repudiandae quia debitis.</p>
          <span>$13.99</span>
        </div>
         <div 
          className={style.HeroSectionCard}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={testImage} alt='#' />
          <h3>Tacos</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam blanditiis cupiditate unde deleniti culpa eius quidem facilis repudiandae quia debitis.</p>
          <span>$13.99</span>
        </div>
         <div 
          className={style.HeroSectionCard}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={testImage} alt='#' />
          <h3>Tacos</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam blanditiis cupiditate unde deleniti culpa eius quidem facilis repudiandae quia debitis.</p>
          <span>$13.99</span>
        </div>
        <div 
        className={style.HeroSectionCard}
        data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={testImage} alt='#' />
          <h3>Tacos</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam blanditiis cupiditate unde deleniti culpa eius quidem facilis repudiandae quia debitis.</p>
          <span>$13.99</span>
        </div>
        <div 
          className={style.HeroSectionCard}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={testImage} alt='#' />
          <h3>Tacos</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam blanditiis cupiditate unde deleniti culpa eius quidem facilis repudiandae quia debitis.</p>
          <span>$13.99</span>
        </div>
         <div 
          className={style.HeroSectionCard}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={testImage} alt='#' />
          <h3>Tacos</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam blanditiis cupiditate unde deleniti culpa eius quidem facilis repudiandae quia debitis.</p>
          <span>$13.99</span>
        </div>
         <div 
          className={style.HeroSectionCard}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src={testImage} alt='#' />
          <h3>Tacos</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam blanditiis cupiditate unde deleniti culpa eius quidem facilis repudiandae quia debitis.</p>
          <span>$13.99</span>
        </div>
      </section>
    </main>
  )
};

export default HeroSection;
