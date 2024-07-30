"use client";
import { Banner } from "@/components/Banner";
import { HeroEndSection } from "@/components/HeroEndSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

export default () => {
  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <HeroEndSection />
    </>
  );
};
