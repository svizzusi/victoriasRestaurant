import style from './HeroSection.module.css'
import testImage from '../../assets/images/victoriasTestImage.jpeg'

const HeroSection = () => {
  return (
    <main className={style.heroMainSection}>
      <section className={style.heroSectionHeading}>
        <h1>Victoria's Mexican Restaurant</h1>
        <img src={testImage} alt='Banner' />
      </section>
      <hgroup className={style.heroSectionSubHeading}>
        <h2>Victoria's Favorites</h2>
      </hgroup>
      <section className={style.HeroSectionCards}>
        <div className={style.HeroSectionCard}>
          <img src={testImage} alt='#' />
          <h3>Tacos</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam blanditiis cupiditate unde deleniti culpa eius quidem facilis repudiandae quia debitis.</p>
          <span>$13.99</span>
        </div>
        <div className={style.HeroSectionCard}>
          <img src={testImage} alt='#' />
          <h3>Tacos</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam blanditiis cupiditate unde deleniti culpa eius quidem facilis repudiandae quia debitis.</p>
          <span>$13.99</span>
        </div>
        <div className={style.HeroSectionCard}>
          <img src={testImage} alt='#' />
          <h3>Tacos</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam blanditiis cupiditate unde deleniti culpa eius quidem facilis repudiandae quia debitis.</p>
          <span>$13.99</span>
        </div>
        <div className={style.HeroSectionCard}>
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
