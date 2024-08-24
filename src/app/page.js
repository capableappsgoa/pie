"use client";
import { Banner } from "@/components/Banner";
import CountriesFeatures from "@/components/CountriesFeatures";
import CountriesFeatures2 from "@/components/CountryFeatures2";
import { Feature } from "@/components/Feature";
import { FooterCode } from "@/components/FooterCode";
import GlobalRank from "@/components/GlobalRank";
import { GrowYourMoney } from "@/components/GrowYourMoney";
import { HeroSection } from "@/components/HeroSection";
import { Howitworks } from "@/components/Howitworks";
import MobileFeature from "@/components/MobileFeature";
import MobileFeatureThree from "@/components/MobileFeatureThree";
import MobileFeatureTwo from "@/components/MobileFeatureTwo";
import { Navbar } from "@/components/Navbar";
import { Testimonial } from "@/components/Testimonial";
import { ValueTrust } from "@/components/ValueTrust";

Header: () => <strong>ID</strong>
const Page = () => {
  return (
    <>
      <Banner />
      <Navbar />
      <HeroSection />
      <Feature />
      <Howitworks />
      <GlobalRank />
      <CountriesFeatures  />
      <CountriesFeatures2 />
      <GrowYourMoney />
      <MobileFeature />
      <MobileFeatureTwo/>
      <MobileFeatureThree />
      <ValueTrust />
      <Testimonial />
      <FooterCode />
    </>
  );
};
export default Page