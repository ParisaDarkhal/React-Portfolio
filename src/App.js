import { Container, Typography } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Skills />
    </div>
  );
}

export default App;
