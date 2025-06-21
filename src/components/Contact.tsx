import React, { useState } from 'react';
import { Send, Mail, MessageSquare, User, Phone, MapPin, Linkedin, Clock, Shield, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({ show: false, type: 'success', message: '' });

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type: 'success', message: '' }), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configured with your actual credentials - send real email
      await emailjs.send(
        'service_ewftsvm', // Your Gmail service ID
        'template_qvskz0q', // Your template ID
        {
          name: formData.name,        // Changed from 'from_name' to 'name' to match template
          email: formData.email,      // Changed from 'from_email' to 'email' to match template
          subject: formData.subject,
          message: formData.message,
        },
        'M4LzRKGCDjtPd07aB' // Your public key
      );
      
      showToast('success', 'Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } catch (error) {
      console.error('Failed to send email:', error);
      showToast('error', 'Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+92 3146018728", href: "tel:+923146018728" },
    { icon: Mail, label: "Email", value: "umairaziz682@gmail.com", href: "mailto:umairaziz682@gmail.com" },
    { icon: MapPin, label: "Location", value: "Mirpur, AJK", href: "#" },
    { icon: Linkedin, label: "LinkedIn", value: "umairaziz001", href: "https://linkedin.com/in/umairaziz001" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h2 className="text-5xl font-bold text-white glow-green">Let's Connect</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Ready to discuss cybersecurity opportunities or collaborate on security initiatives? 
              Let's explore how we can work together to strengthen your digital defenses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 card-glow card-animated-border rounded-xl hover:scale-105 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="card-glow card-animated-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-green-400" />
                  <h4 className="text-lg font-bold text-white">Availability</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Response Time</span>
                    <span className="text-green-400 font-semibold">24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Best Time</span>
                    <span className="text-green-400 font-semibold">9 AM - 6 PM PKT</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-semibold">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-glow card-animated-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm font-medium mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-colors"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-colors"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 text-sm font-medium mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-lg text-white placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-colors resize-none"
                      placeholder="Tell me about your project, questions, or how I can help..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary btn-pulse-glow w-full md:w-auto flex items-center gap-3 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-4 right-4 z-50 max-w-sm w-full mx-auto transform transition-all duration-300 ease-in-out ${
          toast.show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
          <div className={`rounded-xl p-4 shadow-2xl border ${
            toast.type === 'success' 
              ? 'bg-green-500/20 border-green-500/30 backdrop-blur-lg' 
              : 'bg-red-500/20 border-red-500/30 backdrop-blur-lg'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}>
                {toast.type === 'success' ? (
                  <CheckCircle className="w-4 h-4 text-black" />
                ) : (
                  <XCircle className="w-4 h-4 text-white" />
                )}
              </div>
              <p className={`font-semibold ${
                toast.type === 'success' ? 'text-green-400' : 'text-red-400'
              }`}>
                {toast.message}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;