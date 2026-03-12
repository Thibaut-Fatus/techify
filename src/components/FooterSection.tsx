import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="text-lg font-semibold">Techify</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {t("footerTagline")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {t("footerLinkTitle")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("footerProjects")}
                </Link>
              </li>
              <li>
                <Link to="/#submit" className="text-sm text-gray-400 hover:text-white transition-colors">
                  {t("footerSubmit")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              {t("footerContactUs")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  {t("contactOfficeAddress")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                <a
                  href="mailto:info@fatus.eu"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@fatus.eu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; 2024 Techify. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 text-xs transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
