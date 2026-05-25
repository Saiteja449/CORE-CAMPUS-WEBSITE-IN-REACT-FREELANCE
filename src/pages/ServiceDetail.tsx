import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, IndianRupee, Users, Briefcase, GraduationCap, X, Phone, Mail } from "lucide-react";
import { ALL_SERVICE_DETAILS, COMPANY_DETAILS } from "../constants";
import { INTERNSHIP_JOB_OPENINGS } from "../data/internshipJobs";

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
  const [selectedOpening, setSelectedOpening] = useState<(typeof INTERNSHIP_JOB_OPENINGS)[number] | null>(null);
  const [formData, setFormData] = useState<InternshipApplicationForm>({
    name: "",
    phone: "",
    qualification: "",
    age: "",
    notes: "",
  });

  if (!service) {
    return (
      <div className="pt-32 pb-24 bg-slate-50 min-h-screen px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm text-center space-y-6">
          <h1 className="text-4xl font-bold text-slate-900">Service not found</h1>
          <p className="text-slate-600">The service you are looking for is unavailable.</p>
          <Link to="/services" className="inline-flex items-center text-primary font-bold">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const detail = service as ServiceDetailRecord;
  const gallery = SERVICE_GALLERIES[detail.id] ?? [];
  const internshipJobs = detail.id === "internships" ? INTERNSHIP_JOB_OPENINGS : [];

  useEffect(() => {
    if (!selectedOpening) return;
    setFormData((current) => ({
      ...current,
      qualification: current.qualification || selectedOpening.qualification,
    }));
  }, [selectedOpening]);

  const openApplication = (opening: (typeof INTERNSHIP_JOB_OPENINGS)[number]) => {
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

  const handleApply = () => {
    if (!selectedOpening) return;
    const message = [
      "Internship application request",
      `Company: ${selectedOpening.company}`,
      `Role: ${selectedOpening.role}`,
      `Location: ${selectedOpening.location}`,
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Qualification / Batch: ${formData.qualification}`,
      `Age: ${formData.age}`,
      formData.notes ? `Notes: ${formData.notes}` : null,
      "",
      "This is an internship opening for ECE, EEE, Mechanical, ITI, and Diploma batches.",
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/91${COMPANY_DETAILS.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
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
          <Link to="/services" className="inline-flex items-center text-secondary font-bold">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Services
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl space-y-6">
            <p className="text-secondary font-bold tracking-[0.3em] uppercase text-sm">Service Details</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">{detail.title}</h1>
            <p className="text-slate-300 text-lg lg:text-xl leading-relaxed">{detail.overview}</p>
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

      {gallery.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
          <div className="bg-white rounded-[2.5rem] p-4 sm:p-6 lg:p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
              <div>
                <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Visual Overview</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-2">Images that define {detail.title}</h2>
              </div>
              <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
                A quick visual summary of the service so visitors can immediately understand the learning, support, and outcomes involved.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {gallery.map((image, index) => (
                <motion.figure
                  key={image.src}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.08, 0.24) }}
                  className={`relative overflow-hidden rounded-[2rem] border border-slate-100 shadow-sm ${index === 0 ? "lg:col-span-2 lg:row-span-2 min-h-[18rem] lg:min-h-[28rem]" : "min-h-[12rem]"}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                </motion.figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {detail.id === "internships" && internshipJobs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-6">
              <div>
                <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Internship Openings</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-2">Current internship openings from the stipend network</h2>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                These are internship openings only for ECE, EEE, Mechanical, ITI, and Diploma batches. Empty rows were skipped so only usable listings are shown.
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
                  className="rounded-[2rem] border border-slate-100 bg-slate-50 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Hiring</p>
                      <h3 className="text-xl font-bold text-slate-900 mt-2">{job.company}</h3>
                      <p className="text-slate-600 font-medium mt-1">{job.role}</p>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-primary text-secondary flex items-center justify-center font-bold">
                      {job.company.slice(0, 1)}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <InfoRow label="Qualification" value={job.qualification} />
                    <InfoRow label="Location" value={job.location} />
                    <InfoRow label="Salary" value={job.salary} />
                    <InfoRow label="Vacancies" value={String(job.vacancies)} />
                    <InfoRow label="Gender" value={job.gender} />
                    <InfoRow label="Age Group" value={job.ageGroup} />
                    {job.ot && <InfoRow label="OT" value={job.ot} />}
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-secondary px-4 py-2 text-sm font-bold">
                    Apply for Internship
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {selectedOpening && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-8 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="w-full max-w-2xl rounded-[2rem] bg-white shadow-2xl border border-slate-100 overflow-hidden"
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-5">
              <div>
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Apply for Internship</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-2">{selectedOpening.company}</h3>
                <p className="text-slate-500 font-medium">{selectedOpening.role} - {selectedOpening.location}</p>
              </div>
              <button
                type="button"
                onClick={closeApplication}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
                aria-label="Close application form"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-slate-50 p-6 space-y-4 border-b lg:border-b-0 lg:border-r border-slate-100">
                <div className="rounded-[1.5rem] bg-white border border-slate-100 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Qualification</p>
                  <p className="mt-1 text-slate-800 font-medium">{selectedOpening.qualification}</p>
                </div>
                <div className="rounded-[1.5rem] bg-white border border-slate-100 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Salary</p>
                  <p className="mt-1 text-slate-800 font-medium">{selectedOpening.salary}</p>
                </div>
                <div className="rounded-[1.5rem] bg-white border border-slate-100 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">Requirements</p>
                  <p className="mt-1 text-slate-800 font-medium">ECE, EEE, Mechanical, ITI and Diploma batches only</p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <InputField
                  label="Full Name"
                  value={formData.name}
                  onChange={(value) => setFormData((current) => ({ ...current, name: value }))}
                  placeholder="Enter your name"
                  required
                />
                <InputField
                  label="Phone Number"
                  value={formData.phone}
                  onChange={(value) => setFormData((current) => ({ ...current, phone: value }))}
                  placeholder="10-digit mobile number"
                  type="tel"
                  required
                />
                <InputField
                  label="Qualification / Batch"
                  value={formData.qualification}
                  onChange={(value) => setFormData((current) => ({ ...current, qualification: value }))}
                  placeholder="ITI / Diploma / ECE / EEE / Mechanical"
                  required
                />
                <InputField
                  label="Age"
                  value={formData.age}
                  onChange={(value) => setFormData((current) => ({ ...current, age: value }))}
                  placeholder="Your age"
                  type="number"
                  required
                />
                <InputField
                  label="Notes"
                  value={formData.notes}
                  onChange={(value) => setFormData((current) => ({ ...current, notes: value }))}
                  placeholder="Any short note for the recruiter"
                  multiline
                />

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleApply}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-bold text-secondary hover:shadow-lg transition-all"
                  >
                    Apply on WhatsApp
                  </button>
                  <a
                    href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}`}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 font-bold text-slate-700 hover:bg-slate-50 transition-all"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Direct WhatsApp
                  </a>
                </div>
                <p className="flex items-start gap-2 text-xs text-slate-500 leading-relaxed">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  Your details are used only to generate the WhatsApp application message for this internship opening.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <section className="max-w-7xl mx-auto px-4 py-20 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DetailCard icon={GraduationCap} title="Key Skills Covered" items={detail.skills} />
          <DetailCard icon={Briefcase} title="Benefits" items={detail.benefits} />
          <DetailCard icon={Users} title="Eligibility Criteria" items={detail.eligibility ?? ["Shared during counseling"]} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Duration & Fees</h2>
            </div>
            {detail.durationOptions && detail.durationOptions.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-5">
                {detail.durationOptions.map((option) => (
                  <span key={option} className="inline-flex items-center rounded-full bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
                    {option}
                  </span>
                ))}
              </div>
            )}
            {detail.fees && detail.fees.length > 0 ? (
              <div className="space-y-5">
                {detail.fees.map((option) => (
                  <div key={option.title} className="rounded-2xl border border-slate-100 p-5 bg-slate-50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <h3 className="text-lg font-bold text-primary">{option.title}</h3>
                      <span className="font-bold text-slate-900">{option.fees}</span>
                    </div>
                    <ul className="space-y-2">
                      {option.details.map((item) => (
                        <li key={item} className="flex items-start space-x-3 text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-600 leading-relaxed">Fee and duration details are shared during counseling for this program.</p>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Placement Assistance Details</h2>
              <p className="text-slate-600 leading-relaxed">{detail.placement}</p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Stipend Information</h2>
              {detail.stipendInfo && detail.stipendInfo.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {detail.stipendInfo.map((group) => (
                    <div key={group.title} className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                      <h3 className="font-bold text-primary mb-4">{group.title}</h3>
                      <ul className="space-y-2">
                        {group.details.map((item) => (
                          <li key={item} className="flex items-start space-x-3 text-slate-600">
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
                  Stipend information is shared during counseling where applicable for the selected program.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DetailCard({ icon: Icon, title, items }: { icon: any; title: string; items: string[] }) {
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
      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">{label}</p>
      <p className="text-sm text-slate-700 font-medium mt-1 leading-relaxed">{value}</p>
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
