import { Container, Typography } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
    </div>
  );
}

export default App;
