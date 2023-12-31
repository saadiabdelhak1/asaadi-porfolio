import './App.scss';
import Skills from './components/skills/Skills';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return <div>
    <section id='Home'>
      <NavBar />
      <Home />
    </section>
    <section id='Skills'><Skills /></section>
    <Projects id='Projects'/>
    <section id='Contact'>
      <Contact />
      <Footer />
    </section>
  </div>;
};

export default App;
