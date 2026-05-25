import { motion } from "motion/react";
import {
  CheckCircle2,
  ArrowRight,
  Laptop,
  Briefcase,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  SERVICES,
  COMPANY_DETAILS,
  INTERNSHIP_DOMAINS,
  COURSES,
} from "../constants";

const DOMAIN_IMAGES: Record<string, string> = {
  "machine-learning":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqUfWYnmy5eqk-NdEpgdAPLUgw2b56fQ3nQ&s",
  "programming-in-python":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWQUr9FW6_MBsVfpxUHyFn5OOcaAms5B33Q&s",
  "data-science":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
  "artificial-intelligence":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTz5b0VHp3jCQ0jUAPQSIur3ZSOZ8UTcUrg&s",
  "web-development":
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600",
  "full-stack-web-development":
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600",
  "cyber-security":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHX20e01Rsyz2wshjaEQtpGWZNdI82TvpEYQ&s",
  "cloud-computing":
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600",
  "digital-marketing":
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600",
  "psychology":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600",
  "stock-marketing":
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600",
  "finance":
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600",
  "internet-of-things":
    "https://images.unsplash.com/photo-1518612528443-7d1d5957264f?q=80&w=600",
  "embedded-system":
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600",
  "human-resource-management":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600",
  "autocad":
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600",
  "hybrid-electric-vehicles":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJf8hIHgfumrrXJr8zzjVVjk-BlH8WAEAT7g&s",
  "programming-in-java":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNv1v6fUpMtrJ_BYGNtzIFTI335nvOBM-_iQ&s",
  "vlsi": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600",
  "nano-technology":
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600",
  "ui-ux-graphic-designing":
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=600",
  "drone-mechanics":
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600",
  "medical-coding":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReo341gSm5AFg_QI5scMD_1dM7eTF7NrPUsQ&s",
  "english-communication":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600",
};

const ICON_MAP: Record<string, any> = {
  internships: Briefcase,
  sap: Laptop,
  placements: Building2,
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
            Comprehensive educational and career services designed by industry
            experts for modern-day requirements.
          </motion.p>
        </div>
      </div>

      {/* Internship Domains */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-12">
          <h4 className="text-primary font-bold tracking-widest uppercase text-sm">
            Internship Domains
          </h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Choose Your <span className="text-primary">Career Track</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore practical internship programs with structured learning,
            projects, stipend benefits, and placement assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INTERNSHIP_DOMAINS.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.03, 0.3) }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-slate-100 min-h-[16rem]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${DOMAIN_IMAGES[domain.id] || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600"}')`,
                }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/70 to-primary/60 group-hover:from-slate-900/60 group-hover:via-slate-900/50 group-hover:to-primary/50 transition-all" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-3 group-hover:bg-white/20 transition">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {domain.title}
                  </h3>
                  <p className="text-slate-200 text-sm leading-relaxed line-clamp-2">
                    {domain.overview}
                  </p>
                  <Link
                    to={`/services/${domain.id}`}
                    className="inline-flex items-center text-secondary font-bold text-sm group/link hover:text-secondary/80 transition"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Course Section */}
      <div className="bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-4 mb-12">
            <h4 className="text-primary font-bold tracking-widest uppercase text-sm">
              Job Guarantee Course
            </h4>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              SAP <span className="text-primary">Career Program</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {COURSES.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 border border-slate-100 min-h-[23rem]"
              >
                <img
                  src={course.heroImage}
                  alt={course.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
                <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                    <Laptop className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-slate-200 leading-relaxed">
                      {course.overview}
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {course.placementSupport.slice(0, 4).map((item) => (
                      <div
                        key={item}
                        className="flex items-center space-x-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-4"
                      >
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-white font-medium text-sm">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="mt-6 inline-flex items-center text-secondary font-bold text-sm group"
                  >
                    View Course Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
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
                <div
                  className={`absolute -z-10 w-full h-full border-2 border-primary/10 rounded-[3rem] translate-x-4 translate-y-4 top-0 left-0`}
                ></div>
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
                    <div
                      key={i}
                      className="flex items-center space-x-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-slate-800 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    to={`/services/${service.id}`}
                    className="bg-primary text-secondary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 text-center"
                  >
                    View Details
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
