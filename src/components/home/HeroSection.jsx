import style from './HeroSection.module.css'
import logo from '../../assets/images/logo.webp'
import victoriasTestImage from '../../assets/images/victoriasTestImage.jpeg'
import Data from './HeroCardData'
import HeroCard from './HeroCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const HeroSection = () => {
  return (
    <main className={style.heroMainSection}>
      <div className={style.heroTopStripe}></div>
      <section className={style.heroSectionHeader}>
        <h1>Victoria's Mexican Restaurant</h1>
        <div className={style.heroMainImageContainer}>
          <img 
          className={style.heroMainImg}
            src={victoriasTestImage} 
            alt='victoriasTestImage' 
          />
        </div>
      </section>
      <section className={style.heroSectionSubHeader}>
        <div className={style.heroSectionLogoContainer}>
          <img 
            className={style.heroSectionLogo}
              src={logo} 
              alt='Logo' 
            />
        </div>
        <h2>Victoria's Favorites</h2>
      </section>
      <section className={style.HeroSectionCards}>
      <div className={style.heroBottomStripe}></div>
        {
            Data.map( item => (
              <HeroCard 
                    key={item.id}
                    item={item}
                />
            ))
        }
        <div className={style.heroBottomStripe}></div>
      </section>
    </main>
  )
};

export default HeroSection;
