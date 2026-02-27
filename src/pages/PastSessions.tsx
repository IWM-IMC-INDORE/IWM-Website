import { type MouseEvent, useEffect, useState, useMemo } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { SEO } from "@/components/SEO";

const sessionsSeed = [
  {
    id: "session-cyber-awareness",
    title: "Cyber Awareness Session",
    date: "Feb 10, 2026",
    location: "AICTSL Conference Hall, Geeta Bhawan",
    theme: "Cyber Safety & Digital Awareness",
    summary:
      "A cyber awareness initiative aimed at educating Gen Z, Millennials, and Baby Boomers about online frauds, digital scams, cyber safety practices, and responsible internet usage for a safer digital future.",
    highlights: [
      "Awareness on online frauds and digital scams",
      "Guidance on cyber safety and responsible internet use",
      "Interactive session with law enforcement and legal experts",
    ],
    speakers: [
      "Mr. Rajesh Dhandotiya (DCP Crime Branch)",
      "Adv. Rohit Jain (Cyber Mitra)"
    ],
    sliderSet: [
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1772216395/enhanced_cyber_2_w0hnoi.png",
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1772216396/enhanced_cyber_3_fqklsm.png",
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1772216781/enhanced_cyber_5_d5z05f.png",
    ],
  },
  {
    id: "session-traffic-discipline-civic-sense",
    title: "Role of Youth in Traffic Discipline & Civic Sense",
    date: "Jan 25, 2026",
    location: "AICTSL Conference Hall & Rajwada Chowk",
    theme: "Civic Responsibility & Traffic Awareness",
    summary:
      "An expert session and traffic volunteering initiative aimed at encouraging youth participation in traffic discipline, civic responsibility, and responsible citizenship under the Internship with Mayor Program.",
    highlights: [
      "Awareness on traffic discipline and civic sense",
      "Interactive session with Indore Police officials",
      "On-ground traffic volunteering campaign at Rajwada Chowk",
    ],
    speakers: [
      "ACP Lal Bahadur",
      "Mrs. Shubhi Jain (Traffic Warden)"

    ],
    sliderSet: [
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1772219900/traffic_3_dap41a.png",
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1772173500/enhanced_traffic_session_tzaztr.jpg",
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1772219901/traffic_4_kq2amm.png",
    ],
  },
  {
    id: "session-art-of-entrepreneurship",
    title: "The Art of Entrepreneurship",
    date: "Jan 9, 2026",
    location: "AICTSL Conference Board Room",
    theme: "Entrepreneurship & Innovation",
    summary:
      "An expert session focused on developing an entrepreneurial mindset, identifying opportunity gaps, and transforming ideas into impactful ventures through practical insights.",
    highlights: [
      "Understanding entrepreneurial mindset",
      "Gap identification and practical business thinking",
      "Frameworks like 3D’s and 3S’s for disciplined growth",
    ],
    speakers: ["Rahul Bhargav"],
    sliderSet: [
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1768982089/IMG-20260114-WA0089_di3f2n.jpg",
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1772218472/IMG-20260114-WA0093_s6upa7.jpg",
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1772218471/art_of_2_ybuzz7.png",
    ],
  },
  {
    id: "session-personality-development-resume-building",
    title: "Personality Development & Resume Building",
    date: "Jan 5, 2026",
    location: "AICTSL Conference Hall",
    theme: "Career Development & Professional Skills",
    summary:
      "An interactive session focused on enhancing personality traits, communication skills, and building impactful resumes to prepare interns for professional opportunities.",
    highlights: [
      "Guidance on professional personality development",
      "Resume building and career positioning strategies",
      "Practical insights for interview readiness"
    ],
    speakers: [
      "Pratap Nair"
    ],
    sliderSet: [
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1772221269/development_2_net7fh.png",
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1772221267/development_4_t0h3d3.jpg",
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1772221269/development_3_tql5zp.png",
    ],
  },

  {
    id: "visit-bada-rawala-palace",
    title: "Heritage Visit – Bada Rawala Palace",
    date: "Nov 30, 2025",
    location: "Bada Rawala Palace, Juni Indore",
    theme: "Heritage, Culture & Civic History",
    summary:
      "The first day of Batch 7 commenced with a heritage visit to Bada Rawala Palace, offering interns an opportunity to explore Indore’s royal legacy and cultural history while understanding the contributions of Raja Raja Zamindar Nandlal Mandloi.",
    highlights: [
      "Learned about Raja Raja Zamindar Nandlal Mandloi",
      "Explored royal artifacts, vintage cars, and the Raja’s Palki",
      "Visited the historic royal Darbaar",
      "Interaction with members of Global Indians Overseas (GOI)",
      "Met a renowned influencer from Indore"
    ],
    speakers: [
      "Mr. Varadraj Mandloi (Current Heir & Zamindar)"
    ],
    sliderSet: [
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1772222505/rawala_1_bzvpym.png",
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1772222504/rawala_2_hv3ogl.jpg",
      "https://res.cloudinary.com/dvneefjpi/image/upload/v1768370653/PXL_20251130_075041052.RAW-01.COVER_v8ggj9.jpg",
    ],
  },
  {
    id: "session-mental-health",
    title: "Upcoming: Mental Health & Well-being",
    date: "TBA - Upcoming",
    location: "To Be Announced",
    theme: "Youth Wellness & Mental Health",
    summary:
      "Our next upcoming session will focus on the importance of mental health, stress management, and emotional well-being for youth and young professionals.",
    highlights: [
      "Open dialogue on mental health challenges",
      "Expert-led stress management workshops",
      "Building emotional resilience in an academic and professional environment",
    ],
    speakers: ["Guest Speakers (To be announced)"],
    sliderSet: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
];

const cardBackgrounds = [
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1772215231/enhanced_cyber_jueh3v.png",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1772219901/traffic_4_kq2amm.png",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1768982089/IMG-20260114-WA0089_di3f2n.jpg",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1772221269/development_2_net7fh.png",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1772222504/rawala_3_vtosoz.png",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1772223317/upcoming_1_te60k2.png",
];

const modalBackgrounds = [
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1772216396/enhanced_cyber_4_ttzjon.png",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1772219485/traffic_2_vx6i9m.png",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1772218472/IMG-20260114-WA0093_s6upa7.jpg",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1772221269/development_1_nsyr9d.png",
  "https://res.cloudinary.com/dvneefjpi/image/upload/v1772222505/rawala_1_bzvpym.png",
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
];

type HoverFx = {
  rotateX: number;
  rotateY: number;
  glareX: number;
  glareY: number;
};

const sessions = sessionsSeed.map((session, index) => ({
  ...session,
  cardImage: cardBackgrounds[index % cardBackgrounds.length],
  modalImage: modalBackgrounds[index % modalBackgrounds.length],
}));

const PastSessions = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoverFx, setHoverFx] = useState<Record<string, HoverFx>>({});

  const activeSession = sessions.find((session) => session.id === activeId) ?? null;

  const toggleCard = (id: string) => {
    if (id === "session-mental-health") return; // Disabled for upcoming session
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

  // Old slider index logic removed

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
                            className={`rounded-full border border-white/50 px-3 py-1 text-xs font-semibold text-white/80 transition-colors ${session.id === "session-mental-health"
                              ? "cursor-default opacity-50"
                              : "hover:border-white hover:text-white"
                              }`}
                            onClick={(event) => {
                              event.stopPropagation();
                              if (session.id !== "session-mental-health") {
                                toggleCard(session.id);
                              }
                            }}
                            aria-pressed={isFlipped}
                            disabled={session.id === "session-mental-health"}
                          >
                            {session.id === "session-mental-health" ? "Upcoming" : "Details"}
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
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4 sm:p-6 backdrop-blur-sm"
          onClick={() => setActiveId(null)}
        >
          <div
            className="relative flex h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl bg-[#0B1121] shadow-2xl animate-fade-in"
            style={{ animationDuration: "0.2s" }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="absolute right-4 top-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 backdrop-blur-md"
              onClick={() => setActiveId(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>

            <div className="flex h-full w-full flex-col lg:flex-row">
              {/* Left Column (Sticky Image & Title) */}
              <div className="relative h-64 w-full shrink-0 lg:h-full lg:w-[45%]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${activeSession.modalImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1121] via-[#0B1121]/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#0B1121]/50 lg:to-[#0B1121]" />

                <div className="absolute bottom-0 left-0 flex w-full flex-col justify-end p-6 sm:p-8 lg:h-full lg:pb-12">
                  <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-400 mb-4 w-fit">
                    {activeSession.theme || "SUSTAINABILITY"}
                  </div>
                  <h3 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-5xl">
                    {activeSession.title}
                  </h3>

                  <div className="flex flex-col gap-3 text-sm font-medium text-slate-300">
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500/70"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                      <span>{activeSession.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500/70"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                      <span>{activeSession.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (Scrollable Details) */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar lg:p-10">
                <div className="mx-auto max-w-2xl space-y-10">

                  {/* Overview Section */}
                  <section>
                    <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                      Overview
                    </div>
                    <p className="text-base text-slate-300 leading-relaxed">
                      {activeSession.summary}
                    </p>
                  </section>

                  {/* Key Figures / Speakers */}
                  <section>
                    <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                      Key Figures
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {activeSession.speakers.map((speaker, idx) => (
                        <span key={idx} className="inline-flex items-center px-4 py-2.5 rounded-full text-sm font-bold bg-emerald-500 text-white shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:bg-emerald-400 transition-transform hover:-translate-y-0.5 cursor-default">
                          {speaker}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Key Outcomes Section */}
                  <section className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 shadow-inner">
                    <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      Key Outcomes
                    </div>
                    <ul className="space-y-4">
                      {activeSession.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                          </div>
                          <span className="text-sm font-medium text-slate-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Event Gallery */}
                  <section className="pb-8">
                    <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#10b981]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                      Event Gallery
                    </div>
                    {/* Display the 3 images in a grid layout rather than a scroll slider */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {activeSession.sliderSet.map((img, idx) => (
                        <div key={idx} className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10">
                          <img
                            src={img}
                            alt={`${activeSession.title} gallery image ${idx + 1}`}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                      ))}
                    </div>
                  </section>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </PublicLayout>
  );
};

export default PastSessions;
