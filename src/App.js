import { Container, Typography } from "@mui/material";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

import Projects from "./components/projects/Projects";
import ContactMe from "./components/contactMe/ContactMe";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
