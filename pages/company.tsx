import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import About from "@/components/About";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function CompanyPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Company"
        description="Learn more about ornix, how we work, and the process we use to deliver business and technology outcomes."
      />
      <About />
      <Process />
      <Footer />
    </>
  );
}
