import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Portfolio"
        description="Explore selected projects and case studies that highlight how we solve complex challenges with measurable results."
      />
      <CaseStudies />
      <Footer />
    </>
  );
}
