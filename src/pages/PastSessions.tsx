import { useMemo, useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const sessionsSeed = [
  {
    id: "session-urban-mobility",
    title: "Urban Mobility Sprint",
    date: "Jan 18, 2025",
    location: "IMC Conference Hall",
    theme: "Mobility & Infrastructure",
    summary:
      "Participants mapped commuter pain points and proposed last-mile upgrades with phased rollout budgets.",
    highlights: [
      "Top 3 transit bottlenecks identified",
      "Prototype for smart bus stop UX",
      "Budget-ready action matrix",
    ],
    speakers: ["Anita Rao", "Dr. Kunal Sharma"],
  },
  {
    id: "session-green-corridors",
    title: "Green Corridors Lab",
    date: "Feb 22, 2025",
    location: "Smart City Studio",
    theme: "Sustainability",
    summary:
      "Teams designed a green corridor blueprint focused on micro-parks, shade cover, and stormwater capture.",
    highlights: [
      "Heat map analysis for 6 zones",
      "Tree canopy increase plan",
      "Community stewardship toolkit",
    ],
    speakers: ["Priya Nair", "Aditya Mehta"],
  },
  {
    id: "session-digital-civic",
    title: "Digital Civic Services",
    date: "Mar 12, 2025",
    location: "Innovation Hub",
    theme: "Digital Governance",
    summary:
      "Focused on service design for permits and grievance redressal with new journey maps and KPIs.",
    highlights: [
      "End-to-end service blueprint",
      "KPI tracker for response time",
      "Low-friction form redesign",
    ],
    speakers: ["Rohit Kulkarni", "Meera Das"],
  },
  {
    id: "session-cultural-cities",
    title: "Culture & Public Space",
    date: "Apr 09, 2025",
    location: "Rajwada Heritage Walk",
    theme: "Placemaking",
    summary:
      "Explored how cultural programming activates heritage precincts and supports local businesses.",
    highlights: [
      "Festival calendar mockup",
      "Stakeholder partnership map",
      "Metrics for footfall growth",
    ],
    speakers: ["Ayesha Khan", "Vivek Jain"],
  },
  {
    id: "session-waste-to-value",
    title: "Waste-to-Value Hack",
    date: "May 05, 2025",
    location: "City Lab",
    theme: "Circular Economy",
    summary:
      "Built circular economy proposals for markets, composting nodes, and MSME collaborations.",
    highlights: [
      "Pilot plan for 3 markets",
      "Revenue model for compost sales",
      "MSME engagement playbook",
    ],
    speakers: ["Neha Bansal", "Siddharth Verma"],
  },
  {
    id: "session-safety-design",
    title: "Safer Streets Studio",
    date: "Jun 01, 2025",
    location: "Traffic Control Center",
    theme: "Public Safety",
    summary:
      "Co-created safety improvements with traffic data overlays and citizen feedback loops.",
    highlights: [
      "Crash hotspot analysis",
      "Street lighting audit",
      "Citizen reporting concept",
    ],
    speakers: ["Lt. Arjun Singh", "Swati Patil"],
  },
];

const gradientStyles = [
  "from-amber-200/40 via-orange-200/20 to-transparent",
  "from-emerald-200/50 via-teal-200/20 to-transparent",
  "from-sky-200/50 via-indigo-200/20 to-transparent",
  "from-fuchsia-200/40 via-pink-200/20 to-transparent",
  "from-lime-200/50 via-green-200/20 to-transparent",
  "from-rose-200/40 via-red-200/20 to-transparent",
];

const PastSessions = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const sessions = useMemo(
    () =>
      sessionsSeed.map((session, index) => ({
        ...session,
        gradient: gradientStyles[index % gradientStyles.length],
      })),
    []
  );

  const toggleCard = (id: string) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <PublicLayout>
      <SEO title="Past Sessions" url="https://iwmimcindore.com/sessions" />
      <section className="bg-muted/40 py-14">
        <div className="container">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">ARCHIVE</p>
                <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
                  Past Sessions
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
                  Explore the sessions that shaped the IWM journey. Hover to preview the mood, then
                  click a card to flip and reveal key outcomes.
                </p>
              </div>
              <Button variant="outline" className="border-border/60">
                Download Highlights
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sessions.map((session) => {
              const isFlipped = activeId === session.id;
              return (
                <div
                  key={session.id}
                  className="group"
                  style={{ perspective: "1200px" }}
                >
                  <div
                    className={
                      "relative h-full min-h-[320px] rounded-2xl transition-transform duration-500"
                    }
                    style={{
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                    role="button"
                    tabIndex={0}
                    onClick={() => toggleCard(session.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        toggleCard(session.id);
                      }
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div
                        className={
                          "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-70 transition-opacity duration-300 group-hover:opacity-90 " +
                          session.gradient
                        }
                      />
                      <div className="relative flex h-full flex-col justify-between p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Badge className="mb-3 bg-foreground text-background">
                              {session.theme}
                            </Badge>
                            <h3 className="text-xl font-semibold text-foreground">
                              {session.title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                              {session.date} · {session.location}
                            </p>
                          </div>
                          <button
                            type="button"
                            className="rounded-full border border-border/60 px-3 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                            onClick={(event) => {
                              event.stopPropagation();
                              toggleCard(session.id);
                            }}
                            aria-pressed={isFlipped}
                          >
                            Details
                          </button>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {session.summary}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                            {session.highlights.map((highlight) => (
                              <span
                                key={highlight}
                                className="rounded-full border border-border/60 px-2.5 py-1"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 rounded-2xl border border-border/70 bg-foreground text-background shadow-sm"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <div className="flex h-full flex-col justify-between p-6">
                        <div>
                          <p className="text-xs font-semibold tracking-[0.3em] text-background/70">
                            SESSION DETAILS
                          </p>
                          <h3 className="mt-3 text-2xl font-semibold">{session.title}</h3>
                          <p className="mt-2 text-sm text-background/70">
                            {session.date} · {session.location}
                          </p>
                        </div>
                        <div className="space-y-4 text-sm text-background/80">
                          <div>
                            <p className="text-xs font-semibold uppercase text-background/60">Summary</p>
                            <p className="mt-2">{session.summary}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase text-background/60">Speakers</p>
                            <p className="mt-2">{session.speakers.join(", ")}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold uppercase text-background/60">Highlights</p>
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                              {session.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="mt-6 self-start rounded-full border border-background/60 px-4 py-2 text-xs font-semibold text-background transition-colors hover:bg-background hover:text-foreground"
                          onClick={(event) => {
                            event.stopPropagation();
                            toggleCard(session.id);
                          }}
                          aria-pressed={isFlipped}
                        >
                          Flip Back
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default PastSessions;
