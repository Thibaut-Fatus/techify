
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 mesh-gradient" />
          <div className="absolute inset-0 grid-pattern" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">Contact</p>
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl tracking-tight text-gray-900">
                {t('contactHeroTitle')}
              </h1>
              <p className="mt-6 text-xl text-gray-500 leading-relaxed">
                {t('contactHeroSubtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Email CTA */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 p-10">
              <div className="mx-auto bg-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Mail className="h-7 w-7 text-indigo-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {t('contactEmailUs')}
              </h2>
              <a
                href="mailto:info@fatus.eu"
                className="text-2xl sm:text-3xl font-bold gradient-text hover:opacity-80 transition-opacity"
              >
                info@fatus.eu
              </a>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="pb-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-50 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{t('contactOfficeAddress')}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-50 p-3 rounded-xl flex-shrink-0">
                    <Clock className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{t('contactOfficeHours')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default Contact;
