import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Briefcase, CheckCircle2, GraduationCap, IndianRupee, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS, COURSES } from "../constants";

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = COURSES.find((item) => item.id === courseId);

  if (!course) {
    return (
      <div className="pt-32 pb-24 bg-slate-50 min-h-screen px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-10 border border-slate-100 shadow-sm text-center space-y-6">
          <h1 className="text-4xl font-bold text-slate-900">Course not found</h1>
          <p className="text-slate-600">The course you are looking for is unavailable.</p>
          <Link to="/services" className="inline-flex items-center text-primary font-bold">
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const galleryImages = course.galleryImages ?? [];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <section className="bg-primary py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src={course.heroImage}
            alt={course.title}
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
            <p className="text-secondary font-bold tracking-[0.3em] uppercase text-sm">Course Details</p>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">{course.title}</h1>
            <p className="text-slate-300 text-lg lg:text-xl leading-relaxed">{course.overview}</p>
            {course.highlight && (
              <div className="rounded-[1.75rem] border border-secondary/30 bg-white/10 backdrop-blur-md p-5 sm:p-6 space-y-4 shadow-lg shadow-black/10">
                <p className="text-secondary font-bold tracking-[0.2em] uppercase text-xs">Job Guarantee Highlight</p>
                <p className="text-white text-xl sm:text-2xl font-bold leading-tight">{course.highlight}</p>
                <p className="text-slate-200 leading-relaxed">
                  We provide placement opportunities in top companies like Deloitte, Capgemini, Accenture, IBM, and SAP Labs.
                </p>
                {course.partnerCompanies && course.partnerCompanies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {course.partnerCompanies.map((company) => (
                      <span
                        key={company}
                        className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-secondary text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all text-center"
              >
                {course.cta}
              </Link>
              <a
                href={`https://wa.me/91${COMPANY_DETAILS.whatsapp}`}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                Speak to Counselor
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
          <div className="bg-white rounded-[2.5rem] p-4 sm:p-6 lg:p-8 border border-slate-100 shadow-xl shadow-slate-200/40">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
              <div>
                <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Visual Overview</p>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-2">Related images for {course.title}</h2>
              </div>
              <p className="text-slate-500 max-w-2xl text-sm leading-relaxed">
                These visuals reflect the software environment, finance workflows, and training context tied to the course.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
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

      <section className="max-w-7xl mx-auto px-4 py-20 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <InfoBlock title="Duration" value={course.duration} icon={GraduationCap} />
          <InfoBlock title="Fees" value={course.fees} icon={IndianRupee} />
          <InfoBlock title="Certification" value={course.certification} icon={ShieldCheck} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Detailed Course Explanation</h2>
            <div className="space-y-4">
              {course.explanation.map((paragraph) => (
                <p key={paragraph} className="text-slate-600 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Placement Support</h2>
            <ul className="space-y-3">
              {course.placementSupport.map((item) => (
                <li key={item} className="flex items-start space-x-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Usage in Industry</h2>
            <ul className="space-y-3">
              {course.usage.map((item) => (
                <li key={item} className="flex items-start space-x-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Demand and Career Scope</h2>
            <ul className="space-y-3">
              {course.demand.map((item) => (
                <li key={item} className="flex items-start space-x-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <ListBlock title="Skills Covered" items={course.skills} icon={GraduationCap} />
          <ListBlock title="Career Opportunities" items={course.careerOpportunities} icon={Briefcase} />
          <ListBlock title="Benefits of Learning SAP S/4 HANA" items={course.benefits} icon={ShieldCheck} />
        </div>
      </section>
    </div>
  );
}

function InfoBlock({ title, value, icon: Icon }: { title: string; value: string; icon: any }) {
  return (
    <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm h-full">
      <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h2 className="text-lg font-bold text-primary mb-3">{title}</h2>
      <p className="text-slate-700 leading-relaxed font-medium">{value}</p>
    </div>
  );
}

function ListBlock({ title, items, icon: Icon }: { title: string; items: string[]; icon: any }) {
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
