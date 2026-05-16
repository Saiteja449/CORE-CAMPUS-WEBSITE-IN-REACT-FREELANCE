import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, Laptop, GraduationCap, Briefcase, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES, COMPANY_DETAILS } from "../constants";

const ICON_MAP: Record<string, any> = {
  internships: Briefcase,
  sap: Laptop,
  placements: Building2,
  admissions: GraduationCap,
};

export default function Services() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-primary py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070"
            alt="header"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <motion.h4
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-secondary font-bold tracking-[0.3em] uppercase text-sm"
          >
            Empowering Your Future
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-bold text-white tracking-tight"
          >
            Professional <span className="text-secondary">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Comprehensive educational and career services designed by industry experts for modern-day requirements.
          </motion.p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 py-24 space-y-24">
        {SERVICES.map((service, index) => {
          const Icon = ICON_MAP[service.id];
          const isEven = index % 2 === 0;

          return (
            <motion.section
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
            >
              {/* Image side */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                  <img
                    src={
                      service.id === "sap"
                        ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
                        : service.id === "internships"
                        ? "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
                        : service.id === "placements"
                        ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
                        : "https://images.unsplash.com/photo-1524178232457-3aa24d9d4ffa?q=80&w=2070"
                    }
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                </div>
                {/* Accent shape */}
                <div className={`absolute -z-10 w-full h-full border-2 border-primary/10 rounded-[3rem] translate-x-4 translate-y-4 top-0 left-0`}></div>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-3xl shadow-xl shadow-primary/20">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-slate-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="/contact"
                    className="bg-primary text-secondary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 text-center"
                  >
                    Apply Now
                  </Link>
                  <a
                    href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}`}
                    className="bg-white text-primary border-2 border-primary/10 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all text-center"
                  >
                    Discuss Requirements
                  </a>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
