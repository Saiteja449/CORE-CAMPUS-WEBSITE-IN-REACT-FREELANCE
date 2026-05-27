import { useState } from "react";
import { motion } from "motion/react";
import { Send, MapPin, Phone, MessageCircle, Instagram, Mail, Info, ChevronDown } from "lucide-react";
import { COMPANY_DETAILS } from "../constants";

const FAQS = [
  {
    question: "Do you guarantee jobs for all courses?",
    answer: "Our specialized SAP programs include a job guarantee. For other courses, we provide 100% placement assistance including mock interviews and direct referrals."
  },
  {
    question: "How long is the internship program?",
    answer: "Internships typically range from 3 to 6 months depending on the domain and company requirements. Some offer remote options."
  },
  {
    question: "Where is the office located?",
    answer: "We are located at Rotano Suites Building, Ground Floor, Yelahanka Old Town, Bangalore - 560064."
  },
  {
    question: "Can I join online?",
    answer: "Yes, we offer hybrid learning models for many our programs, though physical attendance is recommended for intensive lab sessions."
  }
];

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="bg-primary pt-32 pb-60 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold tracking-[0.3em] uppercase text-sm"
          >
            Reach Out to Us
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-8xl font-bold text-white tracking-tighter"
          >
            Let's Start Your <span className="text-secondary">Success Story</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-xl font-light"
          >
            Have a question? We're here to help. Reach out to our consultants today.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
        {/* Animated background blobs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse"></div>
      </section>

      {/* Contact Cards & Form */}
      <section className="px-4 -mt-40 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info Column */}
            <div className="lg:col-span-1 space-y-6">
              {[
                { icon: MapPin, title: "Our Office", detail: COMPANY_DETAILS.address, color: "bg-blue-100 text-blue-600" },
                { icon: Phone, title: "Call Us", detail: `+91 ${COMPANY_DETAILS.callNow}`, link: `tel:${COMPANY_DETAILS.callNow}`, color: "bg-green-100 text-green-600" },
                { icon: MessageCircle, title: "WhatsApp", detail: "Get Instant Reply", link: `https://wa.me/91${COMPANY_DETAILS.whatsapp}`, color: "bg-teal-100 text-teal-600" },
                { icon: Mail, title: "Email Us", detail: "info@corecampus.in", link: "mailto:info@corecampus.in", color: "bg-purple-100 text-purple-600" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex items-start space-x-6 hover:translate-x-2 transition-transform cursor-pointer"
                  onClick={() => item.link && window.open(item.link, "_blank")}
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h3>
                    <p className="text-slate-900 font-bold text-lg leading-snug">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-2 bg-white rounded-[3rem] p-12 shadow-2xl shadow-slate-200/50 border border-slate-100"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Send a Message</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-serif leading-none">
                  <div className="space-y-2">
                    <label className="text-slate-400 text-xs font-bold uppercase tracking-widest px-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-400 text-xs font-bold uppercase tracking-widest px-1">Contact Number</label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-slate-400 text-xs font-bold uppercase tracking-widest px-1">Service Type</label>
                  <select className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans">
                    <option>SAP Training</option>
                    <option>Internships</option>
                    <option>Career Placement</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-slate-400 text-xs font-bold uppercase tracking-widest px-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-primary text-secondary py-5 rounded-2xl font-bold text-xl shadow-xl shadow-primary/20 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 flex items-center justify-center group"
                >
                  Send Enquiry
                  <Send className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & FAQ Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Map Placeholder */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Visit Our Hub</h2>
            <div className="aspect-video w-full rounded-[3rem] bg-slate-200 overflow-hidden relative group cursor-pointer shadow-xl">
               <img
                src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?q=80&w=1974"
                alt="Bangalore Location"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 flex items-center justify-center p-8 bg-black/20 text-white text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/30">
                       <MapPin className="w-8 h-8 text-secondary" />
                    </div>
                    <p className="font-bold text-xl drop-shadow-lg">Rotano Suites Building, Bangalore</p>
                    <button 
                      onClick={() => window.open("https://www.google.com/maps/search/Core+Campus+Pvt+Ltd,+Rotano+Suites+Building,+Ground+Floor,+Yelahanka+Old+Town,+Bangalore+-+560064/@13.1171824,77.550839,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D", "_blank")}
                      className="bg-white text-primary px-8 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-secondary transition-all">Get Directions</button>
                  </div>
               </div>
            </div>
            <div className="p-8 bg-white rounded-[2rem] border border-slate-100 space-y-4">
               <h3 className="font-bold text-slate-900 flex items-center"><Info className="w-5 h-5 mr-2 text-primary" /> Office Hours</h3>
               <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-400">Monday - Friday</p>
                    <p className="text-slate-900 font-bold">09:00 AM - 07:00 PM</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Saturday</p>
                    <p className="text-slate-900 font-bold">10:00 AM - 05:00 PM</p>
                  </div>
               </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div
                  key={index}
                  className={`border border-slate-100 rounded-3xl transition-all duration-300 ${activeFaq === index ? "bg-white shadow-xl shadow-slate-200/50" : "bg-white/50"}`}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                  >
                    <span className={`font-bold text-lg ${activeFaq === index ? "text-primary" : "text-slate-900"}`}>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeFaq === index ? "rotate-180 text-primary" : "text-slate-400"}`} />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: activeFaq === index ? "auto" : 0, opacity: activeFaq === index ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-500 leading-relaxed pt-2 border-t border-slate-50 mt-2">
                       {faq.answer}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
            <div className="p-8 bg-primary rounded-[2rem] text-white flex items-center justify-between">
               <div className="space-y-1">
                 <p className="text-slate-400 text-sm">Still have questions?</p>
                 <p className="font-bold text-lg">Talk to our career advisor</p>
               </div>
               <a href={`tel:${COMPANY_DETAILS.callNow}`} className="bg-secondary text-primary px-6 py-3 rounded-full font-bold shadow-lg shadow-black/20 active:scale-95 transition-all">
                  Contact Now
               </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
