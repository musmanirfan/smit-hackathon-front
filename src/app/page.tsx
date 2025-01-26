"use client"

import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import InnerPagesHeader from "@/components/InnerPagesHeader";
import ServiceMarquee from "@/components/serviceMarquee";
// import { useRouter } from "next/navigation";

export default function Home() {
  // const route = useRouter();
  return (
    <>
      <InnerPagesHeader />
      <HeroSection />
      <ServiceMarquee />
      <Footer /> 
    </>
  );
}
