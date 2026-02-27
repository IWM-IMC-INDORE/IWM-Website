import { type MouseEvent, useEffect, useMemo, useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";

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

const cardBackgrounds = [
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1767773000/345699526_632234488811167_9193590834147068485_n_iafmbq.jpg",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1767773810/ekpedmaakenaam_worldrecord_internshipwithmayorInternship_with_mayor_students_played_an_impact_1_puyqo1.jpg",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1767773009/472545215_1669875810576187_2809314555655141950_n_ioro9j.jpg",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1768982089/IMG-20260114-WA0089_di3f2n.jpg",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1767773811/ekpedmaakenaam_worldrecord_internshipwithmayorInternship_with_mayor_students_played_an_impact_3_bedyzj.jpg",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1768370653/PXL_20251130_075041052.RAW-01.COVER_v8ggj9.jpg",
];

const sliderImages = [
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1767773000/345699526_632234488811167_9193590834147068485_n_iafmbq.jpg",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1767773810/ekpedmaakenaam_worldrecord_internshipwithmayorInternship_with_mayor_students_played_an_impact_1_puyqo1.jpg",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1767773009/472545215_1669875810576187_2809314555655141950_n_ioro9j.jpg",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1768982089/IMG-20260114-WA0089_di3f2n.jpg",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1767773811/ekpedmaakenaam_worldrecord_internshipwithmayorInternship_with_mayor_students_played_an_impact_3_bedyzj.jpg",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1768370653/PXL_20251130_075041052.RAW-01.COVER_v8ggj9.jpg",
];

type HoverFx = {
  rotateX: number;
  rotateY: number;
  glareX: number;
  glareY: number;
};

const PastSessions = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoverFx, setHoverFx] = useState<Record<string, HoverFx>>({});
  const [sliderIndex, setSliderIndex] = useState(1);
  const sessions = useMemo(
    () =>
      sessionsSeed.map((session, index) => ({
        ...session,
        cardImage: cardBackgrounds[index % cardBackgrounds.length],
        sliderSet: [
          sliderImages[index % sliderImages.length],
          sliderImages[(index + 1) % sliderImages.length],
          sliderImages[(index + 2) % sliderImages.length],
        ],
      })),
    []
  );
  const activeSession = useMemo(
    () => sessions.find((session) => session.id === activeId) ?? null,
    [activeId, sessions]
  );

  const toggleCard = (id: string) => {
    setActiveId((current) => (current === id ? null : id));
  };

  const handleCardMouseMove = (id: string, event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;

    const glareX = (x / bounds.width) * 100;
    const glareY = (y / bounds.height) * 100;

    setHoverFx((current) => ({
      ...current,
      [id]: { rotateX, rotateY, glareX, glareY },
    }));
  };

  const handleCardMouseLeave = (id: string) => {
    setHoverFx((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });
  };

  useEffect(() => {
    if (!activeSession) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveId(null);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [activeSession]);

  useEffect(() => {
    if (!activeSession) {
      return;
    }

    setSliderIndex(1);
  }, [activeSession]);

  useEffect(() => {
    if (!activeSession) {
      return;
    }

    const interval = window.setInterval(() => {
      setSliderIndex((current) => (current + 1) % activeSession.sliderSet.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [activeSession]);

  const goToPrevSlide = () => {
    if (!activeSession) {
      return;
    }

    setSliderIndex((current) => (current - 1 + activeSession.sliderSet.length) % activeSession.sliderSet.length);
  };

  const goToNextSlide = () => {
    if (!activeSession) {
      return;
    }

    setSliderIndex((current) => (current + 1) % activeSession.sliderSet.length);
  };

  return (
    <PublicLayout>
      <SEO title="Past Sessions" url="https://iwmimcindore.com/sessions" />
      <section className="relative flex min-h-[45vh] items-center overflow-hidden py-20 md:min-h-[60vh]">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dvneefjpi/image/upload/v1772173500/enhanced_traffic_session_tzaztr.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary/80 via-primary/70 to-emerald-800/70" />
        <div className="container relative z-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-semibold text-white sm:text-4xl">
                  ARCHIVE
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-white/80 sm:text-base">
                  Explore the sessions that shaped the IWM journey. Hover to preview the mood, then
                  click a card to flip and reveal key outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sessions.map((session) => {
              const isFlipped = activeId === session.id;
              const fx = hoverFx[session.id] ?? {
                rotateX: 0,
                rotateY: 0,
                glareX: 50,
                glareY: 50,
              };
              const flipRotation = isFlipped ? 180 : 0;
              const scale = isFlipped ? 1.24 : hoverFx[session.id] ? 1.03 : 1;
              const depth = isFlipped ? 120 : hoverFx[session.id] ? 16 : 0;

              return (
                <div
                  key={session.id}
                  className="group relative"
                  style={{ perspective: "1400px" }}
                >
                  <div
                    className={
                      "relative h-full min-h-[320px] rounded-2xl transition-transform duration-300 ease-out"
                    }
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center center",
                      willChange: "transform",
                      zIndex: isFlipped ? 40 : 1,
                      transform: `rotateX(${fx.rotateX}deg) rotateY(${flipRotation + fx.rotateY}deg) translateZ(${depth}px) scale(${scale})`,
                    }}
                    role="button"
                    tabIndex={0}
                    onClick={() => toggleCard(session.id)}
                    onMouseMove={(event) => handleCardMouseMove(session.id, event)}
                    onMouseLeave={() => handleCardMouseLeave(session.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        toggleCard(session.id);
                      }
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl border border-border/70 bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "translateZ(24px)",
                      }}
                    >
                      <div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          backgroundImage: `url('${session.cardImage}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-2xl opacity-70 mix-blend-screen transition-opacity duration-300 group-hover:opacity-100"
                        style={{
                          backgroundImage: `radial-gradient(circle at ${fx.glareX}% ${fx.glareY}%, rgba(255,255,255,0.55), rgba(255,255,255,0.18) 22%, rgba(255,255,255,0) 45%)`,
                        }}
                      />
                      <div className="absolute inset-0 rounded-2xl bg-foreground/55 transition-opacity duration-300 group-hover:bg-foreground/45" />
                      <div className="relative flex h-full flex-col justify-between p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white">
                              {session.title}
                            </h3>
                            <p className="mt-2 text-sm text-white/80">
                              {session.date} · {session.location}
                            </p>
                          </div>
                          <button
                            type="button"
                            className="rounded-full border border-white/50 px-3 py-1 text-xs font-semibold text-white/80 transition-colors hover:border-white hover:text-white"
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
                          <p className="text-sm text-white/85">
                            {session.summary}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 rounded-2xl border border-border/70 bg-foreground text-background shadow-sm"
                      style={{
                        transform: "rotateY(180deg) translateZ(24px)",
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

      {activeSession && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveId(null)}
        >
          <div
            className="relative h-[95vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-foreground text-background shadow-2xl"
            style={{
              backgroundImage: `linear-gradient(to bottom right, rgba(15,23,42,0.95), rgba(17,24,39,0.92), rgba(6,78,59,0.9)), url('${activeSession.cardImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              animation: "none",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30" />
            <div className="relative flex h-full flex-col overflow-y-auto p-6 sm:p-8 md:p-10">
              <button
                type="button"
                className="absolute right-6 top-6 rounded-full border border-background/50 px-4 py-2 text-xs font-semibold text-background transition-colors hover:bg-background hover:text-foreground"
                onClick={() => setActiveId(null)}
              >
                Close
              </button>

              <div className="mx-auto w-full max-w-4xl text-center">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-background/70">
                    SESSION DETAILS
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">{activeSession.title}</h3>
                  <p className="mt-3 text-sm text-background/75 sm:text-base">
                    {activeSession.date} · {activeSession.location}
                  </p>

                  <div className="mt-6 overflow-hidden rounded-2xl border border-white/20 bg-white/5 py-4 backdrop-blur-sm">
                    <div className="mx-auto flex w-[130%] -translate-x-[15%] items-center justify-center gap-3 sm:gap-4">
                      <div className="h-32 w-1/3 overflow-hidden rounded-xl opacity-80 sm:h-40">
                        <img
                          src={activeSession.sliderSet[(sliderIndex - 1 + activeSession.sliderSet.length) % activeSession.sliderSet.length]}
                          alt={`${activeSession.title} preview 1`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="h-40 w-1/2 overflow-hidden rounded-xl ring-2 ring-white/40 sm:h-52">
                        <img
                          src={activeSession.sliderSet[sliderIndex]}
                          alt={`${activeSession.title} preview 2`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="h-32 w-1/3 overflow-hidden rounded-xl opacity-80 sm:h-40">
                        <img
                          src={activeSession.sliderSet[(sliderIndex + 1) % activeSession.sliderSet.length]}
                          alt={`${activeSession.title} preview 3`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-3">
                      <button
                        type="button"
                        className="rounded-full border border-background/50 px-3 py-1 text-xs font-semibold text-background transition-colors hover:bg-background hover:text-foreground"
                        onClick={goToPrevSlide}
                      >
                        Prev
                      </button>
                      <button
                        type="button"
                        className="rounded-full border border-background/50 px-3 py-1 text-xs font-semibold text-background transition-colors hover:bg-background hover:text-foreground"
                        onClick={goToNextSlide}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-6 text-sm text-background/85 md:grid-cols-2">
                <div className="rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase text-background/60">Summary</p>
                  <p className="mt-3 leading-relaxed">{activeSession.summary}</p>
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase text-background/60">Speakers</p>
                  <p className="mt-3 leading-relaxed">{activeSession.speakers.join(", ")}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase text-background/60">Highlights</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-background/85">
                  {activeSession.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </PublicLayout>
  );
};

export default PastSessions;
