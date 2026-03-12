
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { getProjects } from "@/translations/projects";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  const { t, currentLanguage } = useLanguage();

  const [p1, p2, p3, ..._rest] = getProjects({ languageCode: currentLanguage.code });
  const firstThreeProjects = [p1,p2,p3];

  return (
    <section id="projects" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <div className="text-center">
          <h2 className="section-title">{t('featuredProjects')}</h2>
          <p className="section-subtitle">
            {t('featuredProjectsSubtitle')}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {firstThreeProjects.filter(p => !!p).map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge variant="outline" className="bg-studio-cream text-studio-navy">
                    {project.category}
                  </Badge>
                  <Badge className={
                    project.status === "Live" ? "bg-green-500" :
                    project.status === "Beta" ? "bg-amber-500" :
                    "bg-blue-500"
                  }>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-2">{project.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-studio-blue">{project.partners}</span> small businesses partnered
                </p>
              </CardContent>
              <CardFooter>
                <a className="font-medium w-full" href={project.website} target="_blank" rel="noopener noreferrer">
                  {project.website}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/projects">
            <Button size="lg" className="bg-studio-blue hover:bg-studio-teal">
              {t('viewAllProjects')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
