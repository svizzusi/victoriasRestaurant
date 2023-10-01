import style from './About.module.css'
import victoriasTestImage from '../../assets/images/victoriasTestImage.jpeg'

const About = () => {
  return (
    <section className={style.aboutSection}>
        <img src={victoriasTestImage} alt='TestImage' className={style.aboutSectionImage}/>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas aliquid non ad quam cum obcaecati, itaque molestias reiciendis ut vero delectus sint, sapiente odio quis doloremque numquam? Quos pariatur nihil harum beatae, illum, molestias iure ipsum quam repudiandae amet at unde porro nesciunt eaque, molestiae architecto neque tempore voluptas cumque ipsam a. Doloremque vero ab obcaecati dolor! Aspernatur quos dolorem eius, qui consequuntur dolore ducimus possimus laboriosam iste dicta veritatis exercitationem nam et. Voluptatem placeat quo fugit nulla. Unde, iure cum ut dolore ad atque at aut dolores. Odio tempore ad repellendus fugit natus commodi, dolorum magnam velit ducimus?</p>
    </section>
  )
};

export default About;
