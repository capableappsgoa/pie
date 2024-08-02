"use client";
import { Banner } from "@/components/Banner";
import { HeroEndSection } from "@/components/HeroEndSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

export default () => {
  const backgroundImage = "https://i.ibb.co/86j90MY/788468-12566-NOCDET.png";
  return (
    <>

      <Banner />
      <Navbar />
      <HeroSection />
      {/* <HeroEndSection /> */}
    </>
  );
};
