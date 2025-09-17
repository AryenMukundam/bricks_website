import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#fff8f2] border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Brand Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">
              BRICKS EDUCATION
            </h2>
            <p className="text-orange-700 font-medium mb-2 sm:mb-3 text-xs sm:text-sm">
              Learning by Doing, Leading by Thinking!
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Empowering students through innovative robotics education and hands-on learning experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">
              Quick Links
            </h3>
            <div className="space-y-1 sm:space-y-2">
              <a href="/" className="text-gray-700 text-xs sm:text-sm hover:text-orange-600 block">Home</a>
              <a href="/bootcamp" className="text-gray-700 text-xs sm:text-sm hover:text-orange-600 block">Bootcamp</a>
              <a href="/contact" className="text-gray-700 text-xs sm:text-sm hover:text-orange-600 block">Contact</a>
              <a href="/refund-policy" className="text-gray-700 text-xs sm:text-sm hover:text-orange-600 block">Refund Policy</a>
              <a href="/privacy-policy" className="text-gray-700 text-xs sm:text-sm hover:text-orange-600 block">Privacy Policy</a>
              <a href="/terms-and-conditions" className="text-gray-700 text-xs sm:text-sm hover:text-orange-600 block">Terms & Conditions</a>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">
              Contact
            </h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-orange-600" />
                <a href="tel:+919462311937" className="text-gray-700 hover:text-orange-600">
                  +91 94623 11937
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-orange-600" />
                <a href="mailto:schoolsupport@bricks.org.in" className="text-gray-700 hover:text-orange-600">
                  schoolsupport@bricks.org.in
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size={14} className="text-orange-600" />
                <a href="https://www.bricks.org.in" className="text-gray-700 hover:text-orange-600">
                  www.bricks.org.in
                </a>
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">
              Location
            </h3>
            <div className="flex items-start space-x-2 text-xs sm:text-sm">
              <MapPin size={14} className="text-orange-600 mt-1" />
              <p className="text-gray-700">
                BRICKS EDUCATION <br />
                Electronic City, Bangalore, INDIA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 border-t pt-4 sm:pt-6 text-center text-gray-500 text-[10px] sm:text-xs">
          © {new Date().getFullYear()} BRICKS Education. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
