"use client";
import { Banner } from "@/components/Banner";
import CountriesFeatures from "@/components/CountriesFeatures";
import { Feature } from "@/components/Feature";
import GlobalRank from "@/components/GlobalRank";
import { HeroSection } from "@/components/HeroSection";
import { Howitworks } from "@/components/Howitworks";
import { Navbar } from "@/components/Navbar";

export default () => {
  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <Feature />
      <Howitworks />
      <GlobalRank />
      <CountriesFeatures />
    </>
  );
};
