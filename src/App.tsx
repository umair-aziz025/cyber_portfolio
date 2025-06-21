import { useState, useEffect } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Dashboard from './components/Dashboard';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Expose navigation function globally for action buttons
  useEffect(() => {
    (window as any).navigateToContact = () => setCurrentPage('contact');
    return () => {
      delete (window as any).navigateToContact;
    };
  }, []);

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Renders the appropriate component based on the current page.
 * - 'home': Renders the Summary component.
 * - 'skills': Renders the Skills component.
 * - 'experience': Renders the Experience component.
 * - 'projects': Renders the Projects component.
 * - 'certifications': Renders the Certifications component.
 * - 'education': Renders the Education component.
 * - 'contact': Renders the Contact component.
 * Defaults to rendering the Summary component if no match is found.
 */

/*******  65d132c8-c7d8-4fde-92d2-c520b9e9dc47  *******/
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Summary />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'dashboard':
        return <Dashboard />;
      case 'certifications':
        return <Certifications />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <Summary />;
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Sophisticated Dark + Green Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-radial from-green-500/10 via-transparent to-transparent animate-pulse"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern animate-grid-move"></div>
        </div>
      </div>
      
      <div className="relative z-10">
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main className="min-h-screen pt-20">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;