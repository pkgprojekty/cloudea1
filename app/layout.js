export const metadata = {
  title: "CloudEA - Strategy & Architecture",
  description:
    "AI-enabled Enterprise Architecture. Executive advisory in enterprise nad business architecture, trusted data foundations, and business capability mapping. We help organizations turn strategy into decisions and execution.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
