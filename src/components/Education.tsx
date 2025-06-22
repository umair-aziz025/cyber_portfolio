import React from 'react';
import { GraduationCap, Globe, BookOpen, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const courses = ["Computer Networks", "Network Security", "Operating Systems", "Database Administration", "Cryptography", "Ethical Hacking"];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-black" />
              </div>
              <h2 className="text-5xl font-bold text-white glow-green">Education</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="card-glow card-animated-border rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Bachelor of Science</h3>
                    <p className="text-green-400 font-medium">Information Technology</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">MUST University AJK</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Expected Graduation: September 2025</span>
                  </div>
                </div>
                
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course, index) => (
                      <span 
                        key={index}
                        className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium border border-green-500/30 hover:bg-green-500/30 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="mt-6 pt-6 border-t border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-3">Academic Focus:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-gray-400 text-sm">Specializing in cybersecurity and network infrastructure</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-gray-400 text-sm">Focus on practical application of security frameworks</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-gray-400 text-sm">Research in incident response and threat analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages & Skills */}
            <div className="space-y-8">
              {/* Languages */}
              <div className="card-glow card-animated-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Languages</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div>
                      <span className="text-lg font-semibold text-white">English</span>
                      <p className="text-gray-400 text-sm">Professional Proficiency</p>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div key={dot} className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div>
                      <span className="text-lg font-semibold text-white">Urdu</span>
                      <p className="text-gray-400 text-sm">Native Speaker</p>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div key={dot} className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Skills */}
              <div className="card-glow card-animated-border rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Additional Qualifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Research & Technical Writing</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Project Management</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Team Leadership</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Continuous Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;