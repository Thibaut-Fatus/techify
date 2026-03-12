import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Techify</span>
              <h1 className="text-2xl font-bold text-studio-navy">
                Tec<span className="text-studio-blue">h</span>ify
              </h1>
            </Link>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 inline-flex items-center justify-center"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>

          <nav className="hidden md:flex space-x-10">
            <Link
              to="/"
              className="text-base font-medium text-gray-700 hover:text-studio-blue"
            >
              {t("home")}
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-gray-700 hover:text-studio-blue"
            >
              {t("navAbout")}
            </Link>
            <Link
              to="/projects"
              className="text-base font-medium text-gray-700 hover:text-studio-blue"
            >
              {t("navProjects")}
            </Link>
            {/* <a
              href="/#how-it-works"
              className="text-base font-medium text-gray-700 hover:text-studio-blue"
            >
              {t("navHowItWorks")}
            </a>
            <a
              href="/#benefits"
              className="text-base font-medium text-gray-700 hover:text-studio-blue"
            >
              {t("navBenefits")}
            </a>
            <a
              href="/#faq"
              className="text-base font-medium text-gray-700 hover:text-studio-blue"
            >
              {t("navFaq")}
            </a> */}
            <Link
              to="/contact"
              className="text-base font-medium text-gray-700 hover:text-studio-blue"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <LanguageSelector />
            {/* <Button variant="ghost" className="text-studio-blue hover:text-studio-teal">
              {t('login')}
            </Button> */}
            <Link to="/#submit">
              <Button className="ml-8 bg-studio-blue hover:bg-studio-teal">
                {t("submitProject")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl font-bold text-studio-navy">
                    Tec<span className="text-studio-teal">h</span>ify
                  </h1>
                </div>
                <div className="-mr-2">
                  <Button
                    variant="ghost"
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-md p-2 inline-flex items-center justify-center"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-base font-medium text-gray-700">
                      Home
                    </span>
                  </Link>
                  <Link
                    to="/about"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-base font-medium text-gray-700">
                      {t("navAbout")}
                    </span>
                  </Link>
                  <Link
                    to="/projects"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-base font-medium text-gray-700">
                      {t("navProjects")}
                    </span>
                  </Link>
                  <a
                    href="/#how-it-works"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-base font-medium text-gray-700">
                      {t("navHowItWorks")}
                    </span>
                  </a>
                  <a
                    href="/#benefits"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-base font-medium text-gray-700">
                      {t("navBenefits")}
                    </span>
                  </a>
                  <a
                    href="/#faq"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-base font-medium text-gray-700">
                      {t("navFaq")}
                    </span>
                  </a>
                  <Link
                    to="/contact"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-base font-medium text-gray-700">
                      Contact
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="flex items-center mb-4">
                <LanguageSelector />
              </div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Button
                  variant="ghost"
                  className="text-studio-blue hover:text-studio-teal justify-center"
                >
                  {t("login")}
                </Button>
                <Link to="/#submit" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-studio-blue hover:bg-studio-teal">
                    {t("submitProject")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
