import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  IndianRupee,
  Users,
  Briefcase,
  GraduationCap,
  X,
  Phone,
  Mail,
} from "lucide-react";
import {
  ALL_SERVICE_DETAILS,
  COMPANY_DETAILS,
  INTERNSHIP_DOMAINS,
} from "../constants";
import { INTERNSHIP_JOB_OPENINGS } from "../data/internshipJobs";
import DomainDetailView from "../components/DomainDetailView";

const DOMAIN_IMAGES: Record<string, string> = {
  "sap": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
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

const SERVICE_GALLERIES: Record<string, { src: string; alt: string }[]> = {
  internships: [
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
      alt: "Students collaborating during an internship program",
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200",
      alt: "Mentor guiding interns through project work",
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
      alt: "Internship team discussing ideas in a workspace",
    },
    {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      alt: "Career-focused learning and professional growth",
    },
  ],
  sap: [
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      alt: "Business analytics dashboard for SAP training",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      alt: "Enterprise software environment for SAP learning",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200",
      alt: "Finance and operations team collaborating on SAP workflows",
    },
    {
      src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200",
      alt: "Professional training session for SAP career development",
    },
  ],
  placements: [
    {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200",
      alt: "Placement interview and career discussion",
    },
    {
      src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200",
      alt: "Resume review and interview preparation support",
    },
    {
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
      alt: "Career guidance session for placements",
    },
    {
      src: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=1200",
      alt: "Hiring and recruitment collaboration for placements",
    },
  ],
};

type ServiceDetailRecord = {
  id: string;
  title: string;
  overview: string;
  skills: string[];
  benefits: string[];
  placement: string;
  cta?: string;
  fees?: { title: string; details: string[]; fees: string }[];
  stipendInfo?: { title: string; details: string[] }[];
  eligibility?: string[];
  durationOptions?: string[];
  jobOpenings?: typeof INTERNSHIP_JOB_OPENINGS;
};

