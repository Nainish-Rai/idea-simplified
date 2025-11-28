import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-screen bg-gradient-to-br from-black via-gray-900 to-black border-t border-white/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative max-sm:px-8 max-w-7xl mx-auto section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/img/logo.png"
                alt="Idea Simplified Logo"
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-h2 font-bold text-white">
                  Idea <span className="text-accent">S</span>implified
                </h3>
                <p className="text-sm text-white/60 font-medium">
                  From Ideation to Completion
                </p>
              </div>
            </div>

            <p className="text-body text-white/70 leading-relaxed mb-8 max-w-md">
              We are an award-winning experiential events and brand consulting
              firm that transforms your vision from ideation to flawless
              completion.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-center w-12 h-12 bg-white/5 border border-white/10 rounded-full text-white/70 hover:text-yellow-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-center w-12 h-12 bg-white/5 border border-white/10 rounded-full text-white/70 hover:text-yellow-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-center w-12 h-12 bg-white/5 border border-white/10 rounded-full text-white/70 hover:text-yellow-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-lg group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 relative">
              Navigation
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-yellow-300 mt-2" />
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Our Work", href: "/work" },
                { name: "Contact", href: "/contact-us" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="group flex items-center gap-2 text-white/70 hover:text-yellow-300 transition-colors duration-300 text-sm"
                  >
                    <TiLocationArrow className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6 relative">
              Services
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-yellow-300 mt-2" />
            </h4>
            <ul className="space-y-3">
              {[
                "Experiential Events & IPs",
                "Brand Consulting",
                "Turnkey Exhibition Services",
                "Event Execution",
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-white/70 text-sm hover:text-white transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-lg mb-6 relative">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-yellow-300 mt-2" />
            </h4>

            <div className="space-y-6">
              {/* UAE Office */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h5 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full" />
                  UAE Office
                </h5>
                <div className="text-white/70 text-sm space-y-1">
                  <p>Sharjah Business Centre</p>
                  <p>UAE</p>
                  <a
                    href="tel:+971567893131"
                    className="text-yellow-300 hover:text-white transition-colors"
                  >
                    +971 56 789 3131
                  </a>
                </div>
              </div>

              {/* Mumbai Office */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h5 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full" />
                  Mumbai Office
                </h5>
                <div className="text-white/70 text-sm space-y-1">
                  <p>
                    Wework Zenia, Hiranandani Business park, Arcadia Cir,
                    Hiranandani Estate, Thane West, Thane, Maharashtra 400607
                  </p>
                  <a
                    href="tel:+919711809870"
                    className="text-yellow-300  hover:text-white transition-colors"
                  >
                    +91 9711809870
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 bg-gradient-to-r from-yellow-300/10 to-transparent border border-yellow-300/20 rounded-2xl">
                <p className="text-sm text-white/70 mb-1">Email us:</p>
                <a
                  href="mailto:info@ideasimplified.com"
                  className="text-yellow-300 hover:text-white transition-colors font-medium"
                >
                  info@ideasimplified.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Idea Simplified. All Rights
              Reserved.
            </p>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <p className="text-white/40 text-xs">
              Designed with passion for excellence
            </p>
          </div>

          <div className="flex gap-6 text-sm">
            <span className="text-white/40 text-xs">
              Crafted with precision & passion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
