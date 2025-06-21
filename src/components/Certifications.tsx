import React from 'react';
import { Award, BookOpen } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    "Cybersecurity Professional Certificate – Google",
    "IBM cybersecurity analyst professional certificate – IBM",
    "CompTIA Network+ (N10-008) – Packt - In Progress",
    "IBM IT Fundamentals for Cybersecurity – IBM",
    "Applied Cryptography – University of Colorado System",
    "Advanced Network Security – Learn Quest",
    "Security Analyst Fundamentals – IBM",
    "Cybersecurity Attack and Defense Fundamentals – EC-Council",
    "Career Essentials in Data Analysis – Microsoft & LinkedIn",
    "Certified HTML, CSS, WordPress Developer - Udemy",
    "Google AI Essentials - Google"
  ];

  const workshops = [
    { title: "Analyzing Case Study Layouts & Phishing Case Studies", duration: "2 hours" },
    { title: "Analyzing PoS & Insider Breach Case Studies", duration: "3 hours" },
    { title: "Analyzing AI-Related Breaches & Ransomware Case Studies", duration: "2 hours" },
    { title: "Analyzing Incident Response & Digital Forensics Case Studies", duration: "2 hours" },
    { title: "Analyzing Penetration Testing & Compliance Case Studies", duration: "Final Project" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-black" />
              </div>
              <h2 className="text-5xl font-bold text-white glow-green">Certifications & Training</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="card-glow card-animated-border rounded-lg p-4 hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-green-500/50"></div>
                      <p className="text-gray-300 font-medium">{cert}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Training & Workshops */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Training & Workshops</h3>
              </div>
              
              <div className="space-y-4">
                {workshops.map((workshop, index) => (
                  <div 
                    key={index}
                    className="card-glow card-animated-border rounded-lg p-4 hover:scale-105 transition-all duration-300"
                  >
                    <h4 className="font-semibold text-white mb-2">{workshop.title}</h4>
                    <div className="flex items-center gap-2">
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30">
                        {workshop.duration}
                      </span>
                    </div>
                  </div>
                ))}
                
                <div className="card-glow card-animated-border rounded-lg p-6 mt-6">
                  <h4 className="font-bold text-green-400 mb-3 text-lg">Key Takeaways:</h4>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400 text-sm">Gained hands-on experience applying incident response frameworks to actual breach scenarios</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400 text-sm">Enhanced practical skills in digital forensics and evidence collection</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-400 text-sm">Developed proficiency in penetration testing methodologies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card-glow card-animated-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">11+</div>
              <div className="text-gray-400">Certifications</div>
            </div>
            <div className="card-glow card-animated-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">5</div>
              <div className="text-gray-400">Workshops</div>
            </div>
            <div className="card-glow card-animated-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-gray-400">Study Hours</div>
            </div>
            <div className="card-glow card-animated-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-400">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;