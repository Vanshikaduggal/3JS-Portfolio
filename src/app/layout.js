import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Vanshika's Portfolio",
    default:
      "Vanshika's Portfolio",
  },
  description:
   "Discover a digital canvas where design meets interactivity. Powered by Next.js, Tailwind CSS, Three.js, and Framer Motion — this portfolio isn't just built, it's engineered to impress. Dive into a seamless blend of performance, creativity, and motion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
