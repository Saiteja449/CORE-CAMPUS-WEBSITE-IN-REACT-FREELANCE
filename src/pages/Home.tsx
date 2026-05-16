import { motion } from "motion/react";
import { ArrowRight, Star, CheckCircle2, Users, Trophy, BookOpen, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES, COMPANY_DETAILS } from "../constants";

const STATS = [
  { label: "Students Trained", value: "5000+", icon: Users },
  { label: "Success Rate", value: "98%", icon: Trophy },
  { label: "Partner Companies", value: "200+", icon: Briefcase },
  { label: "Years Experience", value: "12+", icon: BookOpen },
];

const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    role: "SAP Intern",
    text: "Core Campus provided me with the perfect launchpad for my SAP career. The direct placement assistance and hands-on training were exceptional.",
    avatar: "https://i.pravatar.cc/150?u=rahul",
  },
  {
    name: "Priya V.",
    role: "Placement Success",
    text: "The mock interviews and resume workshops were a game-changer. I secured a job at a top MNC within weeks of completing my course.",
    avatar: "https://i.pravatar.cc/150?u=priya",
  },
  {
    name: "Anas K.",
    role: "Internship Program",
    text: "I highly recommend Core Campus for their internship programs. Getting a stipend while learning from industry experts is a rare opportunity.",
    avatar: "https://i.pravatar.cc/150?u=anas",
  },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary px-4 py-20 lg:py-0">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-secondary text-xs font-bold uppercase tracking-widest">Premium Educational Services</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Unlock Your <span className="text-secondary">Future</span> Potential
            </h1>
            <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
              Premium professional training and placement solutions designed to take your career from the classroom to the corporate world.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/services"
                className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-secondary/20 transition-all duration-300 flex items-center justify-center group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                Meet Our Leaders
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                alt="Students"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 blur-[2px]"></div>
            </div>
            {/* Floating Stats Card in Hero */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4 border border-slate-100">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-slate-900 font-bold text-xl leading-none">Job Guaranteed</p>
                <p className="text-slate-500 text-sm">SAP Specialized Programs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 group hover:bg-primary transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/5 rounded-2xl mb-4 group-hover:bg-white/10">
                  <stat.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                </div>
                <h3 className="text-4xl font-bold text-primary group-hover:text-white mb-1">{stat.value}</h3>
                <p className="text-slate-500 group-hover:text-slate-300 font-medium text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-slate-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Our Expertise</h4>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Shaping Your <span className="text-primary">Career Journey</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We provide end-to-end support for students, from choosing the right course to securing their dream job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-slate-100 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>
                </div>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center text-primary font-bold text-sm group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary rounded-full blur-[80px] opacity-30 animate-pulse"></div>
          </motion.div>

          <div className="space-y-8">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm">Why Partner With Us?</h4>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1]">
              The Core Campus <span className="text-primary">Advantage</span>
            </h2>
            <div className="space-y-6">
              {[
                "Direct mentorship from seasoned industry professionals.",
                "Hand-picked internship pool with guaranteed stipends.",
                "Strategic location in Bangalore - India's tech hub.",
                "Proven track record of high-salary placements.",
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-slate-700 font-medium text-lg leading-snug">{item}</p>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="inline-block bg-primary text-secondary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 active:scale-95"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-white">Student Success Stories</h2>
            <p className="text-slate-400">Join thousands of successful alumni worldwide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] space-y-6"
              >
                <div className="flex text-secondary space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center space-x-4 border-t border-white/10 pt-6">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-secondary/30" referrerPolicy="no-referrer" />
                  <div>
                    <p className="text-white font-bold">{t.name}</p>
                    <p className="text-secondary text-sm font-medium">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTABanner */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-br from-primary via-primary/95 to-indigo-900 p-12 lg:p-20 text-center space-y-8 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)]"></div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Accelerate Your <span className="text-secondary">Career?</span>
          </h2>
          <p className="text-white/70 text-xl max-w-2xl mx-auto font-light">
            Don't wait for opportunities. Create them with Core Campus. Join our next cohort today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="bg-secondary text-primary px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform"
            >
              Enroll Now
            </Link>
            <a
              href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}`}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all"
            >
              Consult with Experts
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
