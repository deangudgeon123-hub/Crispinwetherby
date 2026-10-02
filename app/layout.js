import "./globals.css";

export const metadata = {
  title: "Crispin Wetherby",
  description: "The official residence of Crispin Wetherby.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}