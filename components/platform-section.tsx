import { Truck, ShieldCheck, Droplet } from "lucide-react";

const pillars = [
  {
    icon: Truck,
    title: "Trash & Trucking Infrastructure",
    body: "Preventive maintenance schedules to stop equipment breakdowns, smart subcontracting solutions, and fair worker compensation.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Streets",
    body: "Practical steps for safer neighborhoods — for our families, our children, and our future.",
  },
  {
    icon: Droplet,
    title: "Clean Water",
    body: "Clean water is a basic right for every resident of Helena-West Helena, not a privilege.",
  },
];

export function PlatformSection() {
  return (
    <section id="platform" className="py-24 px-6 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute -right-32 top-0 w-96 h-96 bg-[#c8121b]/10 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        <p className="uppercase tracking-[0.3em] text-sm text-[#c8121b] mb-3">The Platform</p>
        <h2 className="font-display text-5xl mb-14 max-w-2xl">
          Real solutions, not more survival mode.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#1a1a1a] border border-white/10 hover:border-[#c8121b]/60 transition-colors p-8 rounded-sm"
            >
              <p.icon className="w-10 h-10 text-[#c8121b] mb-5" />
              <h3 className="font-display text-2xl mb-3">{p.title}</h3>
              <p className="text-white/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
        <p className="font-display text-xl mt-14 text-white/80 border-l-4 border-[#c8121b] pl-6">
          &quot;Proof before payment. Action over promises.&quot;
        </p>
      </div>
    </section>
  );
}
