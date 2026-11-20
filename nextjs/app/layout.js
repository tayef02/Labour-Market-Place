import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "লেবার মার্কেট প্লেস",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        <Header />
        <main>{children}</main>
        <footer>এখানে ফুটার</footer>
      </body>
    </html>
  );
}