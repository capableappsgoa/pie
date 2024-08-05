"use client";
import { Banner } from "@/components/Banner";
import { Feature } from "@/components/Feature";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";

export default () => {
  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <Feature />
    </>
  );
};
