import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      budget: '',
      message: '',
      timeline: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "var(--deeppink)"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@lensmaster.com", "bookings@lensmaster.com"],
      color: "var(--lightblue)"
    },
    {
      icon: MapPin,
      title: "Studios",
      details: ["New York, NY", "Los Angeles, CA", "Washington, D.C."],
      color: "var(--green)"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-7PM", "Weekends: By Appointment"],
      color: "var(--orange)"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", color: "var(--deeppink)" },
    { icon: Twitter, href: "#", color: "var(--lightblue)" },
    { icon: Linkedin, href: "#", color: "var(--purple)" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="subtitle mb-4" style={{ color: 'var(--purple)' }}>
            Get In Touch
          </p>
          <h2 className="title mb-8" style={{ color: 'var(--black)' }}>
            Let's Create Something <span style={{ color: 'var(--deeppink)' }}>Amazing</span>
          </h2>
          <p className="para max-w-2xl mx-auto" style={{ color: 'var(--black)' }}>
            Ready to capture your story? Whether it's a celebrity portrait session, political campaign, or special event, 
            let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--black)' }}>
              Book Your Session
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[var(--deeppink)] transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[var(--deeppink)] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[var(--deeppink)] transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[var(--deeppink)] transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="celebrity-portrait">Celebrity Portrait</option>
                    <option value="political-campaign">Political Campaign</option>
                    <option value="corporate-headshots">Corporate Headshots</option>
                    <option value="event-coverage">Event Coverage</option>
                    <option value="fashion-editorial">Fashion Editorial</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[var(--deeppink)] transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
                    Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[var(--deeppink)] transition-colors"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2weeks">1-2 weeks</option>
                    <option value="1month">Within 1 month</option>
                    <option value="2-3months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--black)' }}>
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[var(--deeppink)] transition-colors resize-vertical"
                  placeholder="Tell us about your project, vision, specific requirements, location preferences, and any other important details..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary rounded-none w-full flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8" style={{ color: 'var(--black)' }}>
              Contact Information
            </h3>

            {/* Contact Details */}
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[var(--light-gray)] rounded-full flex items-center justify-center">
                        <IconComponent size={24} style={{ color: info.color }} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2" style={{ color: 'var(--black)' }}>
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm mb-1" style={{ color: 'var(--black)' }}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold mb-4" style={{ color: 'var(--black)' }}>
                Follow Our Work
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-[var(--light-gray)] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      style={{ color: social.color }}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-12 p-6 bg-[var(--light-gray)] rounded-lg">
              <h4 className="font-bold mb-2" style={{ color: 'var(--deeppink)' }}>
                Urgent Bookings
              </h4>
              <p className="text-sm mb-3" style={{ color: 'var(--black)' }}>
                For last-minute or emergency photography needs:
              </p>
              <p className="font-bold" style={{ color: 'var(--black)' }}>
                📞 +1 (555) 911-LENS
              </p>
              <p className="text-xs mt-2" style={{ color: 'var(--black)' }}>
                Available 24/7 for celebrity and political emergencies
              </p>
            </div>

            {/* Response Time */}
            <div className="mt-8 text-center p-4 border-2 border-dashed border-[var(--lightblue)]">
              <h4 className="font-bold mb-2" style={{ color: 'var(--lightblue)' }}>
                ⚡ Quick Response Guarantee
              </h4>
              <p className="text-sm" style={{ color: 'var(--black)' }}>
                We respond to all inquiries within 2 hours during business hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;