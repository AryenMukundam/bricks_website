import React, { useState } from "react";
import {
  Shield,
  Book,
  Users,
  Lock,
  Mail,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const sections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: <Book className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Bricks Education collects various types of information to provide
            and improve our robotics and programming education services. This
            includes:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Personal Identification Information:</strong> Name,
                email address, phone number, physical address, date of birth
                (for age-appropriate program placement), and parent/guardian
                contact details. This is collected during registration and
                inquiry submissions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Technical Data:</strong> IP address, browser type,
                operating system, and usage patterns when you interact with our
                website. This helps us improve website functionality and user
                experience.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Educational Progress Data:</strong> Information related
                to student performance, project completion, and participation
                within our courses.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Communication Data:</strong> Records of correspondence,
                including emails and messages sent through our contact forms.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            The information collected by Bricks Education is used for the
            following purposes:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>
                <strong>To Provide Services:</strong> To process registrations,
                enroll students in courses, deliver educational content, and
                manage program logistics.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Communication:</strong> To respond to inquiries, send
                important updates about courses, events, and policy changes, and
                provide customer support.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Improvement of Services:</strong> To analyze usage
                patterns, gather feedback, and enhance our curriculum, teaching
                methods, and website functionality.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Marketing and Promotions:</strong> With explicit
                consent, to inform you about new courses, special offers, or
                relevant educational content. You can opt-out at any time.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Legal Compliance:</strong> To comply with legal
                obligations, resolve disputes, and enforce our agreements.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-protection",
      title: "How We Protect Your Information",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Bricks Education is committed to protecting your personal
            information. We implement a variety of security measures to maintain
            the safety of your data:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Secure Data Storage:</strong> We store personal data on
                secure servers with restricted access.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Encryption:</strong> Data transmitted to and from our
                website is protected using SSL/TLS encryption.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Access Control:</strong> Access to personal data is
                limited to authorized personnel who require the information to
                perform their duties.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Regular Security Audits:</strong> We regularly review
                our security practices to ensure data integrity and prevent
                unauthorized access.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Third-Party Processors:</strong> While we use
                third-party services (e.g., payment processors, analytics
                tools), we ensure they adhere to strict data protection
                standards. We do not sell or rent your personal information to
                third parties.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "your-rights",
      title: "Your Data Protection Rights",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            You have certain rights regarding your personal data held by Bricks
            Education :
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Right to Access:</strong> You can request a copy of the
                personal data we hold about you.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Right to Rectification:</strong> You can request
                correction of inaccurate or incomplete data.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Right to Erasure:</strong> You can request deletion of
                your personal data, subject to legal obligations.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                <strong>Right to Object:</strong> You can object to the
                processing of your personal data for certain purposes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
              <span>
                To exercise these rights, please contact us using the details
                below.
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "policy-changes",
      title: "Changes to This Privacy Policy",
      icon: <Mail className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Bricks Education reserves the right to update or modify this Privacy
            Policy at any time. Any changes will be posted on this page with an
            updated "Effective Date." We encourage you to review this policy
            periodically for any changes.
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
              <span className="text-blue-700 text-sm font-medium">Privacy Policy</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900">
              Bricks Education
            </h1>
            <p className="text-lg text-gray-600">
              Adhyayan and Aryan Jakhar
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 pt-4">
              Privacy Policy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="text-sm text-gray-500">
              Effective Date: July 2025
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        
        {/* Introduction */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy describes how <strong>Bricks Education </strong>{" "}
            collects, uses, and protects the personal information you provide
            when using our website and services. By accessing or using our
            services, you agree to the terms of this Privacy Policy.
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
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
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
      </div>
    </div>
  );
};

export default PrivacyPolicy;