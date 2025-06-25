import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 flex items-center gap-3">
            <img src="/images/guptajilogo.png" alt="Guptaji Logo" className="h-12 w-28 sm:h-16 sm:w-36 object-contain" />
            <div>
              <p className="text-gray-300 mb-4 max-w-md">
                India's 1st Strategic Investments Angel Network connecting startup founders 
                with Gupta community investors for value addition beyond capital.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/investors" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">Investors</Link></li>
              <li><Link to="/news" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">News & Updates</Link></li>
              <li><Link to="/contact" onClick={scrollToTop} className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-gold-500" />
                <span className="text-gray-300">+91 8333912345,</span>
                <br></br>
                <span className="text-gray-300">  +91 8333854123 </span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-gold-500" />
                <span className="text-gray-300">founder@guptajiinvests.in</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-gold-500" />
                <span className="text-gray-300">guptajiinvests@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={50} className="mr-2 text-gold-500" />
                <span className="text-gray-300">  Guptaji invests,
                                                  Right Rewards Private Limited,
                                                  T-Hub Phase 2, Madhapur, Hitech City, Hyderabad,
                                                  Telangana, India.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Guptaji invests. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
