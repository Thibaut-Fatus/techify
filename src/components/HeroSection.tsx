
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-pattern" />

      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow rounded-full animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 glow rounded-full animate-pulse-soft" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8 animate-fade-in">
            <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-sm font-medium text-indigo-700">
              European Tech Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t('heroTitle1')}{" "}
            <span className="gradient-text">{t('heroTitle2')}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('heroSubtitle')}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="#submit">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-8 h-12 text-base gap-2 shadow-lg shadow-gray-900/10">
                {t('submitProject')}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button variant="outline" size="lg" className="rounded-xl px-8 h-12 text-base border-gray-200 hover:bg-gray-50 text-gray-700">
                {t('learnMore')}
              </Button>
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">10+</div>
              <div className="text-sm text-gray-500 mt-1">Projects</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-500 mt-1">EU Countries</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-500 mt-1">EU Hosted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default HeroSection;
