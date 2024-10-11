import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anemona",
  description: "Floraria Anemona, flori frumoase pentru persoane speciale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
