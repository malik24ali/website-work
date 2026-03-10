import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="About Us"
        description="We are a consulting partner focused on practical execution, measurable outcomes, and long-term client value."
      />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}
