export const metadata = {
  title: "CloudEA - Strategy & Architecture",
  description:
    "Executive advisory in enterprise architecture, trusted data foundations, business capability mapping, and strategy execution.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
