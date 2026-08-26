"use client";

import { useState } from "react";
import { Mail, Facebook, Send } from "lucide-react";

const CAMPAIGN_EMAIL = "dronikashirleyward2@gmail.com";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61593521592856";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name || "a constituent"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CAMPAIGN_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0f0f0f] relative">
      <div className="max-w-4xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sm text-[#c8121b] mb-3">Get Involved</p>
        <h2 className="font-display text-5xl mb-4">Let&apos;s move Ward 2 forward, together.</h2>
        <p className="text-white/70 mb-10 max-w-xl">
          Have a concern, want to volunteer, or need to reach the campaign?
          Send a message below — it goes straight to the campaign inbox.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-5 mb-12">
          <div className="grid md:grid-cols-2 gap-5">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="bg-[#1a1a1a] border border-white/15 focus:border-[#c8121b] outline-none px-4 py-3 rounded-sm text-white placeholder:text-white/40"
            />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="bg-[#1a1a1a] border border-white/15 focus:border-[#c8121b] outline-none px-4 py-3 rounded-sm text-white placeholder:text-white/40"
            />
          </div>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={5}
            className="bg-[#1a1a1a] border border-white/15 focus:border-[#c8121b] outline-none px-4 py-3 rounded-sm text-white placeholder:text-white/40 resize-none"
          />
          <button
            type="submit"
            className="justify-self-start flex items-center gap-2 bg-[#c8121b] hover:bg-[#a30f16] transition-colors px-8 py-3 font-display text-lg rounded-sm"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>

        <div className="flex flex-col sm:flex-row gap-6 text-white/70">
          <a href={`mailto:${CAMPAIGN_EMAIL}`} className="flex items-center gap-2 hover:text-[#c8121b] transition-colors">
            <Mail className="w-5 h-5" />
            {CAMPAIGN_EMAIL}
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#c8121b] transition-colors"
          >
            <Facebook className="w-5 h-5" />
            Follow the campaign on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
