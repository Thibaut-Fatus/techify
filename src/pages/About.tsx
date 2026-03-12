
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const About = () => {
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
              <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">About Us</p>
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl tracking-tight text-gray-900">
                {t('aboutHeroTitle')}
              </h1>
              <p className="mt-6 text-xl text-gray-500 leading-relaxed">
                {t('aboutHeroSubtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">{t('ourStoryTitle')}</h2>
                <p className="text-gray-500 mb-4 leading-relaxed">{t('ourStoryContent1')}</p>
                <p className="text-gray-500 leading-relaxed">{t('ourStoryContent2')}</p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-indigo-900 to-violet-900 rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-indigo-400 blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-violet-400 blur-3xl" />
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                    alt="Team meeting"
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 md:py-32 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">{t('ourMissionTitle')}</h2>
              <p className="text-xl text-gray-500 leading-relaxed">{t('ourMissionContent')}</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">Values</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">{t('ourValuesTitle')}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "from-indigo-500 to-indigo-600", title: t('value2Title'), content: t('value2Content') },
                { icon: "from-violet-500 to-violet-600", title: t('value3Title'), content: t('value3Content') },
                { icon: "from-purple-500 to-purple-600", title: t('value1Title'), content: t('value1Content') },
              ].map((value, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${value.icon} flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/10`}>
                    <span className="text-white text-xl font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-950" />
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-violet-600/20 blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">{t('joinUsTitle')}</h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">{t('joinUsContent')}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/#submit">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-xl px-8 gap-2">
                    {t('submitProject')}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href="mailto:info@fatus.eu">
                  <Button size="lg" variant="outline" className="border-gray-700 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl px-8">
                    {t('contactUs')}
                  </Button>
                </a>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "10+", label: "Projects Completed" },
                { value: "45+", label: "Business Partners" },
                { value: "3", label: "EU Countries" },
                { value: "100%", label: "European Infrastructure" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default About;
