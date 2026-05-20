import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, IndianRupee, Users, Briefcase, GraduationCap } from "lucide-react";
import { ALL_SERVICE_DETAILS, COMPANY_DETAILS } from "../constants";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = ALL_SERVICE_DETAILS.find((item) => item.id === serviceId);

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
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">{service.title}</h1>
            <p className="text-slate-300 text-lg lg:text-xl leading-relaxed">{service.overview}</p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="bg-secondary text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all text-center"
              >
                {service.cta}
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

      <section className="max-w-7xl mx-auto px-4 py-20 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <DetailCard icon={GraduationCap} title="Key Skills Covered" items={service.skills} />
          <DetailCard icon={Briefcase} title="Benefits" items={service.benefits} />
          <DetailCard icon={Users} title="Eligibility Criteria" items={service.eligibility} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Internship Duration & Fees</h2>
            </div>
            <div className="space-y-5">
              {service.fees.map((option) => (
                <div key={option.title} className="rounded-2xl border border-slate-100 p-5 bg-slate-50">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h3 className="text-lg font-bold text-primary">{option.title}</h3>
                    <span className="font-bold text-slate-900">{option.fees}</span>
                  </div>
                  <ul className="space-y-2">
                    {option.details.map((detail) => (
                      <li key={detail} className="flex items-start space-x-3 text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-5">Placement Assistance Details</h2>
              <p className="text-slate-600 leading-relaxed">{service.placement}</p>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Stipend Information</h2>
              {service.stipendInfo.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {service.stipendInfo.map((group) => (
                    <div key={group.title} className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
                      <h3 className="font-bold text-primary mb-4">{group.title}</h3>
                      <ul className="space-y-2">
                        {group.details.map((detail) => (
                          <li key={detail} className="flex items-start space-x-3 text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span>{detail}</span>
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
