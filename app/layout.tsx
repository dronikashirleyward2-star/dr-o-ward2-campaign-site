import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Onika Shirley (Dr. O) — City Council, Ward 2 Position 2 At Large",
  description:
    "Official campaign site for Dr. Onika L. Shirley, candidate for Helena-West Helena City Council, Ward 2 Position 2 At Large.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0f0f] text-white antialiased">{children}</body>
    </html>
  );
}
