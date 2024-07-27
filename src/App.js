import './app.scss'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/hero';
import Parallax from './components/Parallax/Parallax';
import Skill from './components/Skills/Skill';
import Projects from './components/Projects/Project';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className="container">
      <section id="Home Page">
        <Navbar />
        <Hero />
      </section>
      <Parallax type="Skills"/>
      <section id="Skills"><Skill /></section>
      <Parallax type="Works"/>
      <section id="Works"><Projects/></section>
      <section id="Contact"><Contact /></section>
    </div>
  );
}

export default App;
