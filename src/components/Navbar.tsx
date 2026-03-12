import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-sm">
          <div className="flex justify-between items-center px-6 py-3">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  Techify
                </span>
              </Link>
            </div>

            <div className="-mr-2 -my-2 md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-xl"
              >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </Button>
            </div>

            <nav className="hidden md:flex items-center gap-1">
              <Link
                to="/"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100/50 transition-colors"
              >
                {t("home")}
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100/50 transition-colors"
              >
                {t("navAbout")}
              </Link>
              <Link
                to="/projects"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100/50 transition-colors"
              >
                {t("navProjects")}
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100/50 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 gap-3">
              <LanguageSelector />
              <Link to="/#submit">
                <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-4 gap-2 text-sm">
                  {t("submitProject")}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="mx-4 mt-2 md:hidden">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg p-6">
            <nav className="flex flex-col gap-1">
              <Link
                to="/"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("home")}
              </Link>
              <Link
                to="/about"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navAbout")}
              </Link>
              <Link
                to="/projects"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("navProjects")}
              </Link>
              <Link
                to="/contact"
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-xl hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-3">
              <LanguageSelector />
              <Link to="/#submit" className="flex-1" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl gap-2">
                  {t("submitProject")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
