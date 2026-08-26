const items = [
  "18 years as a therapeutic foster parent",
  "Years of feeding the homeless in Helena-West Helena with food, drinks, and blessing bags",
  "Assisted families after house fires and during holidays",
  "International outreach in Africa, Liberia, Pakistan, and India",
  "Financial assistance to women experiencing domestic violence",
  "Walked the streets of the city in prayer during times of crime",
];

export function ServiceSection() {
  return (
    <section id="service" className="py-24 px-6 bg-[#151515]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-[#c8121b] mb-3">Servant Leadership</p>
          <h2 className="font-display text-5xl mb-6">
            Service that started long before this campaign.
          </h2>
          <p className="text-white/70 leading-relaxed">
            Leadership isn&apos;t a title — it&apos;s what you do when no one is
            watching. This is the record of quiet action behind &quot;Action
            Speaks Volume.&quot;
          </p>
        </div>
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item} className="flex gap-4 items-start">
              <span className="mt-2 w-2 h-2 bg-[#c8121b] rounded-full shrink-0" />
              <span className="text-white/85 text-lg leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
