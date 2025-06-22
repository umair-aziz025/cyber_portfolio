import React, { useState, useEffect } from 'react';
import { FileText, Network, Shield, Code, Search, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Update cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Tablet: 2 cards
      } else {
        setCardsToShow(3); // Desktop: 3 cards
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  // Reset slide when cardsToShow changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [cardsToShow]);

  const projects = [
    {
      icon: FileText,
      title: "Incident Response Playbook",
      description: "Designed a comprehensive playbook that outlines procedures for identifying, containing, and eradicating malware infections.",
      details: [
        "Incorporated real-world phishing and malware tactics",
        "Defined escalation paths for critical incidents",
        "Integrated digital forensics steps for evidence preservation"
      ],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Network,
      title: "Network Traffic Analysis",
      description: "Set up a virtual network using open-source VM instances; deployed Snort IDS to monitor live traffic.",
      details: [
        "Captured packet data with Wireshark and Tcpdump",
        "Identified anomalies such as suspicious port scans",
        "Compiled threat matrix mapping to MITRE ATT&CK tactics"
      ],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Vulnerability Assessment for SMB",
      description: "Performed a full vulnerability scan on a small business network using tools like Nmap and Nessus.",
      details: [
        "Discovered critical services with outdated patches",
        "Prioritized remediation plans based on business impact",
        "Provided mitigation recommendations and firewall adjustments"
      ],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Code,
      title: "Security Data Extraction",
      description: "Built Python scripts to parse and extract IOCs from large security log files.",
      details: [
        "Automated generation of summary reports",
        "Highlighted IP addresses, timestamps, and event types",
        "Integrated output with centralized SQLite database"
      ],
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Search,
      title: "Phishing & Data Breach Analysis",
      description: "Analyzed documented phishing incidents and Point-of-Sale breaches; identified common attack vectors.",
      details: [
        "Evaluated AI-related ransomware breaches",
        "Applied NIST CSF and ISO 27001 controls",
        "Performed root cause analysis on major public data breach"
      ],
      gradient: "from-green-500 to-green-600"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => 
        (prev + 1) % Math.max(1, projects.length - cardsToShow + 1)
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      (prev + 1) % Math.max(1, projects.length - cardsToShow + 1)
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.max(0, projects.length - cardsToShow) : prev - 1
    );
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-0 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-16 px-6">
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white glow-green">Projects & Case Studies</h2>
          </div>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Hands-on experience with real-world cybersecurity challenges and solutions
          </p>
        </div>
        
        {/* Projects Slider */}
        <div className="relative">
          {/* Navigation Buttons - Hide on mobile, show on larger screens */}
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-green-500/20 hover:bg-green-500/40 border border-green-500/30 rounded-full items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronLeft className="w-6 h-6 text-green-400" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-green-500/20 hover:bg-green-500/40 border border-green-500/30 rounded-full items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <ChevronRight className="w-6 h-6 text-green-400" />
          </button>

          {/* Cards Container */}
          <div className={`overflow-hidden ${cardsToShow === 1 ? 'px-0' : 'px-4 md:px-16'}`}>
            <div 
              className={`flex transition-transform duration-500 ease-in-out ${cardsToShow === 1 ? 'gap-0' : 'gap-4 md:gap-6'}`}
              style={{ transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)` }}
            >
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 card-glow card-animated-border rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300"
                  style={{ 
                    width: cardsToShow === 1 ? '100vw' : `calc(${100 / cardsToShow}% - ${cardsToShow === 2 ? '0.75rem' : '1.25rem'})`,
                    maxWidth: cardsToShow === 1 ? 'calc(100vw - 3rem)' : 'none',
                    margin: cardsToShow === 1 ? '0 1.5rem' : '0'
                  }}
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <div className="p-4 md:p-6">
                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className="w-5 h-5 md:w-6 md:h-6 text-black" />
                      </div>
                      <h3 className="font-bold text-white text-base md:text-lg leading-tight">{project.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">{project.description}</p>
                    
                    <div className="space-y-2">
                      {project.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 bg-green-500/20 hover:bg-green-500/40 border border-green-500/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5 text-green-400" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="w-10 h-10 bg-green-500/20 hover:bg-green-500/40 border border-green-500/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
              disabled={currentSlide >= projects.length - cardsToShow}
            >
              <ChevronRight className="w-5 h-5 text-green-400" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8">
            {Array.from({ length: Math.max(1, projects.length - cardsToShow + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-green-500 shadow-lg shadow-green-500/50' 
                    : 'bg-green-500/30 hover:bg-green-500/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;