import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

import { Routes, Route } from "react-router-dom";
import Project from "./components/Project";

function App() {
  return (
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Hero />
            <Services />
            <Work />
            <About />
            <Contact />
          </>
        }
      />

      {/* PROJECT PAGE */}
      <Route path="/projects" element={<Project />} />
    </Routes>
  );
}

export default App;