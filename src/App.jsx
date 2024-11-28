import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education.jsx";

function App() {

  return (
    <main className="h-full antialiased">
      {/* navbar-section */}
        <Navbar />

      {/* hero-section */}
        <Hero />

        <Projects />

        <Skills />

        <Experience />

        <Education />
    </main>
  )
}

export default App;
