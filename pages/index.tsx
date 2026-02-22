import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CaseStudies />
      <Process />
      <Blog />
      <Footer />
    </>
  );
}
