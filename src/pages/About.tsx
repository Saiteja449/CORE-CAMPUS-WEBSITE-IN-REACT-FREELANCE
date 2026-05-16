import { motion } from "motion/react";
import { COMPANY_DETAILS } from "../constants";
import { Target, Eye, Award, CheckCircle2, History, Users2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden bg-primary">
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold tracking-[0.3em] uppercase text-sm"
          >
            Since 2012
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-8xl font-bold text-white tracking-tight"
          >
            Our <span className="text-secondary">Vision</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-2xl mx-auto text-xl font-light"
          >
            Bridging the gap between academic education and industry excellence through innovation and dedication.
          </motion.p>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
      </section>

      {/* Intro section */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Pioneering Professional Excellence at <span className="text-primary text-gradient">Core Campus</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Core Campus Pvt Ltd stands at the forefront of career coaching and institutional training in Bangalore. We are more than just a training center; we are a career accelerator dedicated to empowering students with practical skills that the modern industry demands.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="flex flex-col space-y-3">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-2">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-slate-500 text-sm">To design and deliver world-class educational services that transform students into industry leaders.</p>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-2">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-slate-500 text-sm">To be the most trusted name in educational consultancy and skill-based training globally.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
              alt="Team at work"
              className="rounded-[3rem] shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -z-10 top-10 left-10 w-full h-full bg-primary/5 rounded-[3rem]"></div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-4">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Meet the Visionaries</h4>
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight">Driving Excellence Through Leadership</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* CEO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-8 rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974"
                  alt="CEO"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary p-12 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-3xl font-bold text-white mb-2">{COMPANY_DETAILS.ceo.name}</h3>
                  <p className="text-secondary font-bold uppercase tracking-widest text-sm">Chief Executive Officer</p>
                </div>
              </div>
              <div className="text-center space-y-4 px-4 overflow-hidden">
                <p className="text-slate-600 leading-relaxed max-w-md mx-auto">
                  A visionary leader with over a decade of experience in the education sector, driving Core Campus towards global standards of excellence.
                </p>
                <div className="flex justify-center space-x-4">
                   <div className="px-4 py-2 bg-slate-100 rounded-full text-primary font-bold text-xs uppercase tracking-tighter">Strategic Lead</div>
                   <div className="px-4 py-2 bg-slate-100 rounded-full text-primary font-bold text-xs uppercase tracking-tighter">Community Builder</div>
                </div>
              </div>
            </motion.div>

            {/* Founder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative mb-8 rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974"
                  alt="Founder"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary p-12 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-3xl font-bold text-white mb-2">{COMPANY_DETAILS.founder.name}</h3>
                  <p className="text-secondary font-bold uppercase tracking-widest text-sm">Founder & Chairman</p>
                </div>
              </div>
              <div className="text-center space-y-4 px-4 overflow-hidden">
                <p className="text-slate-600 leading-relaxed max-w-md mx-auto">
                  The cornerstone of Core Campus, focusing on building high-value partnerships and ensuring every student receives personalized mentorship.
                </p>
                <div className="flex justify-center space-x-4">
                   <div className="px-4 py-2 bg-slate-100 rounded-full text-primary font-bold text-xs uppercase tracking-tighter">Educationist</div>
                   <div className="px-4 py-2 bg-slate-100 rounded-full text-primary font-bold text-xs uppercase tracking-tighter">Career Mentor</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline/Achievements */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">Our Milestones</h2>
          </div>
          <div className="relative border-l-2 border-primary/10 pl-8 space-y-12 ml-4">
            {[
              { year: "2012", title: "The Foundation", desc: "Core Campus was founded with a mission to help Bangalore's students find their career paths." },
              { year: "2015", title: "SAP Excellence Center", desc: "Launched our specialized SAP training division with a unique job-guarantee model." },
              { year: "2018", title: "Global Partnerships", desc: "Expanded into international educational consultancy and partnered with 50+ Global Universities." },
              { year: "2023", title: "Digital Transformation", desc: "Migrated to hybrid learning models and reached over 5000+ successful alumni milestones." },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-secondary border-4 border-white shadow-sm shadow-secondary/50"></div>
                <div className="space-y-2">
                  <span className="text-primary font-bold text-2xl">{item.year}</span>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
