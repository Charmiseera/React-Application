import { TreePalm, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-emerald-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="text-2xl">
                <TreePalm />
              </div>
              <div className="text-xl font-bold">Clause</div>
            </div>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <span>
                  <Mail />
                </span>
                <a href="mailto:hello@clause.com" className="hover:text-white">
                  hello@clause.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <Phone />
                </span>
                <a href="tel:+621967654321" className="hover:text-white">
                  +621967 654 321
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Solution</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Why Cquence
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  OpenAI
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Customers</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Procurement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Medium
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Sales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © Copyright 2024 Clause. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-lg">
              𝕏
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-lg">
              in
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-lg">
              📷
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-lg">
              ▶
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;