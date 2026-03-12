import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

const SubmissionForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    industry: "",
    challengeDescription: "",
    revenueProjection: "",
    distribution: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `${t("submissionMailSubject")} — ${formData.businessName}`
    );

    const body = encodeURIComponent(
      `${t("submissionMailGreeting")}

---

${t("submissionMailProjectSection")}
• ${t("submissionFormBusinessName")}: ${formData.businessName}
• ${t("submissionFormBusinessContact")}: ${formData.contactName}
• ${t("submissionFormBusinessEmail")}: ${formData.email}
• ${t("submissionFormBusinessIndustry")}: ${formData.industry}

${t("submissionMailGoalSection")}
${formData.challengeDescription}

${t("submissionMailRevenueSection")}
${formData.revenueProjection}

${t("submissionMailDistributionSection")}
${formData.distribution}

---`
    );

    window.location.href = `mailto:info@fatus.eu?subject=${subject}&body=${body}`;

    toast({
      title: t("submissionFeedback"),
      description: t("submissionFeedbackMessage"),
    });
  };

  return (
    <section id="submit" className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white" />

      <div className="relative section-container">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">Get Started</p>
          <h2 className="section-title">{t("submissionTitle")}</h2>
          <p className="section-subtitle">{t("submissionSubtitle")}</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 p-8 md:p-10">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900">{t("submissionFormTitle")}</h3>
              <p className="text-sm text-gray-500 mt-1">{t("submissionFormSubtitle")}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-sm font-medium text-gray-700">
                    {t("submissionFormBusinessName")}
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    placeholder={t("submissionFormBusinessNamePlaceholder")}
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="rounded-xl border-gray-200 focus:border-indigo-300 focus:ring-indigo-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactName" className="text-sm font-medium text-gray-700">
                    {t("submissionFormBusinessContact")}
                  </Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    placeholder={t("submissionFormBusinessContactPlaceholder")}
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="rounded-xl border-gray-200 focus:border-indigo-300 focus:ring-indigo-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    {t("submissionFormBusinessEmail")}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t("submissionFormBusinessEmailPlaceholder")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="rounded-xl border-gray-200 focus:border-indigo-300 focus:ring-indigo-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
                    {t("submissionFormBusinessIndustry")}
                  </Label>
                  <Input
                    id="industry"
                    name="industry"
                    type="string"
                    placeholder={t("submissionFormBusinessIndustryPlaceholder")}
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="rounded-xl border-gray-200 focus:border-indigo-300 focus:ring-indigo-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="challengeDescription" className="text-sm font-medium text-gray-700">
                  {t("submissionFormBusinessDescription")}
                </Label>
                <Textarea
                  id="challengeDescription"
                  name="challengeDescription"
                  placeholder={t("submissionFormBusinessDescriptionPlaceholder")}
                  rows={4}
                  value={formData.challengeDescription}
                  onChange={handleChange}
                  required
                  className="rounded-xl border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="revenueProjection" className="text-sm font-medium text-gray-700">
                  {t("submissionFormRevenue")}
                </Label>
                <Textarea
                  id="revenueProjection"
                  name="revenueProjection"
                  placeholder={t("submissionFormRevenuePlaceholder")}
                  rows={3}
                  value={formData.revenueProjection}
                  onChange={handleChange}
                  className="rounded-xl border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="distribution" className="text-sm font-medium text-gray-700">
                  {t("submissionFormDistribution")}
                </Label>
                <Textarea
                  id="distribution"
                  name="distribution"
                  placeholder={t("submissionFormDistributionPlaceholder")}
                  rows={3}
                  value={formData.distribution}
                  onChange={handleChange}
                  className="rounded-xl border-gray-200 focus:border-indigo-300 focus:ring-indigo-200 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl h-12 text-base gap-2"
                disabled={!formData.businessName || !formData.contactName || !formData.email || !formData.industry || !formData.challengeDescription}
              >
                {t("submissionButton")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-100 space-y-1">
              <p className="text-xs text-gray-400 text-center">{t("submissionPolicy")}</p>
              <p className="text-xs text-gray-400 text-center">{t("submissionPrivacy")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionForm;
