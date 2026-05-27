import { motion } from "motion/react";
import { Briefcase, MapPin, Rocket, Users, Target, CheckCircle2, ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-24 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/10">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Growth Opportunities</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Launch Your <span className="text-primary">Career Journey</span> With Us
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed max-w-lg">
              We connect aspiring talent with industry-leading internships, training programs, and job placements in Bangalore's booming tech ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#openings" className="bg-primary text-secondary px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 flex items-center justify-center">
                View Openings
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <Link to="/contact" className="bg-white text-primary border-2 border-primary/10 px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center">
                Career Guidance
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
                alt="Careers"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
            </div>
            {/* Shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-[3rem] -z-0 rotate-12 opacity-80 shadow-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary rounded-full blur-[80px] opacity-20"></div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">Your Road to Success</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We follow a structured 5-step roadmap to ensure every student transitions smoothly from learning to high-value employment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 overflow-hidden">
            {[
              { icon: GraduationCap, title: "Skill Assessment", step: "01", desc: "Evaluate your strengths and map them to industry needs." },
              { icon: Briefcase, title: "Strategic Training", step: "02", desc: "Intensive hands-on training with SAP and industry tools." },
              { icon: Rocket, title: "Internship Phase", step: "03", desc: "Gain real-world experience while earning a stipend." },
              { icon: Target, title: "Soft Skills", step: "04", desc: "Master communication, mock interviews, and etiquette." },
              { icon: CheckCircle2, title: "Placement", step: "05", desc: "Direct interviews with our network of 200+ partner MNCs." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-3xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <div className="absolute top-1/2 left-full w-full h-[2px] bg-slate-100 hidden md:block -z-10 -translate-y-1/2 last:hidden"></div>
                <span className="text-primary/10 text-6xl font-black absolute italic -z-10 top-0 left-0 -translate-x-4 -translate-y-4 group-hover:text-primary/5 duration-500">{item.step}</span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 
      <section id="openings" className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Open Opportunities</h2>
              <p className="text-slate-500 text-lg">Current internships and job roles available across our network.</p>
            </div>
            <div className="flex space-x-2">
               <span className="px-4 py-2 bg-white rounded-full text-xs font-bold text-slate-400 border border-slate-200">Engineering</span>
               <span className="px-4 py-2 bg-primary rounded-full text-xs font-bold text-secondary">SAP Finance</span>
               <span className="px-4 py-2 bg-white rounded-full text-xs font-bold text-slate-400 border border-slate-200">Management</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { role: "SAP S/4HANA Finance Intern", company: "MNC Partner", loc: "Bangalore", stipend: "₹15,000 - ₹25,000" },
              { role: "Junior SAP MM Consultant", company: "Core Campus Internal", loc: "Bangalore", stipend: "₹3.5 LPA - 5 LPA" },
              { role: "Technical Support Intern", company: "IT Services Partner", loc: "Work from Home", stipend: "₹10,000 - ₹12,000" },
              { role: "Corporate Relations Associate", company: "Core Campus Internal", loc: "Bangalore", stipend: "₹20,000 + Incentives" },
            ].map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 flex flex-col sm:flex-row items-center justify-between gap-6 group"
              >
                <div className="flex items-center space-x-6 w-full">
                  <div className="w-16 h-16 bg-slate-50 rounded-[1.5rem] flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:rotate-6 transition-all">
                    <Briefcase className="w-8 h-8 text-primary group-hover:text-secondary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                    <p className="text-primary font-bold text-sm">{job.company}</p>
                    <div className="flex items-center space-x-4 text-slate-500 text-xs">
                       <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {job.loc}</span>
                       <span className="text-green-600 font-bold">{job.stipend}</span>
                    </div>
                  </div>
                </div>
                <Link to="/contact" className="w-full sm:w-auto bg-slate-100 text-primary px-8 py-3 rounded-xl font-bold text-sm whitespace-nowrap group-hover:bg-primary group-hover:text-white transition-all">
                  Apply Fast
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-slate-500">Don't see a role that fits? <Link to="/contact" className="text-primary font-bold border-b border-primary/20 hover:border-primary transition-all">Upload your resume</Link> for future matching.</p>
          </div>
        </div>
      </section> */}

      {/* Benefits */}
      <section className="py-24 px-4 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-none">Why Grow with Core Campus?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                "Modern Learning Culture",
                "Direct Exposure to MNCs",
                "High Stipend Programs",
                "Global Career Pipeline",
                "Lifelong Alumni Support",
                "Expert Mentoring",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-secondary group-hover:text-primary" />
                  </div>
                  <span className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070"
              alt="Collaboration"
              className="rounded-[3rem] shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
