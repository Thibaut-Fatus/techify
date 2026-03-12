
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { getProjects } from "@/translations/projects";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const { t, currentLanguage } = useLanguage();

  const [p1, p2, p3, ..._rest] = getProjects({ languageCode: currentLanguage.code });
  const firstThreeProjects = [p1,p2,p3];

  return (
    <section id="projects" className="relative bg-gray-50/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-3">Portfolio</p>
          <h2 className="section-title">{t('featuredProjects')}</h2>
          <p className="section-subtitle">
            {t('featuredProjectsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {firstThreeProjects.filter(p => !!p).map((project, index) => (
            <div
              key={index}
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
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/projects">
            <Button variant="outline" size="lg" className="rounded-xl px-8 gap-2 border-gray-200 hover:bg-gray-50 text-gray-700">
              {t('viewAllProjects')}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
