import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Award, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const alumni = [
  {
    name: "Priya Sharma",
    batch: "Batch 12 (2023)",
    department: "Urban Planning",
    project: "Smart City Traffic Management System",
    currentRole: "Urban Planner at Indore Smart City Ltd.",
    education: "M.Plan, IIT Roorkee",
    quote: "The IWM program transformed my understanding of city governance. Working on the Smart City project gave me invaluable practical experience that no classroom could provide.",
    highlight: "Led a team that reduced traffic congestion by 15% in key corridors",
  },
  {
    name: "Rahul Verma",
    batch: "Batch 10 (2022)",
    department: "Public Health",
    project: "Community Health Awareness Campaign",
    currentRole: "Public Health Officer, MP Health Dept.",
    education: "MBBS, MGIMS",
    quote: "Being mentored by senior IAS officers was a dream come true. The connections I made here opened doors I never imagined possible.",
    highlight: "Reached 50,000+ citizens through health awareness drives",
  },
  {
    name: "Anjali Patel",
    batch: "Batch 14 (2024)",
    department: "IT & e-Governance",
    project: "Citizen Grievance Portal Enhancement",
    currentRole: "Software Developer at TCS",
    education: "B.Tech CS, DAVV",
    quote: "From developing citizen apps to digitizing municipal services, every day was a learning opportunity. Highly recommend this program!",
    highlight: "Reduced grievance resolution time by 40%",
  },
  {
    name: "Arjun Singh",
    batch: "Batch 8 (2021)",
    department: "Environment & Sustainability",
    project: "Narmada River Rejuvenation Project",
    currentRole: "Environmental Consultant, TERI",
    education: "M.Sc Environmental Science, JNU",
    quote: "Working on environmental projects in Indore showed me how policy meets practice. The mentorship from experienced officials was exceptional.",
    highlight: "Contributed to India's cleanest city achievement",
  },
  {
    name: "Sneha Gupta",
    batch: "Batch 11 (2022)",
    department: "Finance & Accounts",
    project: "Municipal Budget Transparency Initiative",
    currentRole: "Audit Associate, Deloitte",
    education: "CA, ICAI",
    quote: "Understanding government finance from the inside gave me a unique perspective that sets me apart in my current role.",
    highlight: "Helped digitize 10 years of financial records",
  },
  {
    name: "Mohammed Faiz",
    batch: "Batch 13 (2023)",
    department: "Sanitation & Waste Management",
    project: "Zero Waste Ward Pilot Program",
    currentRole: "Sustainability Manager, Reliance",
    education: "MBA, IIM Indore",
    quote: "The hands-on experience in waste management operations was eye-opening. It shaped my career towards sustainability.",
    highlight: "Piloted program that achieved 90% waste segregation",
  },
];

const Alumni = () => {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-emerald-800 py-16">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
              Success Stories
            </span>
            <h1 className="text-4xl font-bold text-white mb-4">IWM Alumni Network</h1>
            <p className="text-lg text-white/80">
              Meet the talented individuals who have completed the IWM program and gone on to make significant contributions in their respective fields.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 -mt-16">
            {[
              { label: "Total Alumni", value: "2,500+" },
              { label: "Placed in Govt. Jobs", value: "350+" },
              { label: "Entrepreneurs", value: "120+" },
              { label: "Higher Education", value: "800+" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
                <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.map((alum) => (
              <div
                key={alum.name}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-primary to-emerald-700 p-6">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-2xl mb-4">
                    {alum.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-white">{alum.name}</h3>
                  <p className="text-white/80 text-sm">{alum.batch}</p>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-emerald-600 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">Current Role</p>
                      <p className="font-medium text-foreground">{alum.currentRole}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">Education</p>
                      <p className="font-medium text-foreground">{alum.education}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-amber-500 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">IWM Highlight</p>
                      <p className="text-sm text-foreground">{alum.highlight}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <Quote className="w-6 h-6 text-primary/20 mb-2" />
                    <p className="text-sm text-muted-foreground italic">"{alum.quote}"</p>
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
          <h2 className="text-2xl font-bold text-foreground mb-4">Be the Next Success Story</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join the IWM program and start your journey towards a meaningful career in public service.
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

export default Alumni;
