import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { colors } from "@/config/colors";

export default function ItConsultingPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="IT Consulting"
        description="Advisory and implementation support to modernize technology stacks and improve delivery performance."
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary.black }}>
            What we cover
          </h2>
          <ul className="space-y-3" style={{ color: colors.text.secondary }}>
            <li>Technology strategy and architecture planning</li>
            <li>Cloud adoption and platform modernization</li>
            <li>Delivery process and team capability uplift</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
