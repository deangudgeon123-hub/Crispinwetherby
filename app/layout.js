import "./globals.css";

export const metadata = {
  title: "Crispin Wetherby | The Wetherby Estate",
  description: "The official residence of Crispin Wetherby. Guardian of British standards.",
  openGraph: {
    title: "Crispin Wetherby",
    description: "Guardian of British standards. Disappointed in you already.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}