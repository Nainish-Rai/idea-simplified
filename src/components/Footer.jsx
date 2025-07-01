import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-12 text-blue-50">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-blue-200 hover:text-yellow-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-blue-200 hover:text-yellow-300 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#story"
                  className="text-blue-200 hover:text-yellow-300 transition-colors"
                >
                  Our Work
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-blue-200 hover:text-yellow-300 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-blue-200 hover:text-yellow-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Dubai Office */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Dubai Office</h4>
            <div className="text-blue-200 space-y-1">
              <p>One Central – Trade Centre</p>
              <p>Dubai – UAE</p>
              <p className="text-yellow-300">+971 05893 44219</p>
            </div>
          </div>

          {/* Mumbai Office */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Mumbai Office</h4>
            <div className="text-blue-200 space-y-1">
              <p>1205-06, D.S Galleria</p>
              <p>LBS Rd, Mumbai</p>
              <p className="text-yellow-300">+91 9711809870</p>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Connect</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-yellow-300 transition-colors text-xl"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-yellow-300 transition-colors text-xl"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-yellow-300 transition-colors text-xl"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
              <div>
                <a
                  href="mailto:info@ideasimplified.in"
                  className="text-yellow-300 hover:text-white transition-colors"
                >
                  info@ideasimplified.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-300 text-sm">
            © {new Date().getFullYear()} Idea Simplified. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#privacy"
              className="text-blue-300 hover:text-yellow-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-blue-300 hover:text-yellow-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
