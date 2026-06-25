import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Nit<span>esh</span>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#projects">Work</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <a href="#contact" className="hire-btn">
        Hire Me →
      </a>
    </nav>
  );
}

export default Navbar;