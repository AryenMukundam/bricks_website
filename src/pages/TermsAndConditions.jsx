import React, { useState } from "react";
import {
  Shield,
  ChevronDown,
  ChevronUp,
  Phone,
  FileText,
  Users,
  CreditCard,
  AlertTriangle,
  Book,
  Scale,
} from "lucide-react";

const TermsAndConditions = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const sections = [
    {
      id: "services",
      title: "About Our Services",
      icon: <Book className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Bricks provides robotics and programming education for children
            through hands-on learning experiences. Our services include:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>Robotics building workshops with provided kits</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>Programming and coding instruction</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>Technology problem-solving projects</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>Creative and technical skill development programs</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                Complete robotics kits included with bootcamp registration
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "enrollment",
      title: "Enrollment and Registration",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              1. Eligibility
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Our programs are designed for children and young learners. Parents
              or legal guardians must complete enrollment for participants under
              18 years of age.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              2. Registration Requirements
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>
                  Complete and accurate registration information must be
                  provided
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>
                  Payment of applicable fees is required to secure enrollment
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>
                  Medical or special needs information should be disclosed
                  during registration
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              3. Class Capacity
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Classes are subject to minimum and maximum enrollment limits. We
              reserve the right to cancel classes that do not meet minimum
              enrollment requirements.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "payment",
      title: "Payment Terms",
      icon: <CreditCard className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              1. Fees and Payment
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>
                  All fees must be paid in full before the start of classes
                  unless alternative arrangements are made
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>
                  Bootcamp registration fee includes a complete robotics kit for
                  each student
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>Late payment may result in suspension from classes</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              2. Kit Provision and Ownership
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>
                  Each enrolled student receives a robotics kit as part of their
                  bootcamp registration
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>
                  Kits become the property of the student upon full payment of
                  fees
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>
                  Students are responsible for bringing their assigned kit to
                  each class
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
                <span>
                  Lost or damaged kit components may require additional fees for
                  replacement
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              3. Fee Changes
            </h4>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify our fees with reasonable notice to
              enrolled students and their families.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "conduct",
      title: "Student Conduct and Safety",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              1. Behavior Expectations
            </h4>
            <p className="text-gray-700 mb-3">Students are expected to:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>Follow instructor guidance and safety protocols</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>
                  Treat equipment, materials, robotics kits, and facilities with
                  care
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>Show respect for instructors and fellow students</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>Maintain a positive learning environment</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>
                  Bring their assigned robotics kit to each class session
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              2. Safety Measures
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>
                  Students must follow all safety guidelines when handling
                  robotics kits and equipment
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>
                  Parents must inform us of any medical conditions or allergies
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>We maintain age-appropriate supervision ratios</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
                <span>
                  Proper care and handling of robotics kits is mandatory for
                  safety
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              3. Disciplinary Actions
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Disruptive behavior may result in removal from class without
              refund. We will work with families to address behavioral concerns
              constructively.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "intellectual",
      title: "Intellectual Property",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              1. Course Materials
            </h4>
            <p className="text-gray-700 leading-relaxed">
              All course materials, curricula, and teaching methods are
              proprietary to Bricks and protected by intellectual property laws.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              2. Student Creations
            </h4>
            <p className="text-gray-700 leading-relaxed">
              While students retain ownership of their individual projects,
              Bricks may use photos and videos of student work for promotional
              purposes with appropriate consent.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Bricks' liability is limited to the amount of fees paid for
            services. We are not liable for indirect, incidental, or
            consequential damages. Parents acknowledge that robotics and
            technology activities involve inherent risks.
          </p>
        </div>
      ),
    },
    {
      id: "privacy",
      title: "Privacy and Data Protection",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We collect and use personal information in accordance with our
            Privacy Policy. Student information is kept confidential and used
            solely for educational and administrative purposes.
          </p>
        </div>
      ),
    },
    {
      id: "modifications",
      title: "Modifications to Terms",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms at any time. Changes will
            be communicated to enrolled families and posted on our website.
          </p>
        </div>
      ),
    },
    {
      id: "governing",
      title: "Governing Law",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            These Terms are governed by the laws of [Your State/Country]. Any
            disputes will be resolved through [specify dispute resolution
            method].
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 border border-blue-200">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-medium">Legal Document</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900">
              Bricks Education
            </h1>
            <p className="text-lg text-gray-600">
              Adhyayan and Aryan Jakhar
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">
              Terms and Conditions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using our robotics education services.
            </p>
            <div className="text-sm text-gray-500">
              Last updated: July 2025
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        
        {/* Introduction */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700 leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-[#FF5722]">Bricks</span>! These
            Terms and Conditions ("Terms") govern your use of our robotics and
            programming education services. By enrolling in our courses or using
            our services, you agree to these Terms.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {index + 1}. {section.title}
                    </h3>
                  </div>
                </div>
                <div className="text-blue-600">
                  {expandedSections[section.id] ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {expandedSections[section.id] && (
                <div className="px-6 pb-6 border-t border-gray-200">
                  <div className="pt-4">{section.content}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Information</h3>
              <p className="text-gray-700 mb-4">
                If you have questions about these terms or need clarification before enrolling, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <div>
                  <span className="font-medium">Legal Name:</span> Adhyayan and Aryan Jakhar
                </div>
                <div>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:support@bricks.org.in"
                    className="text-blue-600 hover:underline"
                  >
                    support@bricks.org.in
                  </a>
                </div>
                <div>
                  <span className="font-medium">Phone:</span>{" "}
                  <a
                    href="tel:+919871672790"
                    className="text-blue-600 hover:underline"
                  >
                    +91 98716 72790
                  </a>
                </div>
                <div>
                  <span className="font-medium">Address:</span> Electronic City Phase 1, Bengaluru, Karnataka
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Acknowledgment */}
        <div className="text-center py-8">
          <div className="max-w-3xl mx-auto bg-gray-100 border border-gray-200 rounded-lg p-6">
            <p className="text-lg text-gray-800">
              By enrolling in Bricks programs, you acknowledge that you have read, understood, and agree to abide by these{" "}
              <span className="text-blue-600 font-semibold">Terms and Conditions</span>.
            </p>
            <div className="text-sm text-gray-500 mt-2">
              These terms are subject to change with notice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;