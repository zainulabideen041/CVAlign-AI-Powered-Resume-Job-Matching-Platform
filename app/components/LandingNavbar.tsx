import { Link } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { useState, useEffect } from "react";
import logo from "../../public/images/logo.png";

const LandingNavbar = () => {
  const { auth, isLoading } = usePuterStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-200/50 border-b border-gray-100"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="CV Align Logo"
              className="w-10 h-10 rounded-xl shadow-md group-hover:shadow-lg group-hover:shadow-indigo-500/20 transition-all duration-300 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              CV Align
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 hover:after:w-full after:transition-all"
            >
              Testimonials
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoading ? (
              <div className="w-24 h-10 bg-gray-200 rounded-full animate-pulse"></div>
            ) : auth.isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/upload"
                  className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:-translate-y-0.5"
                >
                  Upload Resume
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/auth?next=/dashboard"
                  className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/auth?next=/upload"
                  className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:-translate-y-0.5"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
            <a
              href="#features"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              {auth.isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-center py-2.5 text-gray-600 hover:text-indigo-600 font-medium transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/upload"
                    className="text-center py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full"
                  >
                    Upload Resume
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/auth?next=/dashboard"
                    className="text-center py-2.5 text-gray-600 hover:text-indigo-600 font-medium transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth?next=/upload"
                    className="text-center py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
