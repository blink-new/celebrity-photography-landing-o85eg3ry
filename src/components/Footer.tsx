import React from 'react';
import { Camera, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Celebrity Portraits", href: "#gallery" },
      { name: "Political Photography", href: "#gallery" },
      { name: "Event Coverage", href: "#videos" },
      { name: "Corporate Headshots", href: "#contact" },
      { name: "Fashion Editorial", href: "#gallery" },
      { name: "Studio Rentals", href: "#contact" }
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Portfolio", href: "#gallery" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Behind the Scenes", href: "#videos" },
      { name: "Awards", href: "#about" },
      { name: "Press Kit", href: "#contact" }
    ],
    resources: [
      { name: "Booking Guide", href: "#contact" },
      { name: "Pricing", href: "#contact" },
      { name: "FAQ", href: "#contact" },
      { name: "Client Portal", href: "#contact" },
      { name: "Style Guide", href: "#gallery" },
      { name: "Blog", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-black text-white pt-20 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Camera size={32} style={{ color: 'var(--deeppink)' }} className="mr-3" />
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'var(--font)' }}>
                LENS MASTER
              </h3>
            </div>
            <p className="para text-gray-300 mb-6">
              Capturing moments that define legacies. Professional photography services for celebrities, politicians, and industry leaders worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} style={{ color: 'var(--lightblue)' }} />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} style={{ color: 'var(--lightblue)' }} />
                <span className="text-sm">hello@lensmaster.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} style={{ color: 'var(--lightblue)' }} />
                <span className="text-sm">New York • Los Angeles • Washington D.C.</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="subtitle mb-6 text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--deeppink)] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="subtitle mb-6 text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--deeppink)] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="subtitle mb-6 text-white">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[var(--deeppink)] transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Get exclusive behind-the-scenes content and be the first to see our latest work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-none focus:outline-none focus:border-[var(--deeppink)] text-white"
              />
              <button className="btn-primary rounded-none whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Awards */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Social Media */}
            <div>
              <h4 className="font-bold mb-4">Follow Our Journey</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--deeppink)] transition-all duration-300 hover:scale-110"
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Awards */}
            <div className="text-center md:text-right">
              <h4 className="font-bold mb-4">Recognition</h4>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs text-gray-400">
                <span>PPA Master Photographer</span>
                <span>•</span>
                <span>IPA Portrait Winner</span>
                <span>•</span>
                <span>World Press Photo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Lens Master Photography. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-[var(--deeppink)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[var(--deeppink)] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[var(--deeppink)] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-8 p-4 bg-gradient-to-r from-[var(--deeppink)] to-[var(--purple)] rounded-lg text-center">
          <p className="text-sm font-bold">
            🚨 Emergency Bookings: +1 (555) 911-LENS • Available 24/7 for urgent photography needs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;