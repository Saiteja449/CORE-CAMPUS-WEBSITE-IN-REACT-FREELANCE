import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Users,
  IndianRupee,
  Clock,
  Mail,
  Phone,
  Layers,
} from "lucide-react";
import { COMPANY_DETAILS } from "../constants";
import { DOMAIN_ADDITIONAL_DETAILS } from "../data/domainDetails";

type DomainDetailRecord = {
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
};

interface DomainDetailViewProps {
  domain: DomainDetailRecord;
  domainImage: string;
}

interface ApplicationForm {
  name: string;
  phone: string;
  email: string;
  qualification: string;
  batchYear: string;
  duration: string;
  notes: string;
}

export default function DomainDetailView({ domain, domainImage }: DomainDetailViewProps) {
  const additionalDetails = DOMAIN_ADDITIONAL_DETAILS[domain.id] || {
    uses: [
      `Used in building modern technical frameworks in the ${domain.title} industry.`,
      `Applied to solve automation and process pipelines in commercial services.`,
      `Leveraged by developers and engineering groups for scalability and efficiency.`,
    ],
    gallery: [
      {
        src: domainImage,
        alt: `${domain.title} application visual`,
      },
    ],
  };

  const [formData, setFormData] = useState<ApplicationForm>({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    batchYear: "",
    duration: domain.id === "sap" ? "Job Guarantee Program" : (domain.durationOptions?.[0] || "1 Month Internship"),
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      qualification: "",
      batchYear: "",
      duration: domain.id === "sap" ? "Job Guarantee Program" : (domain.durationOptions?.[0] || "1 Month Internship"),
      notes: "",
    });
    setSubmitted(false);
    setErrorMsg("");
  }, [domain.id, domain.durationOptions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!formData.qualification.trim()) {
      setErrorMsg("Please enter your educational qualification.");
      return;
    }
    if (!formData.batchYear.trim()) {
      setErrorMsg("Please enter your graduation year / batch.");
      return;
    }

    setErrorMsg("");
    setSubmitted(true);

    const message = [
      `*Core Campus - ${domain.id === "sap" ? "SAP Course Enrollment" : "Domain Internship Application"}*`,
      `-----------------------------------------`,
      `*Selected ${domain.id === "sap" ? "Course" : "Domain"}:* ${domain.title}`,
      `*${domain.id === "sap" ? "Program Type" : "Preferred Duration"}:* ${formData.duration}`,
      `*Full Name:* ${formData.name.trim()}`,
      `*Phone Number:* ${formData.phone.trim()}`,
      formData.email.trim() ? `*Email:* ${formData.email.trim()}` : null,
      `*Qualification:* ${formData.qualification.trim()}`,
      `*Graduation Year/Batch:* ${formData.batchYear.trim()}`,
      formData.notes.trim() ? `*Message/Notes:* ${formData.notes.trim()}` : null,
      `-----------------------------------------`,
      `Sent from Core Campus website.`,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-950 via-primary to-blue-900 py-20 px-4 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 opacity-15">
          <img
            src={domainImage}
            alt={domain.title}
            className="w-full h-full object-cover filter blur-[2px]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <Link
            to="/services"
            className="inline-flex items-center text-secondary font-bold hover:underline"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl space-y-6"
          >
            <p className="text-secondary font-bold tracking-[0.25em] uppercase text-xs">
              {domain.id === "sap" ? "Premium Career Course" : "Specialized Internship Domain"}
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              {domain.title}
            </h1>
            <p className="text-slate-200 text-lg lg:text-xl leading-relaxed max-w-3xl">
              {domain.overview}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#apply-form"
                className="bg-secondary text-primary px-8 py-3.5 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-secondary/20 transition-all text-center"
              >
                {domain.id === "sap" ? "Enroll in Course" : "Apply for Internship"}
              </a>
              <a
                href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Speak with Advisor
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SAP Job Guarantee Partner Companies Banner */}
      {domain.id === "sap" && (
        <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
          <div className="bg-gradient-to-r from-secondary via-amber-400 to-yellow-500 rounded-[2rem] p-6 shadow-xl text-primary border border-white/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center lg:text-left">
                <p className="font-bold tracking-widest uppercase text-xs text-primary/80">100% Placement Guarantee</p>
                <h3 className="text-2xl font-black tracking-tight">Job Guarantee in 5 Top Multinational Companies</h3>
                <p className="text-sm font-medium text-primary/95">We provide placement opportunities with our training partners:</p>
              </div>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-end">
                {["Deloitte", "Capgemini", "Accenture", "IBM", "SAP Labs"].map((company) => (
                  <span
                    key={company}
                    className="inline-flex items-center rounded-full bg-primary text-white font-bold px-4.5 py-2 text-sm shadow-md"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Real World Uses Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-secondary/15 flex items-center justify-center mb-6">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">Real-World Uses</h2>
            <ul className="space-y-4">
              {additionalDetails.uses.map((use, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{use}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">Benefits of Learning</h2>
            <ul className="space-y-4">
              {domain.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Eligibility Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-5">Eligibility</h2>
            <ul className="space-y-4">
              {(domain.eligibility || ["Degree", "Diploma", "B.Tech"]).map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600 text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Gallery & Skills Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Related Images Gallery */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm">
              <div className="mb-6">
                <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Visual Workspace</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-2">Related Gallery</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {additionalDetails.gallery.map((image, index) => (
                  <motion.figure
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-2xl h-48 border border-slate-100 group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-300" />
                    <figcaption className="absolute bottom-2 left-2 right-2 text-white bg-slate-900/60 backdrop-blur-sm rounded-lg px-2.5 py-1 text-xs text-center font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.alt}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Key Skills & Projects Covered</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-slate-100 hover:bg-primary/5 hover:text-primary transition-colors px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-200/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Placement Assistance Section */}
            <div className="bg-gradient-to-r from-primary to-slate-950 text-white rounded-[2rem] p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Placement Support Details</h3>
              </div>
              <p className="text-slate-200 leading-relaxed text-sm">
                {domain.placement}
              </p>
            </div>
          </div>

          {/* Sidebar: Details & Application Form */}
          <div id="apply-form" className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Fees and Duration */}
            <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <span className="text-slate-500 font-semibold text-sm">Duration Options</span>
                <div className="flex gap-1.5 flex-wrap justify-end max-w-[65%]">
                  {domain.id === "sap" ? (
                    <span className="text-xs bg-primary/5 text-primary px-2.5 py-1 rounded-full font-bold">
                      Counseling
                    </span>
                  ) : (
                    (domain.durationOptions || ["1-3 Months"]).map((dur) => (
                      <span key={dur} className="text-xs bg-primary/5 text-primary px-2.5 py-1 rounded-full font-bold">
                        {dur.split(" ")[0]} {dur.split(" ")[1] || ""}
                      </span>
                    ))
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <span className="text-slate-500 font-semibold text-sm">Fees Structure</span>
                <span className="font-bold text-slate-800 text-sm">
                  {domain.id === "sap" ? "₹75,000 + 1st Mo. Sal." : "₹5,000 - ₹7,000"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-semibold text-sm">
                  {domain.id === "sap" ? "Placement Guarantee" : "Stipend Opportunities"}
                </span>
                <span className="font-bold text-sm text-green-600">
                  {domain.id === "sap" ? "100% Job Guarantee" : "Eligible (up to ₹16,000)"}
                </span>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-md space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900">Quick Registration</h3>
                <p className="text-slate-500 text-xs">
                  Fill in your academic profile. Submission redirects to WhatsApp to confirm with a counselor.
                </p>
              </div>

              {errorMsg && (
                <div className="text-xs font-semibold text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5">
                  {errorMsg}
                </div>
              )}

              {submitted && (
                <div className="text-xs font-semibold text-green-600 bg-green-50 border border-green-100 rounded-xl px-4 py-2.5">
                  Redirecting to WhatsApp to send application details!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/5"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                    placeholder="10-digit mobile number"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/5"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address (Optional)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/5"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Qualification *</label>
                  <input
                    type="text"
                    required
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    placeholder="e.g. B.Tech (ECE) / Diploma / ITI"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/5"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Graduation Year / Batch *</label>
                  <input
                    type="text"
                    required
                    value={formData.batchYear}
                    onChange={(e) => setFormData({ ...formData, batchYear: e.target.value })}
                    placeholder="e.g. 2024 / 2025 / 2026"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/5"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {domain.id === "sap" ? "Program Type" : "Internship Duration"}
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/5 cursor-pointer"
                  >
                    {domain.id === "sap" ? (
                      <option value="Job Guarantee Program">Job Guarantee Program</option>
                    ) : (
                      (domain.durationOptions || ["1 Month Internship", "2 Months Internship", "3 Months Internship"]).map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))
                    )}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Notes / Remarks</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Any prior experience or general requests"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/5 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-secondary px-6 py-3 font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  Submit & Open WhatsApp
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
