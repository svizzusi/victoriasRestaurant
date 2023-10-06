import style from './HeroSection.module.css'

const HeroCard = (props) => {
  return (
      <div 
        className={style.heroSectionCard}
        data-aos={`${props.item.dataAOS}`}
      >
        <img 
          className={style.heroSectionCardImg} 
          src={props.item.img} 
          alt={props.item.title} 
        />
        <h3>{props.item.title}</h3>
        <p>{props.item.details}</p>
        <span>{props.item.price}</span>
      </div>
  )
};

export default HeroCard;
