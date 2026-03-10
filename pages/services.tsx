import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Services"
        description="From strategy to execution, our services are designed to support growth, operational clarity, and long-term business value."
      />
      <Services />
      <Process />
      <Footer />
    </>
  );
}
