import React, { useState } from 'react';
import { Shield, Mail, Phone, MapPin, Linkedin, Download, Target, TrendingUp, Award } from 'lucide-react';

const Summary: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download process
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Umair_Aziz_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 1000);
  };

  const highlights = [
    { icon: Shield, label: "Security Frameworks", value: "NIST, ISO 27001" },
    { icon: TrendingUp, label: "Threat Reduction", value: "30% Improvement" },
    { icon: Award, label: "Certifications", value: "10+ Completed" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Profile & Info Section */}
            <div className="text-center lg:text-left">
              {/* Profile Picture */}
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="w-48 h-48 relative group">
                  {/* Animated border rings */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-spin-slow opacity-75"></div>
                  <div className="absolute inset-2 rounded-full bg-gradient-to-r from-green-600 via-green-400 to-green-500 animate-spin-slow-reverse opacity-50"></div>
                  
                  {/* Profile picture container */}
                  {/* <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <Shield className="w-20 h-20 text-black opacity-80" />
                    </div>
                  </div> */}

                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/profile.png" 
                      alt="Umair Aziz Profile" 
                      className="w-full h-full object-cover"
                    /></div>
                  
                  {/* Status indicator */}
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-4 border-black shadow-lg animate-pulse"></div>
                </div>
              </div>

              {/* Name & Title */}
              <div className="mb-8">
                <h1 className="text-6xl lg:text-7xl font-bold mb-4 glow-green leading-tight">
                  UMAIR AZIZ
                </h1>
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-20"></div>
                  <h2 className="text-2xl lg:text-3xl text-green-400 font-medium tracking-wide">
                    Cybersecurity Analyst
                  </h2>
                  <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent flex-1 max-w-20"></div>
                </div>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Protecting digital assets and securing tomorrow's technology landscape through innovative cybersecurity solutions
                </p>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-3 card-glow rounded-xl px-4 py-3 hover:scale-105 transition-all duration-300 group">
                  <MapPin className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" />
                  <span className="text-sm font-medium text-white">Mirpur, AJK</span>
                </div>
                <div className="flex items-center gap-3 card-glow rounded-xl px-4 py-3 hover:scale-105 transition-all duration-300 group">
                  <Phone className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" />
                  <span className="text-sm font-medium text-white">+92 3146018728</span>
                </div>
                <div className="flex items-center gap-3 card-glow rounded-xl px-4 py-3 hover:scale-105 transition-all duration-300 group">
                  <Mail className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" />
                  <span className="text-sm font-medium text-white">umairaziz682@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 card-glow rounded-xl px-4 py-3 hover:scale-105 transition-all duration-300 group">
                  <Linkedin className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" />
                  <span className="text-sm font-medium text-white">umairaziz001</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="btn-primary btn-pulse-glow flex items-center gap-2 justify-center text-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isDownloading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      Download Resume
                    </>
                  )}
                </button>
                <button 
                  onClick={() => (window as any).navigateToContact?.()}
                  className="btn-secondary btn-pulse-glow flex items-center gap-2 justify-center text-center"
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Professional Summary & Highlights */}
            <div className="space-y-8">
              {/* Summary Card */}
              <div className="card-glow card-animated-border rounded-2xl p-8 relative overflow-hidden group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Target className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Professional Summary</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Cybersecurity Analyst with hands-on experience in incident response, network security, and vulnerability management. 
                      Proficient in using tools like Wireshark, Nessus, and IDS/IPS to analyze threats and secure systems. 
                      Skilled in applying NIST, ISO 27001, and CIS frameworks to develop security policies and playbooks. 
                      Combines technical expertise in Python and Linux with a proactive approach to safeguarding digital assets and mitigating emerging threats.
                    </p>
                  </div>
                </div>

                {/* Key Strengths */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 font-medium text-sm">Network Security</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 font-medium text-sm">Incident Response</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 font-medium text-sm">Vulnerability Assessment</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300 font-medium text-sm">Risk Management</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Key Highlights</h3>
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="card-glow card-animated-border rounded-xl p-4 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <highlight.icon className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 font-medium">{highlight.label}</p>
                        <p className="text-lg font-bold text-white">{highlight.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;