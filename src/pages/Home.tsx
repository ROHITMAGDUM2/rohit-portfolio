import Hero from '../components/Hero.tsx';
import Header from '../components/Header.tsx';
import Projects from '../components/Projects.tsx';
import Skills from '../components/Skills.tsx';
import Footer from '../components/Footer.tsx';
import AboutExperience from '../components/AboutExperience.tsx';

const Home = () => (
  <div className="bg-gray-50 min-h-screen">
    <Header />
    <Hero />
    <AboutExperience />
    <main className="max-w-4xl mx-auto px-4">
      <Projects />
      <Skills />
    </main>
    <Footer />
  </div>
);

export default Home;