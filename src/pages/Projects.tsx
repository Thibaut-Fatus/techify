import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
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

  // Filter projects based on current filter, search term, and category
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

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === "popular") {
      return b.partners - a.partners;
    }
    return 0;
  });

  // Get unique categories
  const categories = ["all", ...new Set(projects.map((p) => p.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-studio-navy text-white pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
                {t("projectsHeroTitle")}
              </h1>
              <p className="mt-4 text-xl text-studio-teal max-w-3xl mx-auto">
                {t("projectsHeroSubtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex space-x-2 mb-4 md:mb-0">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  onClick={() => setFilter("all")}
                  className={filter === "all" ? "bg-studio-blue" : ""}
                >
                  {t("filterAll")}
                </Button>
                <Button
                  variant={filter === "active" ? "default" : "outline"}
                  onClick={() => setFilter("active")}
                  className={filter === "active" ? "bg-amber-500" : ""}
                >
                  {t("filterActive")}
                </Button>
                <Button
                  variant={filter === "completed" ? "default" : "outline"}
                  onClick={() => setFilter("completed")}
                  className={filter === "completed" ? "bg-green-500" : ""}
                >
                  {t("filterCompleted")}
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder={t("searchProjects")}
                    className="pl-9 w-full sm:w-64"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      {t("categoryLabel")}
                    </span>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="w-[140px]">
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
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      {t("sortByLabel")}
                    </span>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">
                          {t("sortNewest")}
                        </SelectItem>
                        <SelectItem value="popular">
                          {t("sortPopular")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProjects.length > 0 ? (
                sortedProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden flex flex-col h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <Badge
                          variant="outline"
                          className="bg-studio-cream text-studio-navy"
                        >
                          {project.category}
                        </Badge>
                        <Badge
                          className={
                            project.status === "Live"
                              ? "bg-green-500"
                              : project.status === "Beta"
                                ? "bg-amber-500"
                                : "bg-blue-500"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mt-2">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">
                            {t("projectCardStatus")}
                          </span>
                          <span className="font-medium">{project.status}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">
                            {t("projectCardPartners")}
                          </span>
                          <span className="font-medium">
                            {project.partners}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <a
                        className="font-medium w-full"
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.website}
                      </a>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">
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
