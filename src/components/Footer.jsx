// components/Footer.jsx
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#1d3557] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10">
          {/* Branding */}
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-2">Maazster Tech</h2>
            <p className="text-sm mb-4">
              Transform your workplace management with our comprehensive
              attendance and payroll system.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-orange-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-orange-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-400">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-orange-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  GDPR
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t flex border-white/20 mt-10 pt-4 text-sm text-center">
          <p>© 2025 Maazster Tech. All rights reserved.</p>
          <p className="text-orange-300 mt-1 ml-auto">
            Made with ❤️ for better workplaces
          </p>
        </div>
      </footer>
    </div>
  );
}
