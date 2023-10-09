import style from './HeroSection.module.css'
import logo from '../../assets/images/logo.webp'
import enchiladaTaco from '../../assets/images/enchiladaTaco.webp'
import Data from './HeroCardData'
import HeroCard from './HeroCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const HeroSection = () => {
  return (
    <main className={style.heroMainSection}>
      <section className={style.heroSectionHeader}>
        <h1>Victoria's Mexican Restaurant</h1>
        <div className={style.heroMainImageContainer}>
          <img 
          className={style.heroMainImg}
            src={enchiladaTaco} 
            alt='Enchilada/Taco' 
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

      <section className={style.heroSectionCards}>
        {
            Data.map( item => (
              <HeroCard 
                    key={item.id}
                    item={item}
                />
            ))
        }
      </section>
    </main>
  )
};

export default HeroSection;
