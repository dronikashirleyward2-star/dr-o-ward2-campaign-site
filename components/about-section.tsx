import { Briefcase, GraduationCap, Heart } from "lucide-react";

const facts = [
  {
    icon: Briefcase,
    title: "20 Years in Manufacturing",
    body: "Nearly two decades as a supply chain engineer, managing millions in procurement and advocating for fair worker pay.",
  },
  {
    icon: GraduationCap,
    title: "Doctorate & Educator",
    body: "Doctorate in Christian Counseling, MBA, and former advanced manufacturing instructor at PCC University of Arkansas.",
  },
  {
    icon: Heart,
    title: "A Lifetime of Service",
    body: "18 years as a therapeutic foster parent, years of feeding the homeless, and outreach spanning Africa, Liberia, Pakistan, and India.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#151515]">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-[#c8121b] mb-3">Who is Dr. O</p>
        <h2 className="font-display text-5xl mb-10 max-w-2xl">
          Built by nearly 20 years of solving problems others walk past.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((f) => (
            <div key={f.title} className="border-t-2 border-[#c8121b] pt-6">
              <f.icon className="w-8 h-8 text-[#c8121b] mb-4" />
              <h3 className="font-display text-2xl mb-2">{f.title}</h3>
              <p className="text-white/70 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
