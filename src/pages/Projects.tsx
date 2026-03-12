import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getProjects } from "@/translations/projects";

const Projects = () => {
  const { t, currentLanguage } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const projects = getProjects({ languageCode: currentLanguage.code });

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && project.status === "Development") ||
      (filter === "completed" &&
        (project.status === "Live" || project.status === "Beta"));

    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = category === "all" || project.category === category;

    return matchesFilter && matchesSearch && matchesCategory;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "popular") {
      return b.partners - a.partners;
    }
    return 0;
  });

  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 mesh-gradient" />
          <div className="absolute inset-0 grid-pattern" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">Portfolio</p>
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl tracking-tight text-gray-900">
                {t("projectsHeroTitle")}
              </h1>
              <p className="mt-6 text-xl text-gray-500 leading-relaxed">
                {t("projectsHeroSubtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="py-6 border-b border-gray-100 bg-white sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-2">
                {[
                  { key: "all", label: t("filterAll") },
                  { key: "active", label: t("filterActive") },
                  { key: "completed", label: t("filterCompleted") },
                ].map((f) => (
                  <Button
                    key={f.key}
                    variant="ghost"
                    size="sm"
                    onClick={() => setFilter(f.key)}
                    className={`rounded-lg text-sm ${
                      filter === f.key
                        ? "bg-gray-900 text-white hover:bg-gray-800 hover:text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {f.label}
                  </Button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder={t("searchProjects")}
                    className="pl-9 w-full sm:w-56 rounded-lg border-gray-200 text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex gap-2">
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="w-[130px] rounded-lg border-gray-200 text-sm">
                      <SelectValue placeholder={t("categoryAll")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">{t("categoryAll")}</SelectItem>
                      {categories
                        .filter((c) => c !== "all")
                        .map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[130px] rounded-lg border-gray-200 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">{t("sortNewest")}</SelectItem>
                      <SelectItem value="popular">{t("sortPopular")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProjects.length > 0 ? (
                sortedProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge className={`
                          ${project.status === "Live" ? "bg-emerald-500" :
                          project.status === "Beta" ? "bg-amber-500" :
                          "bg-indigo-500"} text-white border-0 shadow-sm
                        `}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                        <span className="text-sm text-gray-400">
                          <span className="font-medium text-gray-600">{project.partners}</span> partners
                        </span>
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                        >
                          Visit
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-gray-400 text-sm">
                    No projects match your current filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default Projects;
