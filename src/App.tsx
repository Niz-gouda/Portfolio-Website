import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Certificates } from './components/Certificates/Certificates';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Certificates />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
