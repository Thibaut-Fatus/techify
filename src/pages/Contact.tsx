
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-studio-navy text-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                {t('contactHeroTitle')}
              </h1>
              <p className="mt-4 text-xl text-studio-teal max-w-3xl mx-auto">
                {t('contactHeroSubtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Email CTA */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-studio-blue/5 border border-studio-blue/20 rounded-2xl p-10">
              <div className="mx-auto bg-studio-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-studio-blue" />
              </div>
              <h2 className="text-2xl font-bold text-studio-navy mb-3">
                {t('contactEmailUs')}
              </h2>
              <a
                href="mailto:info@fatus.eu"
                className="text-3xl sm:text-4xl font-bold text-studio-blue hover:text-studio-teal transition-colors"
              >
                info@fatus.eu
              </a>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6 shadow-md">
                <div className="flex space-x-4">
                  <div className="bg-studio-blue/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-studio-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600 mt-2">{t('contactOfficeAddress')}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-md">
                <div className="flex space-x-4">
                  <div className="bg-studio-blue/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-studio-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Office Hours</h3>
                    <p className="text-gray-600 mt-2">{t('contactOfficeHours')}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default Contact;
