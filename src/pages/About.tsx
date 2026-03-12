
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
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
                {t('aboutHeroTitle')}
              </h1>
              <p className="mt-4 text-xl text-studio-teal max-w-3xl mx-auto">
                {t('aboutHeroSubtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-studio-navy mb-6">{t('ourStoryTitle')}</h2>
                <p className="text-gray-600 mb-4">{t('ourStoryContent1')}</p>
                <p className="text-gray-600">{t('ourStoryContent2')}</p>
              </div>
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-studio-navy via-studio-blue to-studio-teal rounded-lg shadow-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                  alt="Team meeting"
                  className="absolute -bottom-6 -right-6 w-3/4 h-auto rounded-lg shadow-xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-studio-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-studio-navy mb-6">{t('ourMissionTitle')}</h2>
              <p className="text-xl text-gray-700">{t('ourMissionContent')}</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-studio-navy mb-10 text-center">{t('ourValuesTitle')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-studio-blue/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-studio-navy">{t('value2Title')}</h3>
                <p className="text-gray-600">{t('value2Content')}</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-studio-blue/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-studio-navy">{t('value3Title')}</h3>
                <p className="text-gray-600">{t('value3Content')}</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 w-12 rounded-full bg-studio-blue/10 flex items-center justify-center mb-6">
                  <span className="text-2xl">🇪🇺</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-studio-navy">{t('value1Title')}</h3>
                <p className="text-gray-600">{t('value1Content')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-16 bg-studio-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{t('joinUsTitle')}</h2>
              <p className="text-xl mb-8">{t('joinUsContent')}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/#submit">
                  <Button size="lg" className="bg-studio-teal hover:bg-teal-600">
                    {t('submitProject')}
                  </Button>
                </Link>
                <a href="mailto:info@fatus.eu">
                  <Button size="lg" variant="outline" className="text-slate-800 hover:text-white border-white hover:bg-white/20">
                    {t('contactUs')}
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-studio-teal">10+</div>
                <div className="text-sm text-gray-300 mt-1">Projects Completed</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-studio-teal">45+</div>
                <div className="text-sm text-gray-300 mt-1">Business Partners</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-studio-teal">3</div>
                <div className="text-sm text-gray-300 mt-1">EU Countries</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-studio-teal">100%</div>
                <div className="text-sm text-gray-300 mt-1">European Infrastructure</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default About;
