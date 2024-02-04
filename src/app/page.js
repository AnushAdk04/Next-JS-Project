import { About, Contact, Experiences, HeroSection, Projects, Skills } from "@cct/components";
import AppFooter from "@cct/components/AppFooter";
import AppHeader from "@cct/components/AppHeader";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <AppHeader/>
    <HeroSection/>
    <About/>
    <Skills/>
    <Projects/>
    <Experiences/>
    <Contact/>
    <AppFooter/>
    </>
  );
}
