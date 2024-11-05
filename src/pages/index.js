
import { Inter } from "next/font/google";

import CarouselComponent from "@/components/home/Carousel";
import Customer from "@/components/home/Customer";
import Welcome from "@/components/home/Welcome";
import GallerySection from "@/components/home/GallerySection";
import Banner from "@/components/home/Banner";
import WhyUs from "@/components/home/WhyUs";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
  <CarouselComponent/>
  <Customer/>
  <Banner/>
  <Welcome/>
  <GallerySection />
  <WhyUs/>
  
    </>
  );
}
