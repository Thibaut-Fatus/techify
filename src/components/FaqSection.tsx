import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FaqSection = () => {
  const { t } = useLanguage();

  const faqs = [
    { question: t("faqQuestion1"), answer: t("faqAnswer1") },
    { question: t("faqQuestion2"), answer: t("faqAnswer2") },
    { question: t("faqQuestion3"), answer: t("faqAnswer3") },
    { question: t("faqQuestion4"), answer: t("faqAnswer4") },
    { question: t("faqQuestion5"), answer: t("faqAnswer5") },
    { question: t("faqQuestion6"), answer: t("faqAnswer6") },
  ];

  return (
    <section id="faq" className="relative bg-gray-50/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">Support</p>
          <h2 className="section-title">{t("faqTitle")}</h2>
          <p className="section-subtitle">{t("faqSubtitle")}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-gray-100 px-6 data-[state=open]:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-gray-900 py-5 text-[15px] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 pb-5 leading-relaxed text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA */}
          <div className="mt-12 bg-white rounded-2xl border border-gray-100 p-8 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {t("stillHaveQuestions")}
            </h3>
            <p className="text-sm text-gray-500 mb-6">{t("getInTouch")}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-xl transition-colors"
            >
              {t("contactUs")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
