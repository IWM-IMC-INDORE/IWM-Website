import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Building2, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Indore Smart City Traffic Management",
    department: "Smart City & IT",
    batch: "Batch 12",
    year: "2023",
    status: "Completed",
    interns: 8,
    description: "AI-powered traffic signal optimization system that reduced congestion by 15% in major corridors. The project integrated real-time monitoring with predictive analytics.",
    impact: ["15% reduction in travel time", "20% decrease in signal violations", "Real-time dashboard for traffic police"],
    tags: ["AI/ML", "IoT", "Urban Mobility"],
  },
  {
    title: "Zero Waste Ward Initiative",
    department: "Sanitation",
    batch: "Batch 13",
    year: "2023",
    status: "Completed",
    interns: 12,
    description: "Comprehensive waste management pilot in 3 wards achieving 90% waste segregation at source through community engagement and door-to-door collection optimization.",
    impact: ["90% waste segregation", "30% increase in recycling", "50% reduction in landfill waste"],
    tags: ["Sustainability", "Community Engagement", "Waste Management"],
  },
  {
    title: "Digital Citizen Grievance Portal 2.0",
    department: "IT & e-Governance",
    batch: "Batch 14",
    year: "2024",
    status: "Completed",
    interns: 6,
    description: "Enhanced the municipal grievance portal with mobile app integration, real-time tracking, and automated routing, reducing resolution time by 40%.",
    impact: ["40% faster resolution", "Mobile app launched", "95% citizen satisfaction"],
    tags: ["e-Governance", "Mobile App", "Citizen Services"],
  },
  {
    title: "Urban Green Space Mapping",
    department: "Environment",
    batch: "Batch 11",
    year: "2022",
    status: "Completed",
    interns: 5,
    description: "GIS-based mapping of all urban green spaces, parks, and potential plantation sites. Created a comprehensive database for urban forestry planning.",
    impact: ["500+ green spaces mapped", "10,000 new trees planted", "Green cover increased by 5%"],
    tags: ["GIS", "Environment", "Urban Planning"],
  },
  {
    title: "Public Health Dashboard",
    department: "Public Health",
    batch: "Batch 10",
    year: "2022",
    status: "Completed",
    interns: 7,
    description: "Real-time health monitoring dashboard tracking disease outbreaks, vaccination coverage, and hospital bed availability across the city.",
    impact: ["Real-time disease monitoring", "Integrated 50+ health centers", "Improved response time by 60%"],
    tags: ["Healthcare", "Data Analytics", "Public Health"],
  },
  {
    title: "Heritage Building Documentation",
    department: "Urban Planning",
    batch: "Batch 9",
    year: "2021",
    status: "Completed",
    interns: 4,
    description: "Comprehensive documentation of 150+ heritage structures in Indore with 3D scanning, historical research, and conservation recommendations.",
    impact: ["150+ buildings documented", "3D models created", "Conservation guidelines published"],
    tags: ["Heritage", "Documentation", "Architecture"],
  },
];

const Projects = () => {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-emerald-800 py-16">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
              Project Showcase
            </span>
            <h1 className="text-4xl font-bold text-white mb-4">Transforming Indore Together</h1>
            <p className="text-lg text-white/80">
              Explore the impactful projects completed by IWM interns that have contributed to making Indore India's cleanest and smartest city.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 -mt-16">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Departments Involved", value: "35" },
              { label: "Citizens Impacted", value: "5M+" },
              { label: "Awards Won", value: "25+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
                <p className="text-3xl font-bold text-emerald-600 mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        {project.department}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                      {project.status}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-foreground">Key Impact:</p>
                    <ul className="space-y-1">
                      {project.impact.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-border text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.batch} ({project.year})
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.interns} Interns
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Want to Work on Impactful Projects?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join the IWM program and contribute to projects that transform lives and cities.
          </p>
          <Link to="/register">
            <Button variant="civic" size="lg" className="group">
              Apply Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Projects;
