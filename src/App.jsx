import Navbar from './components/Navbar.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import GitHubActivity from "./components/GitHubActivity";

export default function App() {
  return <div className="app-shell">
    <ParticleBackground />
    <CustomCursor />
    <div className="site-content">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <GitHubActivity />
        <Education />
        <Achievements />
        
        <Contact />
      </main>
    </div>
  </div>;
}
