import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";

import Button from "./Button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Our Work", path: "/#story" },
  { name: "Contact Us", path: "/contact-us" },
];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-6 z-50 h-16 border-none transition-all duration-500 sm:inset-x-8"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between px-6 py-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-8">
            <Link to="/">
              <img
                src="/img/logo.png"
                alt="logo"
                className="w-20 h-20 object-contain cursor-pointer"
              />
            </Link>

            <Button
              id="product-button"
              title="BOOK US"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 px-6 py-3 rounded-full font-medium hidden md:flex items-center justify-center gap-2"
            />
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => {
                // Check if it's an external route or internal hash link
                const isExternalRoute =
                  item.path.startsWith("/") && !item.path.includes("#");
                const isCurrentPage = location.pathname === item.path;

                if (isExternalRoute) {
                  return (
                    <Link
                      key={index}
                      to={item.path}
                      className={`nav-hover-btn ${isCurrentPage ? "text-yellow-300" : ""}`}
                    >
                      {item.name}
                    </Link>
                  );
                } else {
                  // For hash links, use regular anchor tags
                  return (
                    <a key={index} href={item.path} className="nav-hover-btn">
                      {item.name}
                    </a>
                  );
                }
              })}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-1 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              aria-label="Toggle audio"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
