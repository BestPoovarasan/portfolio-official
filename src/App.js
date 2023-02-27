import './App.css';
import './index.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Profile from './components/profile/Profile';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Profile/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}
export default App;
