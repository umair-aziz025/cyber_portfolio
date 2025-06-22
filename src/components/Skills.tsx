import React, { useState, useEffect } from 'react';
import { Code, Shield, Search, Settings, Database, Terminal, Lock, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Skills: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  // Update cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2); // Tablet: 2 cards
      } else if (window.innerWidth < 1280) {
        setCardsToShow(3); // Small desktop: 3 cards
      } else {
        setCardsToShow(4); // Large desktop: 4 cards
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

  // Auto-slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev >= 8 - cardsToShow ? 0 : prev + 1 // 8 is the total number of skill categories
      );
    }, 4000); // 4 seconds

    return () => clearInterval(timer);
  }, [cardsToShow]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= skillCategories.length - cardsToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.max(0, skillCategories.length - cardsToShow) : prev - 1
    );
  };
  const skillCategories = [
    {
      icon: Shield,
      title: "Network Security & Infrastructure",
      skills: ["Firewalls", "IDS/IPS", "VPN", "TCP/IP", "Subnetting", "Routing", "Switching"],
      level: 90,
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Search,
      title: "Incident Response & Forensics",
      skills: ["Wireshark", "Tcpdump", "Forensic Analysis", "Malware Analysis", "Threat Hunting"],
      level: 85,
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Settings,
      title: "Vulnerability Assessment & Penetration Testing",
      skills: ["Vulnerability Scans", "Penetration Testing", "Compliance Analysis", "CVSS"],
      level: 80,
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Lock,
      title: "Security Frameworks & Governance",
      skills: ["NIST CSF", "ISO 27001", "CIS Controls", "Risk Management", "Policy Development"],
      level: 88,
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Code,
      title: "Programming & Scripting",
      skills: ["Python", "SQL", "C/C++", "HTML/CSS", "PHP", "Log Parsing", "Automation"],
      level: 75,
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Terminal,
      title: "Linux Administration & Hardening",
      skills: ["Command Line", "SSH", "System Hardening", "Patch Management", "File Integrity"],
      level: 82,
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Database,
      title: "Cryptography & Secure Communications",
      skills: ["Encryption", "SSL/TLS", "Key Management", "PKI", "Digital Signatures"],
      level: 78,
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Professional Skills",
      skills: ["Communication", "Problem Solving", "Attention to Detail", "Quick Learning"],
      level: 92,
      gradient: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-0 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-16 px-6">
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white glow-green">Core Competencies</h2>
          </div>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Comprehensive skill set spanning technical expertise and professional capabilities
          </p>
        </div>
        
        {/* Skills Slider */}
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
              {skillCategories.map((category, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 card-glow card-animated-border rounded-2xl p-4 md:p-6 group hover:scale-105 transition-all duration-500 relative overflow-hidden"
                  style={{ 
                    width: cardsToShow === 1 ? '100vw' : `calc(${100 / cardsToShow}% - ${cardsToShow === 2 ? '0.75rem' : cardsToShow === 3 ? '1rem' : '1.25rem'})`,
                    maxWidth: cardsToShow === 1 ? 'calc(100vw - 3rem)' : 'none',
                    margin: cardsToShow === 1 ? '0 1.5rem' : '0'
                  }}
                >
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4 md:mb-6">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-5 h-5 md:w-6 md:h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white text-xs md:text-sm leading-tight">{category.title}</h3>
                    </div>
                  </div>
                  
                  {/* Proficiency Level */}
                  <div className="mb-3 md:mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-400">Proficiency</span>
                      <span className="text-xs font-bold text-green-400">{category.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 md:h-2">
                      <div 
                        className={`bg-gradient-to-r ${category.gradient} h-1.5 md:h-2 rounded-full transition-all duration-1000 ease-out shadow-lg shadow-green-500/30`}
                        style={{ width: `${category.level}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {category.skills.slice(0, cardsToShow === 1 ? 7 : 5).map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-green-500/10 hover:bg-green-500/20 text-green-400 px-2 md:px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 transform hover:scale-105 border border-green-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {category.skills.length > (cardsToShow === 1 ? 7 : 5) && (
                      <span className="text-green-400/60 text-xs px-2 py-1">
                        +{category.skills.length - (cardsToShow === 1 ? 7 : 5)} more
                      </span>
                    )}
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 pt-3 md:pt-4 border-t border-green-500/20">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-3 h-3 ${star <= Math.floor(category.level / 20) ? 'text-green-400 fill-current' : 'text-gray-600'}`} 
                      />
                    ))}
                    <span className="text-xs text-gray-400 ml-2 hidden md:inline">Expert Level</span>
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
            disabled={currentSlide >= skillCategories.length - cardsToShow}
          >
            <ChevronRight className="w-5 h-5 text-green-400" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {Array.from({ length: Math.max(1, skillCategories.length - cardsToShow + 1) }).map((_, index) => (
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
        </div>        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16 px-6">
          <div className="card-glow card-animated-border rounded-2xl p-6 md:p-8 max-w-4xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white glow-green">Ready to Leverage These Skills?</h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-base md:text-lg">
              Let's discuss how my expertise can strengthen your cybersecurity posture
            </p>
            <button 
              onClick={() => (window as any).navigateToContact?.()}
              className="btn-primary btn-pulse-glow flex items-center gap-2 justify-center text-center mx-auto"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;