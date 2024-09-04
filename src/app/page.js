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
import { motion } from "framer-motion";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}

const Page = () => (
  <>
    {/* <Banner /> */}
    <Navbar />
    <HeroSection />
    <Feature />
    <FadeInWhenVisible>
    <Howitworks />
    </FadeInWhenVisible>
    <GlobalRank />
    <FadeInWhenVisible>
    <CountriesFeatures />
    </FadeInWhenVisible>
    <FadeInWhenVisible>
    <CountriesFeatures2 />
    </FadeInWhenVisible>
    <GrowYourMoney />
    <MobileFeature />
    <MobileFeatureTwo />
    <MobileFeatureThree />
    <ValueTrust />
    <Testimonial />
    <FooterCode />
  </>
);
Page.displayName = "Page";
export default Page;
