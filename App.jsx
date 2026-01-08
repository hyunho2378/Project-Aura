import Navbar from './components/Navbar';
import Hero from './components/Hero';

/**
 * AURA Landing Page - Main Application
 * 
 * A hyper-personalized wellness commerce platform featuring
 * immersive 3D experiences and data-driven beauty solutions.
 */
function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] overflow-hidden">
      {/* Navigation Overlay */}
      <Navbar />

      {/* Hero Section - Cinematic Intro */}
      <main>
        <Hero />
      </main>

      {/* 
        Future sections will be added below:
        - About Section
        - Diagnosis Section  
        - Shop Section
        - Footer
      */}
    </div>
  );
}

export default App;
