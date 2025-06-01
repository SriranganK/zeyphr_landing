import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
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

export default function HomePage() {
  return (
    <div className=" flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                <img
                  className="size-10 w-8 h-8  rounded-lg flex items-center justify-center"
                  src="https://zeyphr.netlify.app/assets/logo-vYV3mtmp.png"
                />
              </div>
              <span className="text-xl font-normal text-white">Zeyphr</span>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-[15px]"
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
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              🚀 Now Live on IOTA EVM
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Web3 Payments
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Made Simple
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The first decentralized marketplace and payment platform that
              feels like Web2. Email logins, one-tap payments, QR codes—all
              powered by IOTA EVM with zero blockchain complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8  rounded-[15px]"
                onClick={() => {
                  window.open("https://zeyphr.netlify.app/");
                }}
              >
                Start Selling
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                $50M+
              </div>
              <div className="text-gray-400">Transaction Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                25K+
              </div>
              <div className="text-gray-400">Active Merchants</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                500K+
              </div>
              <div className="text-gray-400">Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {"<"}$0.01
              </div>
              <div className="text-gray-400">Average Fee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="marketplace" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Web2 Experience, Web3 Power
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Zeyphr bridges the gap between traditional commerce and
              decentralized technology, making crypto payments as easy as using
              your favorite apps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Email Login</CardTitle>
                <CardDescription className="text-gray-300">
                  No seed phrases or complex wallets. Sign up with your email
                  just like any Web2 app
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">One-Tap Payments</CardTitle>
                <CardDescription className="text-gray-300">
                  Pay for anything online or offline with a single tap, powered
                  by IOTA's feeless transactions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">QR Code Payments</CardTitle>
                <CardDescription className="text-gray-300">
                  Scan and pay instantly at physical stores, just like mobile
                  payment apps you already know
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">
                  Decentralized Marketplace
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Buy and sell anything without intermediaries, keeping more of
                  your profits
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">
                  Mobile-First Design
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Optimized for mobile commerce with intuitive interfaces for
                  buyers and sellers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">IOTA EVM Powered</CardTitle>
                <CardDescription className="text-gray-300">
                  Built on IOTA's energy-efficient, feeless network for
                  sustainable commerce
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Getting Started is Simple
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start buying, selling, and accepting payments in minutes with our
              streamlined onboarding process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Sign Up with Email
              </h3>
              <p className="text-gray-300">
                Create your account using just your email address—no crypto
                knowledge required
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Set Up Your Store
              </h3>
              <p className="text-gray-300">
                List your products or services on our marketplace with familiar
                e-commerce tools
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Start Transacting
              </h3>
              <p className="text-gray-300">
                Accept payments online and offline with QR codes, as, or direct
                transfers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="payments" className="py-20 bg-black/20">
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

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">
                    End-to-end encrypted transactions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">
                    Non-custodial wallet architecture
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">
                    IOTA's quantum-resistant security
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white">
                    PCI DSS compliant payment processing
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">
                    99.9%
                  </div>
                  <div className="text-gray-300">Uptime</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Lock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">$0</div>
                  <div className="text-gray-300">Funds Lost</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Wallet className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">
                    {"<"}1s
                  </div>
                  <div className="text-gray-300">Payment Time</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">0%</div>
                  <div className="text-gray-300">Network Fees</div>
                </CardContent>
              </Card>
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
