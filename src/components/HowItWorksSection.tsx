import { CheckCircle, FileText, Settings, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      name: t("submitChallenge"),
      description: t("submitChallengeDesc"),
      icon: FileText,
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      id: 2,
      name: t("validationSelection"),
      description: t("validationSelectionDesc"),
      icon: CheckCircle,
      gradient: "from-violet-500 to-violet-600",
    },
    {
      id: 3,
      name: t("development"),
      description: t("developmentDesc"),
      icon: Settings,
      gradient: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      name: t("scaleShareRevenue"),
      description: t("scaleShareRevenueDesc"),
      icon: Users,
      gradient: "from-fuchsia-500 to-fuchsia-600",
    },
  ];

  return (
    <section id="how-it-works" className="relative bg-gray-50/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">Process</p>
          <h2 className="section-title">{t("howItWorks")}</h2>
          <p className="section-subtitle">{t("howItWorksSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Step number */}
              <div className="text-6xl font-bold text-gray-100 absolute top-6 right-6">
                {step.id}
              </div>

              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/10`}>
                <step.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {step.name}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
