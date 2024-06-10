import "./globals.css";
import { Ubuntu } from "next/font/google";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata = {
  title: "YouthLink Tech.",
  description:
    "At YouthLink, we are the architects of digital transformation, providing a suite of services that encompass internet solutions, software development, and digital marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} max-sm:text-sm`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
