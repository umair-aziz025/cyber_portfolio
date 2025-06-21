import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 text-black" />
              </div>
              <h2 className="text-5xl font-bold text-white glow-green">Professional Experience</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="card-glow card-animated-border rounded-2xl p-8 hover:scale-105 transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 glow-green">Cybersecurity Analyst</h3>
                <p className="text-green-400 font-medium mb-2 text-lg">Internal Security Team</p>
              </div>
              <div className="flex flex-col lg:items-end gap-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Feb 2023 – Present</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Mirpur, AJK</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-green-500/50"></div>
                <p className="text-gray-300">
                  Analyzed network traffic logs and conducted forensic analysis using Wireshark and Tcpdump 
                  to identify suspicious patterns and mitigate potential security threats.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-green-500/50"></div>
                <p className="text-gray-300">
                  Developed and refined incident response playbooks—detailing containment, eradication, 
                  and recovery steps—for malware, phishing, and insider breach scenarios.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-green-500/50"></div>
                <p className="text-gray-300">
                  Collaborated with development teams to create secure coding training materials, 
                  reducing application-layer vulnerabilities by <span className="text-green-400 font-semibold">30%</span>.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-green-500/50"></div>
                <p className="text-gray-300">
                  Assisted in vulnerability assessments for a small enterprise environment: ran vulnerability 
                  scanners, interpreted CVSS scores, and recommended remediation strategies.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-green-500/50"></div>
                <p className="text-gray-300">
                  Monitored IDS/IPS alerts and VPN logs; escalated confirmed incidents to senior analysts 
                  to ensure timely resolution.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-green-500/50"></div>
                <p className="text-gray-300">
                  Delivered quarterly cybersecurity awareness sessions to employees, covering phishing 
                  detection, password hygiene, and social engineering risks.
                </p>
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="mt-8 pt-6 border-t border-green-500/20">
              <h4 className="text-lg font-semibold text-green-400 mb-4">Key Achievements</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400">30%</div>
                  <div className="text-sm text-gray-400">Vulnerability Reduction</div>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400">100+</div>
                  <div className="text-sm text-gray-400">Incidents Analyzed</div>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-400">Monitoring Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;