
import { Building, CircleDollarSign, Code, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t('affordableSolutions'),
      description: t('affordableSolutionsDesc'),
      icon: CircleDollarSign,
      label: t('save'),
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      iconBg: "bg-emerald-100",
    },
    {
      title: t('bespokeDevelopment'),
      description: t('bespokeDevelopmentDesc'),
      icon: Code,
      label: t('customBuilt'),
      color: "bg-amber-50 text-amber-600 border-amber-100",
      iconBg: "bg-amber-100",
    },
    {
      title: t('recurringRevenue'),
      description: t('recurringRevenueDesc'),
      icon: Building,
      label: t('profitShare'),
      color: "bg-violet-50 text-violet-600 border-violet-100",
      iconBg: "bg-violet-100",
    },
    {
      title: t('europeanSovereignty'),
      description: t('europeanSovereigntyDesc'),
      icon: Globe,
      label: t('euFirst'),
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
      iconBg: "bg-indigo-100",
    },
  ];

  return (
    <section id="benefits" className="relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">Advantages</p>
          <h2 className="section-title">{t('benefits')}</h2>
          <p className="section-subtitle">
            {t('benefitsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 h-12 w-12 rounded-xl ${benefit.iconBg} flex items-center justify-center`}>
                  <benefit.icon className={`h-6 w-6 ${benefit.color.split(' ')[1]}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${benefit.color}`}>
                      {benefit.label}
                    </span>
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
