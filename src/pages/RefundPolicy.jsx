import React, { useState } from "react";
import {
  Shield,
  ChevronDown,
  ChevronUp,
  Phone,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const RefundPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const sections = [
    {
      id: "no-refunds",
      title: "No Refunds Under Any Circumstances",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            All fees paid are <strong className="text-red-600">non-refundable</strong> once enrollment is confirmed and robotics kit is distributed.
          </p>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">This includes:</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>Course registration fees</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>Tuition payments</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>Material fees</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>Workshop fees</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>Summer camp fees</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mt-2 flex-shrink-0"></div>
                <span>Value of provided robotics kits</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "enrollment-confirmation",
      title: "Enrollment Confirmation and Kit Distribution",
      icon: <CheckCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Payment of fees constitutes enrollment confirmation. Once payment is processed and the robotics kit is provided to the student, the no-refund policy takes <strong className="text-blue-600">immediate effect</strong>. Students retain ownership of their robotics kit regardless of program completion.
          </p>
        </div>
      ),
    },
    {
      id: "non-eligible-circumstances",
      title: "Circumstances Not Eligible for Refunds",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            The following situations do <strong className="text-red-600">not qualify</strong> for refunds:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>Student absence from classes</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>Student withdrawal (kit remains with student)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>Dissatisfaction with course content</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>Family schedule changes</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>Medical issues or emergencies</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>Weather-related cancellations</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>Technology equipment malfunctions</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>Changes in student interest</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FF7043] mt-2 flex-shrink-0"></div>
              <span>Loss or damage to robotics kit</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "class-cancellations",
      title: "Class Cancellations by Bricks",
      icon: <CheckCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            In the rare event that Bricks must cancel a course, we offer <strong className="text-green-600">alternatives instead of refunds</strong>:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
              <span><strong>Transfer Course:</strong> Move to another available course of equal value</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
              <span><strong>Future Credit:</strong> Credit toward future enrollment</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FFAB91] mt-2 flex-shrink-0"></div>
              <span><strong>Reschedule:</strong> Move to a later session</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: "makeup-classes",
      title: "Make-Up Classes",
      icon: <CheckCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            If a student misses classes, we may offer make-up sessions at our discretion, subject to instructor availability, facility capacity, and advance notice from families.
          </p>
        </div>
      ),
    },
    {
      id: "course-changes",
      title: "Course Changes",
      icon: <CheckCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Students may request to transfer to a different course before the start date, subject to availability and fee adjustments.
          </p>
        </div>
      ),
    },
    {
      id: "understanding-policy",
      title: "Understanding Our Policy",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            By enrolling, families acknowledge they have read and understood this no-refund policy, that all sales are final, and no exceptions will be made.
          </p>
        </div>
      ),
    },
    {
      id: "course-information",
      title: "Course Information and Expectations",
      icon: <CheckCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            We encourage families to thoroughly review course descriptions, ask questions, visit our facility, and speak with instructors before enrollment.
          </p>
        </div>
      ),
    },
    {
      id: "payment-disputes",
      title: "Payment Disputes",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            For payment disputes or billing errors, contact our office immediately. We will investigate and resolve legitimate billing errors.
          </p>
        </div>
      ),
    },
    {
      id: "policy-modifications",
      title: "Policy Modifications",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700">
            Bricks reserves the right to modify this refund policy at any time. Changes will be posted on our website and communicated to families.
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
              Refund Policy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Clear, transparent terms for our robotics and programming education programs
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
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-red-900 mb-2">
                  Important Notice: No Refund Policy
                </h3>
                <p className="text-red-800">
                  At Bricks, we maintain a strict no-refund policy due to the hands-on nature of our robotics programs and the resources allocated for each student.
                </p>
              </div>
            </div>
          </div>
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
                Questions about this refund policy? Need clarification before enrolling? We're here to help.
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
              By enrolling in Bricks programs, you acknowledge that you have read, understood, and agree to abide by this{" "}
              <span className="text-red-600 font-semibold">No Refund Policy</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;