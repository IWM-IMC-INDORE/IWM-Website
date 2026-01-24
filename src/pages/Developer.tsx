import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import CardSwap, { Card } from "@/components/CardSwap";
import { Code2, Sparkles, Users, Github, Linkedin } from "lucide-react";
import { useState, useRef } from "react";

export default function Developer() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const cardSwapRef = useRef<any>(null);

  const teamMembers = [
    {
      name: "Uthkarsh Mandloi",
      role: "Frontend Development & Bug Fixing",
      description: "Built core features and ensured smooth user experience",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Utkarsh",
      github: "https://github.com/UthkarshMandloi",
      linkedin: "https://linkedin.com/in/utkarsh",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Kanha Agrawal",
      role: "CMS Development",
      description: "Integrated and managed Sanity CMS for dynamic content",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kanha",
      github: "https://github.com/kanha",
      linkedin: "https://linkedin.com/in/kanha",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Parth Joshi",
      role: "Design & Content",
      description: "Crafted beautiful UI/UX and compelling content strategy",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Parth",
      github: "https://github.com/parth",
      linkedin: "https://linkedin.com/in/parth",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      name: "Gurpreet Singh",
      role: "Frontend Development",
      description: "Implemented responsive designs and interactive components",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gurpreet",
      github: "https://github.com/gurpreet",
      linkedin: "https://linkedin.com/in/gurpreet",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Bharat Jain",
      role: "Frontend Development",
      description: "Developed features and optimized performance",
      photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bharat",
      github: "https://github.com/bharat",
      linkedin: "https://linkedin.com/in/bharat",
      gradient: "from-red-500 to-rose-500"
    }
  ];

  return (
    <PublicLayout>
      <SEO 
        title="Our Team | IWM"
        description="Meet the talented IWM interns who designed and developed this platform"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="container py-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-civic-green/10 text-civic-green text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Built with passion by IWM Interns</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Meet Our Development Team
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This platform was designed and developed by talented interns from the Internship with Mayor program, 
              showcasing innovation and dedication to public service.
            </p>
          </div>
        </section>

        {/* Interactive Cards Section */}
        <section className="container pb-32 pt-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-civic-green">
                  <Users className="h-6 w-6" />
                  <span className="font-semibold">Collaborative Innovation</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Transforming Ideas into Reality
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our team of passionate interns worked together to create this platform, 
                  combining modern web technologies with thoughtful design to serve the 
                  citizens of Indore.
                </p>
              </div>

              <div className="grid gap-4">
                {teamMembers.map((member, idx) => (
                  <div 
                    key={idx}
                    className="group p-4 rounded-lg border border-border bg-card hover:border-civic-green hover:shadow-lg hover:shadow-civic-green/10 hover:bg-card/80 transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
                    onClick={() => {
                      setSelectedCard(idx);
                      // Trigger card to front via custom event
                      window.dispatchEvent(new CustomEvent('bringCardToFront', { detail: idx }));
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${member.gradient} p-0.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        <img 
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full rounded-full bg-white"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg group-hover:text-civic-green transition-colors">{member.name}</h3>
                        <p className="text-sm text-civic-green">{member.role}</p>
                        <p className="text-sm text-muted-foreground mt-1">{member.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 p-4 rounded-lg bg-civic-green/10 border border-civic-green/20">
                <Code2 className="h-5 w-5 text-civic-green" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">Technologies Used</p>
                  <p className="text-muted-foreground">React, TypeScript, Tailwind CSS, GSAP, Sanity CMS</p>
                </div>
              </div>
            </div>

            {/* Right - Card Swap Animation */}
            <div className="relative min-h-[500px] lg:min-h-[600px]">
              <CardSwap
                width={600}
                height={400}
                cardDistance={70}
                verticalDistance={80}
                delay={5000}
                pauseOnHover
                onCardClick={(idx) => setSelectedCard(idx)}
              >
                {teamMembers.map((member, idx) => (
                  <Card key={idx}>
                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                      {/* Browser Window Header */}
                      <div className={`bg-gradient-to-r ${member.gradient} px-4 py-2.5 flex items-center justify-between`}>
                        <div className="flex items-center gap-3">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          </div>
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="bg-white/20 backdrop-blur-sm rounded px-4 py-1.5 text-xs text-white font-medium truncate text-center">
                            {member.role}
                          </div>
                        </div>
                        <div className="w-16"></div>
                      </div>

                      {/* Browser Content - Landscape Layout */}
                      <div className="p-6 flex items-center gap-6 h-[calc(100%-44px)]">
                        {/* Left - Profile Photo */}
                        <div className="relative flex-shrink-0">
                          <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${member.gradient} p-1`}>
                            <img 
                              src={member.photo}
                              alt={member.name}
                              className="w-full h-full rounded-full bg-white"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-civic-green text-white rounded-full p-2">
                            <Code2 className="h-4 w-4" />
                          </div>
                        </div>

                        {/* Right - Details */}
                        <div className="flex-1 flex flex-col justify-center space-y-4">
                          {/* Name */}
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {member.name}
                            </h3>
                            <p className="text-sm text-gray-400">
                              {member.description}
                            </p>
                          </div>

                          {/* Role Badge */}
                          <div className={`inline-flex self-start px-3 py-1.5 rounded-full bg-gradient-to-r ${member.gradient} text-white text-xs font-medium`}>
                            {member.role.split(' & ')[0]}
                          </div>

                          {/* Social Links */}
                          <div className="flex gap-3">
                            <a
                              href={member.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="h-4 w-4 text-gray-400 group-hover:text-white" />
                              <span className="text-xs text-gray-400 group-hover:text-white">GitHub</span>
                            </a>
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors group"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Linkedin className="h-4 w-4 text-white" />
                              <span className="text-xs text-white">LinkedIn</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </section>

        {/* Acknowledgment Section */}
        <section className="container pb-20">
          <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-2xl font-bold mb-4">A Learning Journey</h2>
            <p className="text-muted-foreground mb-6">
              This project represents the culmination of our internship experience with the 
              Indore Municipal Corporation. We're grateful for the opportunity to contribute 
              to digital governance while developing our skills in real-world scenarios.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 rounded-full bg-civic-green/10 text-civic-green text-sm font-medium">
                #IWMInterns
              </span>
              <span className="px-4 py-2 rounded-full bg-civic-green/10 text-civic-green text-sm font-medium">
                #DigitalGovernance
              </span>
              <span className="px-4 py-2 rounded-full bg-civic-green/10 text-civic-green text-sm font-medium">
                #SmartIndore
              </span>
            </div>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
