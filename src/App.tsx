import Hero from './components/Hero';
import Socials from './components/Socials';
import Projects from './components/Projects';

function App() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Hero />
      <Socials />
      <Projects />

      <footer className="py-8 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Portfolio. Built with React & Three.js</p>
      </footer>
    </main>
  );
}

export default App;
