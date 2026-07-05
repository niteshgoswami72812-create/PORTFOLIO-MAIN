import profile from "../assets/profile.jpg";
import '../components/Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="available">
          AVAILABLE FOR WORK
        </p>

        <h1>
          Hi, I'm <span>Nitesh</span>
        </h1>

        <p className="description">
          Hi there 👋 I'm Nitesh! <br /> <br />Python Full Stack Developer specializing in Django, Django REST Framework, React.js, JavaScript, and MySQL. Passionate about building scalable web applications and solving real-world problems.
        </p>

        
      </div>   

      <div className="hero-right">
        <img src={profile} alt="Nitesh" />

        
      </div>
    </section>
  );
}

export default Hero;