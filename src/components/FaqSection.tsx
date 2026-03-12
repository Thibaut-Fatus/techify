import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("faqQuestion1"),
      answer: t("faqAnswer1"),
    },
    {
      question: t("faqQuestion2"),
      answer: t("faqAnswer2"),
    },
    {
      question: t("faqQuestion3"),
      answer: t("faqAnswer3"),
    },
    {
      question: t("faqQuestion4"),
      answer: t("faqAnswer4"),
    },
    {
      question: t("faqQuestion5"),
      answer: t("faqAnswer5"),
    },
    {
      question: t("faqQuestion6"),
      answer: t("faqAnswer6"),
    },
  ];

  return (
    <section id="faq" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">{t("faqTitle")}</h2>
          <p className="section-subtitle">{t("faqSubtitle")}</p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-studio-navy hover:text-studio-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-4">
            {t("stillHaveQuestions")}
          </h3>
          <p className="text-center text-gray-600 mb-6">{t("getInTouch")}</p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-studio-blue hover:bg-studio-teal"
            >
              {t("contactUs")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
