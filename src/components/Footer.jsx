import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import TermsAndConditions from '../pages/TermsAndConditions';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import RefundPolicy from '../pages/RefundPolicy';

const Footer = () => {
  return (
    <footer className="bg-[#fff8f2] border-t">
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-orange-600 mb-2">
              BRICKS EDUCATION
            </h2>
            <p className="text-orange-700 font-medium mb-3">
              Learning by Doing, Leading by Thinking!
            </p>
            <p className="text-gray-600 text-sm">
              Empowering students through innovative robotics education and hands-on learning experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Quick Links</h3>
            <div className="space-y-2">
              <div>
                <a href="/" className="text-gray-700 text-sm hover:text-orange-600 block">
                  Home
                </a>
              </div>
              <div>
                <a href="/bootcamp" className="text-gray-700 text-sm hover:text-orange-600 block">
                  Bootcamp
                </a>
              </div>
              <div>
                <a href="/contact" className="text-gray-700 text-sm hover:text-orange-600 block">
                  Contact
                </a>
              </div>
              <div>
                <a href="/refund-policy" className="text-gray-700 text-sm hover:text-orange-600 block">
                  Refund Policy
                </a>
              </div>
              <div>
                <a href="/privacy-policy" className="text-gray-700 text-sm hover:text-orange-600 block">
                  Privacy Policy
                </a>
              </div>
              <div>
                <a href="/terms-and-conditions" className="text-gray-700 text-sm hover:text-orange-600 block">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-orange-600" />
                <a href="tel:+919462311937" className="text-gray-700 text-sm hover:text-orange-600">
                  +91 94623 11937
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-orange-600" />
                <a href="mailto:schoolsupport@bricks.org.in" className="text-gray-700 text-sm hover:text-orange-600">
                  schoolsupport@bricks.org.in
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size={16} className="text-orange-600" />
                <a href="https://www.bricks.org.in" className="text-gray-700 text-sm hover:text-orange-600">
                  www.bricks.org.in
                </a>
              </div>
            </div>
          </div>
          
          {/* Location */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Location</h3>
            <div className="flex items-start space-x-2">
              <MapPin size={16} className="text-orange-600 mt-1" />
              <div>
                <p className="text-gray-700 text-sm">
                  BRICKS EDUCATION<br />
                  Electronic City, Bangalore, INDIA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;