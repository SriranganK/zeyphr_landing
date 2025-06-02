import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { motion } from "framer-motion";

import {
  Mail,
  CreditCard,
  QrCode,
  Store,
  Smartphone,
  Zap,
  TrendingUp,
  Wallet,
  Lock,
  Shield,
  ShoppingBag,
} from "lucide-react";

export default function HomePage() {
  const gradientPool = ["from-[#147EE9] to-[#7C2BF6]"];

  const features = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email Login",
      desc: "No seed phrases or complex wallets. Sign up with your email just like any Web2 app",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "One-Tap Payments",
      desc: "Pay for anything with a single tap, powered by IOTA's feeless transactions",
    },
    {
      icon: <QrCode className="w-6 h-6 text-white" />,
      title: "QR Code Payments",
      desc: "Scan and pay instantly at physical stores, just like mobile payment apps you already know",
    },
    {
      icon: <Store className="w-6 h-6 text-white" />,
      title: "Decentralized Marketplace",
      desc: "Buy and sell anything without intermediaries, keeping more of your profits",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Mobile-First Design",
      desc: "Optimized for mobile commerce with intuitive interfaces for buyers and sellers",
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "IOTA Powered",
      desc: "Built on IOTA's energy-efficient, feeless network for sustainable commerce",
    },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const howItWorksVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const howItWorksCard = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const cardData = [
    {
      icon: Shield,
      value: "99.9%",
      label: "Uptime",
      iconColor: "text-purple-400",
    },
    {
      icon: Lock,
      value: "$0",
      label: "Funds Lost",
      iconColor: "text-green-400",
    },
    {
      icon: Wallet,
      value: "<1s",
      label: "Payment Time",
      iconColor: "text-blue-400",
    },
    {
      icon: TrendingUp,
      value: "< 0.5%",
      label: "Gas Fees",
      iconColor: "text-orange-400",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white/10 ">
      {/* Navigation */}
      <nav className="border-b bg-white/500 shadow-md rounded-xl border-gray-200">
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
              <span className="text-xl font-semibold text-black">Zeyphr</span>
            </div>
            <Button
              className="bg-gradient-to-r from-[#7C2BF6] via-[#2D62E5] to-[#147EE9] text-white rounded-xl hover:opacity-90"
              onClick={() => {
                window.open("https://zeyphr.netlify.app/");
              }}
            >
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }} // Start below
        animate={{ opacity: 1, y: 0 }} // Animate to position
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative py-20 lg:py-32 text-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-purple-500/20 text-black border-purple-500/30 text-xl rounded-xl">
            🚀 Now Live on IOTA EVM
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
            Web3 Payments{" "}
            <span className="bg-gradient-to-r from-[#147EE9] to-[#7C2BF6] bg-clip-text text-transparent">
              {" "}
              Made Simple
            </span>
          </h1>
          <p className="text-xl text-black/100 mb-10 max-w-3xl mx-auto">
            The decentralized marketplace and payment platform that feels like
            Web2. Email logins, one-tap payments, QR codes all powered by IOTA
            EVM with zero blockchain complexity.
          </p>
          <div className="flex justify-center">
            <button
              className="bg-gradient-to-r from-[#7C2BF6] via-[#2D62E5] to-[#147EE9] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:opacity-90 transition"
              onClick={() => {
                window.open("https://zeyphr.netlify.app/", "_blank");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section
        id="marketplace"
        className="py-24 bg-gradient-to-b from-[#147EE9] to-[#7C2BF6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Web2 Experience, Web3 Power
            </h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Zeyphr bridges the gap between traditional commerce and
              decentralized tech, making crypto payments as easy as using your
              favorite apps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-md transition hover:scale-[1.02]">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${
                        gradientPool[idx % gradientPool.length]
                      } rounded-xl flex items-center justify-center mb-4 shadow-md`}
                    >
                      {item.icon}
                    </div>
                    <CardTitle className="text-white">{item.title}</CardTitle>
                    <CardDescription className="text-slate-200">
                      {item.desc}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#147EE9] to-[#7C2BF6] pb-2">
              Getting Started is Simple
            </h2>
            <p className="text-xl text-black/200 max-w-3xl mx-auto">
              Start buying, selling, and accepting payments in seconds with our
              streamlined onboarding process.
            </p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={howItWorksVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Card 1 */}
            <motion.div
              className="bg-white bg-opacity-10 rounded-2xl p-6 shadow-lg text-left hover:shadow-2xl transition-shadow"
              variants={howItWorksCard}
            >
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-black" size={28} />
                <h3 className="text-2xl font-semibold text-black">
                  Sign Up with Email
                </h3>
              </div>
              <p className="text-black/80 leading-relaxed">
                Create your account using just your email address. No crypto
                knowledge required.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white bg-opacity-10 rounded-2xl p-6 shadow-lg text-left hover:shadow-2xl transition-shadow"
              variants={howItWorksCard}
            >
              <div className="flex items-center gap-3 mb-4">
                <QrCode className="text-black" size={28} />
                <h3 className="text-2xl font-semibold text-black">
                  Start Transacting
                </h3>
              </div>
              <p className="text-black/80 leading-relaxed">
                Tap and pay, scan and pay, or send money to friends using their
                email address.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white bg-opacity-10 rounded-2xl p-6 shadow-lg text-left hover:shadow-2xl transition-shadow"
              variants={howItWorksCard}
            >
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="text-black" size={28} />
                <h3 className="text-2xl font-semibold text-black">
                  Buy and Sell Products
                </h3>
              </div>
              <p className="text-black/80 leading-relaxed">
                List your products, sell directly, or buy from others in our
                marketplace.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Security Section */}
      <section
        id="payments"
        className="py-20 bg-gradient-to-b from-[#147EE9] to-[#7C2BF6]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Your transactions and data are protected by cutting-edge
                blockchain security combined with familiar Web2 safety measures.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {cardData.map(({ icon: Icon, value, label, iconColor }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.3 }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <Icon className={`w-12 h-12 mx-auto mb-4 ${iconColor}`} />
                      <div className="text-2xl font-bold text-white mb-2">
                        {value}
                      </div>
                      <div className="text-gray-300">{label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-white/30 rounded-lg shadow-md py-12">
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
                <span className="text-xl font-bold text-black">Zeyphr</span>
              </div>
              <p className="text-black max-w-md">Bringing Web3 to everyone.</p>
            </div>

            {/* Help Section */}
            <div className="md:col-span-1 text-right space-y-3">
              <a
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor action
                  window.location.href = "mailto:zeyphr.org@gmail.com";
                }}
                href="mailto:zeyphr.org@gmail.com"
                className="block text-black-400 hover:text-black transition-colors cursor-pointer"
              >
                Contact Us
              </a>
              <a
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?si=LUITiZmzf1zUCH3Y&v=2_dmkKHpmGk&feature=youtu.be"
                  )
                }
                className="block text-black-400 hover:text-black transition-colors cursor-pointer"
              >
                View Demo
              </a>
            </div>
          </div>

          {/* Bottom Spacer */}
          <div className=" border-white/10 mt-8 pt-8  text-gray-400">
            <p>&copy; 2025 Zeyphr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
