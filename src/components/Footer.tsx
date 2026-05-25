import { Link } from "react-router-dom";
import { Instagram, Send, Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import { COMPANY_DETAILS } from "../constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-white/10 p-1.5 rounded-xl backdrop-blur-sm">
                <img
                  src="/assets/images/logo.jpg"
                  alt={`${COMPANY_DETAILS.name} logo`}
                  className="w-9 h-9 rounded-lg object-cover"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight">CORE CAMPUS</span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              Empowering students with industry-ready skills and career opportunities. Join us to transform your future.
            </p>
            <div className="flex space-x-4">
              <a
                href={COMPANY_DETAILS.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-secondary uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "About Us", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                    className="text-slate-300 hover:text-secondary hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-secondary uppercase tracking-widest text-sm">Our Services</h4>
            <ul className="space-y-4">
              {["Internships", "SAP Training", "Placements"].map((item) => (
                <li key={item} className="text-slate-300 hover:text-secondary cursor-pointer transition-colors duration-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-secondary uppercase tracking-widest text-sm">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <span className="text-sm">{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">+{COMPANY_DETAILS.callNow}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm">info@corecampus.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-400 text-xs">
          <p>© {currentYear} Core Campus Pvt Ltd. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
