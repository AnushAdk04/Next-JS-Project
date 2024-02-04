import AppHeader from "@cct/components/AppHeader";
import "./globals.css";
import { HeroSection } from "@cct/components";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppHeader/>
        <HeroSection/>
        {children}
        </body>
    </html>
  );
}
