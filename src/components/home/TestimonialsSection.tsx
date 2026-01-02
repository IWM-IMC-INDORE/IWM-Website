import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "IWM Batch 12 Alumni",
    department: "Urban Planning",
    quote: "The IWM program transformed my understanding of city governance. Working on the Smart City project gave me invaluable practical experience.",
    currentRole: "Urban Planner at Indore Smart City Ltd.",
  },
  {
    name: "Rahul Verma",
    role: "IWM Batch 10 Alumni",
    department: "Public Health",
    quote: "Being mentored by senior IAS officers was a dream come true. The connections I made here opened doors I never imagined possible.",
    currentRole: "Public Health Officer, MP Health Dept.",
  },
  {
    name: "Anjali Patel",
    role: "IWM Batch 14 Alumni",
    department: "IT & e-Governance",
    quote: "From developing citizen apps to digitizing municipal services, every day was a learning opportunity. Highly recommend this program!",
    currentRole: "Software Developer at TCS",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hear From Our Alumni
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how the IWM program has shaped the careers of our past interns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">Department</p>
                <p className="text-sm font-medium text-foreground">{testimonial.department}</p>
                <p className="text-xs text-muted-foreground mt-2">Currently</p>
                <p className="text-sm font-medium text-emerald-600">{testimonial.currentRole}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
