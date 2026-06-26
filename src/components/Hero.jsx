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
          Hi there 👋 I'm Nitesh! I'm a Python Full Stack developer
          and lifelong learner who enjoys building modern web
          applications, solving real-world problems, and
          exploring new technologies.
        </p>

        
      </div>

      <div className="hero-right">
        <img src={profile} alt="Nitesh" />

        
      </div>
    </section>
  );
}

export default Hero;