import { About } from './components/About/About';
import { Credentials } from './components/Credentials/Credentials';
import { Experience } from './components/Experience/Experience';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Principles } from './components/Principles/Principles';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Credentials />
        <Principles />
      </main>
      <Footer />
    </>
  );
}
