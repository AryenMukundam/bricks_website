import {
  CheckCircle,
  Crown,
  Star,
  Users,
  Zap,
  Award,
  Gift,
  Trophy,
  Cpu,
  Wrench,
  Shield,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import roboticsKitImage from "../../assets/images/robotics-kit.jpg";

const PricingSection = () => {
  const commonFeatures = [
    "All program benefits included",
    <span key="kit">
      <strong>Free robotics kit worth ₹4000</strong>
    </span>,
    "Priority mentor access & guidance",
    "Exclusive alumni network access",
    "Certificate from Google & Scaler",
    "Live project demonstrations",
    "Career guidance sessions",
  ];

  const kitFeatures = [
    {
      icon: Cpu,
      title: "Arduino Board",
      description: "Latest microcontroller for programming",
    },
    {
      icon: Zap,
      title: "Sensors & Motors",
      description: "Complete sensor suite and servo motors",
    },
    {
      icon: Wrench,
      title: "Building Components",
      description: "Wires, breadboard, and connectors",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "All components are student-safe",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-[#fff8f2] min-h-screen"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Limited Time Offer
          </div>
          <h2 className="text-5xl lg:text-7xl font-black mb-6 text-slate-900">
            Choose Your
            <span className="block text-orange-500">Learning Path</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of students building the future with robotics and programming
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {/* Winner Tier Card */}
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10">
              🏆 MOST POPULAR
            </div>
            
            <div className="bg-white border-4 border-orange-500 rounded-2xl p-8 h-full shadow-xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-500/5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Workshop Winners</h3>
                    <p className="text-slate-600 text-sm">For competition participants</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black text-slate-900">₹1,999</span>
                    <span className="text-2xl text-slate-400 line-through">₹5,999</span>
                  </div>
                  <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹4,000 (67% OFF)
                  </div>
                </div>

                <button
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 mb-6 shadow-lg"
                  onClick={() =>
                    window.open(
                      "https://payments.cashfree.com/forms/bricks-bootcamp",
                      "_blank"
                    )
                  }
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 inline-block ml-2" />
                </button>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 mb-3">Everything included:</h4>
                  {commonFeatures.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  <div className="text-orange-600 text-sm font-medium">+ 3 more benefits</div>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Schools Card */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 h-full shadow-lg relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-slate-100 rounded-full -translate-y-14 translate-x-14"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-slate-100 rounded-full translate-y-10 -translate-x-10"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Partner Schools</h3>
                  <p className="text-slate-600 text-sm">For institutional students</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black text-slate-900">₹3,499</span>
                  <span className="text-2xl text-slate-400 line-through">₹5,999</span>
                </div>
                <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Save ₹2,500 (42% OFF)
                </div>
              </div>

              <button
                className="w-full bg-slate-900 text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all duration-300 mb-6 shadow-lg"
                onClick={() =>
                  window.open(
                    "https://payments.cashfree.com/forms/bricks-bootcamp",
                    "_blank"
                  )
                }
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 inline-block ml-2" />
              </button>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900 mb-3">Everything included:</h4>
                {commonFeatures.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
                <div className="text-slate-600 text-sm font-medium">+ 3 more benefits</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">
              Complete Learning Experience
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Both plans include all these premium features to ensure your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commonFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-[#fff8f2] rounded-2xl border border-[#fff8f2]"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-slate-900 font-medium">{feature}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center">
            <button
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg"
              onClick={() =>
                window.open(
                  "https://wa.me/919871672790?text=Hi%20Bricks%20Education!%20I'm%20interested%20in%20your%20robotics%20and%20programming%20courses.",
                  "_blank"
                )
              }
            >
              <FaWhatsapp className="w-6 h-6" />
              Have Questions? Chat with Us
            </button>
          </div>
        </div>

        {/* Kit Section - Horizontal Layout */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Kit Info */}
            <div className="p-8 lg:p-12 text-white">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Gift className="w-4 h-4" />
                  FREE with Every Plan
                </div>
                <h2 className="text-4xl lg:text-5xl font-black mb-4">
                  Professional
                  <span className="block text-green-400">Robotics Kit</span>
                </h2>
                <p className="text-xl text-slate-300 mb-6">
                  Worth ₹4,000 - Yours free with any plan. Start building from day one!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {kitFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-slate-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Kit Image */}
            <div className="relative p-8 lg:p-12 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <img
                  src={roboticsKitImage}
                  alt="Professional Robotics Kit"
                  className="relative rounded-2xl w-full max-w-md shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                  FREE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;