type InternshipApplicationForm = {
  name: string;
  phone: string;
  qualification: string;
  age: string;
  notes: string;
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = ALL_SERVICE_DETAILS.find((item) => item.id === serviceId);
  const [selectedOpening, setSelectedOpening] = useState<
    (typeof INTERNSHIP_JOB_OPENINGS)[number] | null
  >(null);
  const [formData, setFormData] = useState<InternshipApplicationForm>({
    name: "",
    phone: "",
    qualification: "",
    age: "",
    notes: "",
  });

  // Must be before any early returns — React requires all hooks to run unconditionally
  useEffect(() => {
    if (!selectedOpening) return;
    setFormData((current) => ({
      ...current,
      qualification: current.qualification || selectedOpening.qualification,
    }));
  }, [selectedOpening]);

  if (!service) {
    return (
      <div className="pt-32 pb-24 bg-slate-50 min-h-screen px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm text-center space-y-6">
          <h1 className="text-4xl font-bold text-slate-900">
            Service not found
          </h1>
          <p className="text-slate-600">
            The service you are looking for is unavailable.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center text-primary font-bold"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const detail = service as ServiceDetailRecord;

  const isDomain = INTERNSHIP_DOMAINS.some((d) => d.id === detail.id) || detail.id === "sap";
  if (isDomain) {
    return (
      <DomainDetailView
        domain={detail}
        domainImage={
          DOMAIN_IMAGES[detail.id] ||
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600"
        }
      />
    );
  }

  const gallery = SERVICE_GALLERIES[detail.id] ?? [];
  const internshipJobs =
    (detail.id === "internships" || detail.id === "placements") ? INTERNSHIP_JOB_OPENINGS : [];
  const internshipDomains =
    detail.id === "internships" ? INTERNSHIP_DOMAINS : [];

  const openApplication = (
    opening: (typeof INTERNSHIP_JOB_OPENINGS)[number],
  ) => {
    setSelectedOpening(opening);
    setFormData({
      name: "",
      phone: "",
      qualification: opening.qualification,
      age: "",
      notes: "",
    });
  };

  const closeApplication = () => setSelectedOpening(null);

  const isPlacementsPage = detail.id === "placements";

  const handleApply = () => {
    if (!selectedOpening) return;
    const message = [
      isPlacementsPage ? "Job application request" : "Internship application request",
      `Company: ${selectedOpening.company}`,
      `Role: ${selectedOpening.role}`,
      `Location: ${selectedOpening.location}`,
      `Salary: ${selectedOpening.salary}`,
      `Vacancies: ${selectedOpening.vacancies}`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Qualification: ${formData.qualification}`,
      `Age: ${formData.age}`,
      formData.notes ? `Notes: ${formData.notes}` : null,
      "",
      isPlacementsPage
        ? "Applying via Core Campus – Jobs & Placement Assistance."
        : "This is an internship opening for ECE, EEE, Mechanical, ITI, and Diploma batches.",
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {detail.id === "internships" ? (
        <section className="bg-gradient-to-r from-primary via-primary to-blue-800 py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
              alt="Professional internship"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10 space-y-8">
            <Link
              to="/services"
              className="inline-flex items-center text-secondary font-bold"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Services
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <p className="text-secondary font-bold tracking-[0.3em] uppercase text-sm mb-4">
                  Launch Your Career
                </p>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                  Internships with Stipend & Paid Opportunities
                </h1>
                <p className="text-slate-100 text-lg lg:text-xl leading-relaxed max-w-3xl">
                  Choose between paid internships across 25+ domains or
                  exclusive stipend internships for engineering and diploma
                  students with accommodation and living support.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition"
                >
                  <Briefcase className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Paid Internships
                  </h3>
                  <p className="text-slate-200 text-sm">
                    25+ domains with project-based learning and career growth
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-secondary/20 backdrop-blur-md border-2 border-secondary rounded-3xl p-6 hover:bg-secondary/30 transition"
                >
                  <IndianRupee className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">
                    Stipend Internships
                  </h3>
                  <p className="text-slate-200 text-sm">
                    ₹5000 stipend + accommodation for eligible students
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="bg-primary py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070"
              alt={service.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-7xl mx-auto relative z-10 space-y-8">
            <Link
              to="/services"
              className="inline-flex items-center text-secondary font-bold"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Services
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl space-y-6"
            >
              <p className="text-secondary font-bold tracking-[0.3em] uppercase text-sm">
                Service Details
              </p>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                {detail.title}
              </h1>
              <p className="text-slate-300 text-lg lg:text-xl leading-relaxed">
                {detail.overview}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="bg-secondary text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all text-center"
                >
                  {detail.cta ?? "Contact Us"}
                </Link>
                <a
                  href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}`}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
                >
                  Discuss Requirements
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {detail.id === "internships" && (
        <>
          {/* Paid Internships Section */}
          <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <p className="text-primary font-bold tracking-widest uppercase text-sm">
                  Professional Internships
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                  Paid Internships Across{" "}
                  <span className="text-primary">25+ Domains</span>
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto text-lg">
                  Industry-relevant projects with expert mentorship. Open to all
                  backgrounds. Build your portfolio while earning a stipend or
                  salary.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left - Image */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200"
                      alt="Team collaboration and professional growth"
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                  </div>
                </motion.div>

                {/* Right - Domain Grid */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {internshipDomains.slice(0, 8).map((domain) => (
                      <Link
                        key={domain.id}
                        to={`/services/${domain.id}`}
                        className="relative rounded-2xl overflow-hidden group h-28 cursor-pointer"
                      >
                        {/* Background Image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                          style={{
                            backgroundImage: `url('${DOMAIN_IMAGES[domain.id] || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600"}')`,
                          }}
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-900/60 to-primary/60 group-hover:from-slate-900/50 group-hover:via-slate-900/40 group-hover:to-primary/50 transition-all" />

                        {/* Content */}
                        <div className="relative h-full flex flex-col justify-between p-4">
                          <p className="font-bold text-white text-sm leading-tight">
                            {domain.title}
                          </p>
                          <p className="text-secondary text-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Learn more <ArrowRight className="w-3 h-3" />
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary font-bold text-sm group mt-4"
                  >
                    View all 25+ domains
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stipend Internships Section - Prominent */}
          <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center space-y-6"
              >
                <h2 className="text-4xl lg:text-6xl font-bold text-white">
                  Stipend Internships
                </h2>
                <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                  Exclusive opportunity for engineering and diploma students.
                  Get paid ₹5,000 monthly stipend plus accommodation and meals.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Eligibility Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="lg:col-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/20 mb-6">
                    <GraduationCap className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Eligible Departments
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Mechanical Engineering",
                      "Electrical Engineering",
                      "Electronics & Communication",
                      "Diploma",
                      "ITI",
                    ].map((dept) => (
                      <div
                        key={dept}
                        className="flex items-center gap-3 text-white"
                      >
                        <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                        <span className="font-medium">{dept}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Benefits Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-secondary/20 to-primary/20 border border-secondary/30 rounded-3xl p-8"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/30 mb-6">
                    <Briefcase className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6">
                    What You Get
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="text-3xl font-bold text-secondary">
                        ₹5K
                      </div>
                      <div>
                        <p className="font-bold text-white">Monthly Stipend</p>
                        <p className="text-slate-300 text-sm">
                          Paid monthly during internship
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-white/10 pt-4 space-y-2">
                      <p className="text-white font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        Accommodation provided
                      </p>
                      <p className="text-white font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        Meals and food
                      </p>
                      <p className="text-white font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        Bus facility
                      </p>
                      <p className="text-white font-medium flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                        Expert mentorship
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/20 mb-6">
                      <Users className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Domains Available
                    </h3>
                    <p className="text-slate-300 mb-6">
                      25+ specialized domains from AI to Web Development, all
                      with stipend support for eligible students.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full bg-secondary text-primary px-6 py-3 rounded-full font-bold hover:shadow-xl hover:shadow-secondary/40 transition-all"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Duration & Fees Section */}
          <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="space-y-12">
              <div className="text-center">
                <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                  Program Details
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                  Duration, Fees & Stipend Structure
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-8">
                {/* Paid Internships */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-lg overflow-hidden"
                >
                  <div className="bg-primary/5 px-8 py-6 border-b border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-900">
                      Paid Internships
                    </h3>
                  </div>
                  <div className="p-8 space-y-6">
                    {[
                      {
                        title: "1 Month Internship",
                        price: "₹5,000",
                        desc: "Live Classes Only",
                      },
                      {
                        title: "2 Months Internship",
                        price: "₹6,000",
                        desc: "Classes + Project",
                      },
                      {
                        title: "3 Months Internship",
                        price: "₹7,000",
                        desc: "Full Program with Placement",
                      },
                    ].map((option, i) => (
                      <div
                        key={i}
                        className="border-l-4 border-primary pl-4 py-2"
                      >
                        <p className="font-bold text-slate-900">
                          {option.title}
                        </p>
                        <p className="text-2xl font-bold text-primary mt-1">
                          {option.price}
                        </p>
                        <p className="text-slate-600 text-sm mt-1">
                          {option.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </>
      )}

      {(detail.id === "internships" || detail.id === "placements") && internshipJobs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="space-y-12">
            <div className="text-center">
              <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
                {isPlacementsPage ? "Live Job Openings" : "Hiring Partner"}
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                {isPlacementsPage ? "Current Job Openings" : "Current Internship Openings"}
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg mt-4">
                {isPlacementsPage
                  ? "Active job openings from our hiring partners. Click Apply Now to send your details directly via WhatsApp."
                  : "Direct hiring opportunities from our partner companies. Apply through WhatsApp to connect with recruiters."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {internshipJobs.map((job) => (
                <motion.article
                  role="button"
                  tabIndex={0}
                  key={`${job.company}-${job.role}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  onClick={() => openApplication(job)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openApplication(job);
                    }
                  }}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div>
                      <p className="text-xs font-bold tracking-[0.3em] uppercase text-secondary">
                        Now Hiring
                      </p>
                      <h3 className="text-xl font-bold text-slate-900 mt-2">
                        {job.company}
                      </h3>
                      <p className="text-primary font-semibold mt-1">
                        {job.role}
                      </p>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {job.company.slice(0, 1)}
                    </div>
                  </div>

                  <div className="space-y-3 mb-5 pb-5 border-b border-slate-100">
                    <div className="flex justify-between items-start">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Location
                      </p>
                      <p className="text-sm font-semibold text-slate-700 text-right">
                        {job.location}
                      </p>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Salary
                      </p>
                      <p className="text-sm font-semibold text-primary text-right">
                        {job.salary}
                      </p>
                    </div>
                    <div className="flex justify-between items-start">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Vacancies
                      </p>
                      <p className="text-sm font-semibold text-slate-700">
                        {job.vacancies}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/5 text-primary px-4 py-2.5 text-sm font-bold hover:bg-primary/10 transition w-full"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedOpening && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm">
          <div className="flex min-h-full items-start sm:items-center justify-center p-3 sm:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="w-full max-w-2xl rounded-2xl sm:rounded-[2rem] bg-white shadow-2xl border border-slate-100 overflow-hidden"
            >
              {/* Sticky modal header */}
              <div className="sticky top-0 z-10 bg-white flex items-start justify-between gap-3 border-b border-slate-100 px-4 sm:px-6 py-4 sm:py-5">
                <div className="min-w-0">
                  <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary">
                    {isPlacementsPage ? "Apply for Job" : "Apply for Internship"}
                  </p>
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mt-1 leading-tight">
                    {selectedOpening.company}
                  </h3>
                  <p className="text-slate-500 font-medium text-sm">
                    {selectedOpening.role} — {selectedOpening.location}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeApplication}
                  className="flex-shrink-0 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition"
                  aria-label="Close application form"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>

              {/* Job info strip — 3 cards horizontal on sm+, stacked on mobile */}
              <div className="bg-slate-50 px-4 sm:px-6 py-4 border-b border-slate-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                  <div className="rounded-xl bg-white border border-slate-100 px-3 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Qualification
                    </p>
                    <p className="mt-0.5 text-sm text-slate-800 font-medium leading-snug">
                      {selectedOpening.qualification}
                    </p>
                  </div>
                  <div className="rounded-xl bg-white border border-slate-100 px-3 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Salary
                    </p>
                    <p className="mt-0.5 text-sm text-slate-800 font-medium leading-snug">
                      {selectedOpening.salary}
                    </p>
                  </div>
                  <div className="rounded-xl bg-white border border-slate-100 px-3 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      {isPlacementsPage ? "Gender" : "Requirements"}
                    </p>
                    <p className="mt-0.5 text-sm text-slate-800 font-medium leading-snug">
                      {isPlacementsPage
                        ? selectedOpening.gender
                        : "ECE, EEE, Mech, ITI, Diploma"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Form fields */}
              <div className="px-4 sm:px-6 py-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Full Name"
                    value={formData.name}
                    onChange={(value) =>
                      setFormData((current) => ({ ...current, name: value }))
                    }
                    placeholder="Enter your name"
                    required
                  />
                  <InputField
                    label="Phone Number"
                    value={formData.phone}
                    onChange={(value) =>
                      setFormData((current) => ({ ...current, phone: value }))
                    }
                    placeholder="10-digit mobile number"
                    type="tel"
                    required
                  />
                  <InputField
                    label="Qualification"
                    value={formData.qualification}
                    onChange={(value) =>
                      setFormData((current) => ({
                        ...current,
                        qualification: value,
                      }))
                    }
                    placeholder={isPlacementsPage ? "Your highest qualification" : "ITI / Diploma / ECE / EEE / Mechanical"}
                    required
                  />
                  <InputField
                    label="Age"
                    value={formData.age}
                    onChange={(value) =>
                      setFormData((current) => ({ ...current, age: value }))
                    }
                    placeholder="Your age"
                    type="number"
                    required
                  />
                </div>
                <InputField
                  label="Notes (optional)"
                  value={formData.notes}
                  onChange={(value) =>
                    setFormData((current) => ({ ...current, notes: value }))
                  }
                  placeholder="Any short note for the recruiter"
                  multiline
                />

                <div className="flex flex-col sm:flex-row gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleApply}
                    className="flex-1 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 font-bold text-secondary text-sm hover:shadow-lg transition-all"
                  >
                    {isPlacementsPage ? "Send via WhatsApp" : "Apply on WhatsApp"}
                  </button>
                  <a
                    href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}`}
                    className="flex-1 inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 font-bold text-slate-700 text-sm hover:bg-slate-50 transition-all"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Direct WhatsApp
                  </a>
                </div>
                <p className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed pb-1">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  Your details are used only to generate the WhatsApp message
                  for this {isPlacementsPage ? "job" : "internship"} opening.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      <section className="max-w-7xl mx-auto px-4 py-20 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DetailCard
            icon={GraduationCap}
            title="Key Skills Covered"
            items={detail.skills}
          />
          <DetailCard
            icon={Briefcase}
            title="Benefits"
            items={detail.benefits}
          />
          <DetailCard
            icon={Users}
            title="Eligibility Criteria"
            items={detail.eligibility ?? ["Shared during counseling"]}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Duration & Fees
              </h2>
            </div>
            {detail.durationOptions && detail.durationOptions.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-5">
                {detail.durationOptions.map((option) => (
                  <span
                    key={option}
                    className="inline-flex items-center rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary"
                  >
                    {option}
                  </span>
                ))}
              </div>
            )}
            {detail.fees && detail.fees.length > 0 ? (
              <div className="space-y-5">
                {detail.fees.map((option) => (
                  <div
                    key={option.title}
                    className="rounded-2xl border border-slate-100 p-5 bg-slate-50"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <h3 className="text-lg font-bold text-primary">
                        {option.title}
                      </h3>
                      <span className="font-bold text-slate-900">
                        {option.fees}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {option.details.map((item) => (
                        <li
                          key={item}
                          className="flex items-start space-x-3 text-slate-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-600 leading-relaxed">
                Fee and duration details are shared during counseling for this
                program.
              </p>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">
                Placement Assistance Details
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {detail.placement}
              </p>
            </div>
          </div>
        </div>
      </section>

      {internshipDomains.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 p-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
              <div>
                <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">
                  Internship Domains
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-3">
                  Choose your stipend internship track
                </h2>
              </div>
              <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
                Explore our internship domains and click through for full
                program details, projects, and placement support.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {internshipDomains.map((domain) => (
                <div
                  key={domain.id}
                  className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {domain.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {domain.overview}
                  </p>
                  <div className="space-y-2 mb-5">
                    {domain.skills.slice(0, 3).map((skill) => (
                      <p
                        key={skill}
                        className="text-slate-700 text-sm flex items-center gap-2"
                      >
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                        {skill}
                      </p>
                    ))}
                  </div>
                  <Link
                    to={`/services/${domain.id}`}
                    className="inline-flex items-center justify-between w-full rounded-full bg-primary px-4 py-3 text-sm font-bold text-secondary hover:bg-primary/90 transition"
                  >
                    View domain details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function DetailCard({
  icon: Icon,
  title,
  items,
}: {
  icon: any;
  title: string;
  items: string[];
}) {
  return (
    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm h-full">
      <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-5">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start space-x-3 text-slate-600">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-100 p-3">
      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">
        {label}
      </p>
      <p className="text-sm text-slate-700 font-medium mt-1 leading-relaxed">
        {value}
      </p>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
        {label}
        {required ? " *" : ""}
      </span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={3}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
      )}
    </label>
  );
}
