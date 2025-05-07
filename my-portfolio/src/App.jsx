import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Project from "./components/Project";
import "./FetchProject";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Project />
    </>
  );
}

export default App;
