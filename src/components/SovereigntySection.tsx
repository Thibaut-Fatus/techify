import { useLanguage } from "@/context/LanguageContext";
import { getFeatures, getReasons } from "@/translations/sovereignty";
import { Check, Shield } from "lucide-react";

const SovereigntySection = () => {
  const { currentLanguage, t } = useLanguage();
  const features = getFeatures({ languageCode: currentLanguage.code });
  const sovereigntyMattersReasons = getReasons({
    languageCode: currentLanguage.code,
  });

  return (
    <section className="relative overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">Infrastructure</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              {t("sovereigntyTitle")}
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              {t("sovereigntySubtitle")}
            </p>

            {/* Pledge card */}
            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {t("sovereigntyPledgeTitle")}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("sovereigntyPledge")}
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Check className="h-3 w-3 text-emerald-600" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="relative">
            {/* Glow behind card */}
            <div className="absolute -z-10 inset-0">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-indigo-200/40 blur-3xl" />
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-xl shadow-gray-200/50">
              {/* EU visual header */}
              <div className="aspect-video bg-gradient-to-br from-gray-900 via-indigo-900 to-violet-900 rounded-xl flex items-center justify-center mb-8 overflow-hidden relative">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-indigo-400 blur-3xl" />
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-violet-400 blur-3xl" />
                </div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1920px-Flag_of_Europe.svg.png"
                  alt="European Flag"
                  className="w-20 h-auto relative z-10"
                />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {t("sovereigntyMatters")}
              </h3>

              <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                {t("sovereigntyMattersContent")}
              </p>

              <ul className="space-y-3">
                {sovereigntyMattersReasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center">
                        <Check className="h-3 w-3 text-indigo-600" />
                      </div>
                    </div>
                    <span className="text-sm text-gray-600">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SovereigntySection;
