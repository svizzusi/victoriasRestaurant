import style from './HeroSection.module.css'
import logo from '../../assets/images/logo.webp'
import Data from './HeroCardData'
import HeroCard from './HeroCard';
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
            alt='Logo' 
          />
        </div>
      </section>
        <hgroup className={style.heroSectionSubHeading}>
          <h2>Victoria's Favorites</h2>
        </hgroup>
        {
            Data.map( item => (
              <HeroCard 
                    key={item.id}
                    item={item}
                />
            ))
        }
    </main>
  )
};

export default HeroSection;
