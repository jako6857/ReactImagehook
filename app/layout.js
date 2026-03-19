import "./globals.css";

export const metadata = {
  title: "Image Hook Assignment",
  description: "Demo of a useImages hook that reads image paths from public"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
