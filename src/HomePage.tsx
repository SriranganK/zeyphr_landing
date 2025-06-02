import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { Badge } from "./components/ui/badge";
import {
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  Lock,
  ChevronRight,
  Star,
  CreditCard,
  Smartphone,
  QrCode,
  Mail,
  Store,
  Wallet,
} from "lucide-react";
import {  Building2 } from "lucide-react";


export default function HomePage() {

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const bounds = sectionRef.current?.getBoundingClientRect();
      if (!bounds) return;

      const x = ((e.clientX - bounds.left) / bounds.width - 0.5) * 20;
      const y = ((e.clientY - bounds.top) / bounds.height - 0.5) * 20;

      setTilt({ x, y });
    };

    const section = sectionRef.current;
    section?.addEventListener("mousemove", handleMouseMove);

    return () => {
      section?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const features = [
    "End-to-end encrypted transactions",
    "Non-custodial wallet architecture",
    "IOTA's quantum-resistant security",
    "PCI DSS compliant processing",
  ];

  const stats = [
    {
      icon: <Shield className="w-10 h-10 text-purple-400" />,
      stat: "99.9%",
      label: "Uptime",
    },
    {
      icon: <Lock className="w-10 h-10 text-green-400" />,
      stat: "$0",
      label: "Funds Lost",
    },
    {
      icon: <Wallet className="w-10 h-10 text-blue-400" />,
      stat: "<1s",
      label: "Payment Time",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-orange-400" />,
      stat: "0%",
      label: "Network Fees",
    },
  ];
  const data = [
    { month: "Jan", value: 400 },
    { month: "Feb", value: 800 },
    { month: "Mar", value: 650 },
    { month: "Apr", value: 1200 },
    { month: "May", value: 900 },
  ];
  

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img
                  className="w-8 h-8 rounded-lg"
                  src="https://zeyphr.netlify.app/assets/logo-vYV3mtmp.png"
                  alt="Zeyphr Logo"
                />
              </div>
              <span className="text-xl font-normal text-gray-900">Zeyphr</span>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-[15px] text-white"
                onClick={() => {
                  window.open("https://zeyphr.netlify.app/");
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Left Side Text Content */}
            <div className="text-left">
              <Badge className="mb-6 bg-blue-100 text-blue-800 border border-blue-200">
                🚀 Now Live on IOTA EVM
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
                Web3 Payments Made Simple
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
                The first decentralized marketplace and payment platform that
                feels like Web2. Email logins, one-tap payments, QR codes—all
                powered by IOTA EVM with zero blockchain complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 rounded-[15px]"
                  onClick={() => {
                    window.open("https://zeyphr.netlify.app/");
                  }}
                >
                  Start Selling
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Right Side GIF Image */}
            <div className="flex justify-center">
              <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmRtd2JldnBuNGk1aXU0c2RjM2M1Y3JkdGVmZzVtaHF1ZHg3Z2F2eCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o6ZsYm5P38NfYbEfu/giphy.gif"
                alt="Demo GIF"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* White Box Container */}
          <div className="bg-white rounded-[10px] shadow-lg p-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
                  FUTURE PAYMENT
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
                  Experience that grows with your scale.
                </h1>
              </div>

              {/* Right Content */}
              <div className="lg:pl-12">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Design a financial operating system that works for your
                  business and streamlined cash flow management
                </p>
              </div>
            </div>

            {/* Features Grid - Original */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              {/* Free Transfers Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6">
                  <CreditCard className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Free transfers
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Create a financial experience and automate repeat purchases by
                  scheduling recurring payments.
                </p>
              </div>

              {/* Multiple Account Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Multiple account
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Run your operations with cash from your account and generate
                  yield on funds stored in your account.
                </p>
              </div>

              {/* Security Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Unmatched security
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Securely manage your finances with organization-wide MFA,
                  card-locking, and account-level controls.
                </p>
              </div>
            </div>

            {/* Features Grid - Duplicated */}
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              {/* Free Transfers Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6">
                  <CreditCard className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Free transfers
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Create a financial experience and automate repeat purchases by
                  scheduling recurring payments.
                </p>
              </div>

              {/* Multiple Account Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Multiple account
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Run your operations with cash from your account and generate
                  yield on funds stored in your account.
                </p>
              </div>

              {/* Security Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Unmatched security
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Securely manage your finances with organization-wide MFA,
                  card-locking, and account-level controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Getting Started is Simple
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Start buying, selling, and accepting payments in minutes with our
              streamlined onboarding process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-none hover:-translate-y-1 transition duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6 text-2xl font-bold text-white shadow-md">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Sign Up with Email
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Create your account using just your email—no crypto knowledge
                required.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-none hover:-translate-y-1 transition duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-6 text-2xl font-bold text-white shadow-md">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Set Up Your Store
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Add products or services easily using familiar e-commerce tools.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-800 p-10 rounded-2xl shadow-lg hover:shadow-none hover:-translate-y-1 transition duration-300">
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6 text-2xl font-bold text-white shadow-md">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Start Transacting
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Accept payments instantly—online or offline via QR codes or
                direct transfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        className="py-24 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Text Block */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl">
                Your transactions and data are protected by cutting-edge
                blockchain protocols alongside familiar Web2-grade safety
                standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 space-x-3 hover:border-white/20 transition"
                  >
                    <div className="w-8 h-8 flex items-center justify-center bg-green-500 rounded-full shrink-0">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Tilt Stat Cards */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((item, idx) => (
                <motion.div
                  key={idx}
                  style={{
                    transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                  }}
                  className="transform-gpu transition-all bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] p-6 text-center"
                >
                  <div className="mb-4 flex justify-center">{item.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {item.stat}
                  </div>
                  <div className="text-sm text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                $50M+
              </div>
              <p className="text-gray-600 text-sm">Transaction Volume</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                25K+
              </div>
              <p className="text-gray-600 text-sm">Active Merchants</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                500K+
              </div>
              <p className="text-gray-600 text-sm">Transactions</p>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                &lt;$0.01
              </div>
              <p className="text-gray-600 text-sm">Average Fee</p>
            </div>
          </div>

          {/* Our Mission Heading */}
          <div className="text-center mb-16">
            <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-4">
              OUR MISSION
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
              We've helped innovative companies
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              Hundreds of all sizes and across all industries have made a big
              improvements with us.
            </p>
          </div>

          {/* Merged Card with Graph */}
          <div className="bg-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side: Text */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  No asset volatility
                </h3>
                <p className="text-gray-600 mb-8">
                  Generate returns on your cash reserves without making any
                  investments.
                </p>
                <div className="text-xl font-semibold text-gray-900">
                  £2.99/month
                </div>
              </div>

              {/* Right Side: Graph with White Line */}
              {/* Right Side: Graph with white background and white line */}
              <div className="bg-white/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 mb-16">
              


                  {/* Right Side: Chart */}
                  <div className="relative h-48 bg-white/20 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-end justify-center">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 300 120"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M 0 80 Q 50 70 100 60 T 200 40 T 300 20"
                          stroke="#0e7490"
                          strokeWidth="2"
                          fill="none"
                          className="opacity-80"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-2 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                    </div>
                  </div>
                </div>
          
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="md:col-span-3">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <img
                    className="w-8 h-8 rounded-lg"
                    src="https://zeyphr.netlify.app/assets/logo-vYV3mtmp.png"
                    alt="Zeyphr Logo"
                  />
                </div>
                <span className="text-xl font-normal text-white">Zeyphr</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Web3 payments made simple. Built on IOTA EVM for a sustainable
                future.
              </p>
            </div>

            {/* Help Section */}
            <div className="md:col-span-1 text-right space-y-3">
              <h3 className="text-white font-semibold mb-4">Need Help?</h3>
              <a
                href="mailto:zeyphr.org@gmail.com"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://www.youtube.com/watch?si=LUITiZmzf1zUCH3Y&v=2_dmkKHpmGk&feature=youtu.be"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                View Demo
              </a>
            </div>
          </div>

          {/* Bottom Spacer */}
          <div className=" border-white/10 mt-8 pt-8  text-gray-400">
            <p>&copy; 2024 Zeyphr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
