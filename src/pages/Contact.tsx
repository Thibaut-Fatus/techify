
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

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

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-studio-navy mb-6">
                  {t('contactOfficeTitle')}
                </h2>

                <Card className="p-6 mb-6 shadow-md">
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

                <Card className="p-6 mb-6 shadow-md">
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

                <Card className="p-6 mb-6 shadow-md">
                  <div className="flex space-x-4">
                    <div className="bg-studio-blue/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-studio-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{t('contactEmailUs')}</h3>
                      <a href="mailto:info@fatus.eu" className="text-studio-blue hover:underline mt-2 block">
                        info@fatus.eu
                      </a>
                    </div>
                  </div>
                </Card>

                {/* <Card className="p-6 mb-6 shadow-md">
                  <div className="flex space-x-4">
                    <div className="bg-studio-blue/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-studio-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{t('contactCallUs')}</h3>
                      <a href="tel:+3221234567" className="text-studio-blue hover:underline mt-2 block">
                        +32 2 123 45 67
                      </a>
                    </div>
                  </div>
                </Card> */}
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
