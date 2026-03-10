import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { colors } from "@/config/colors";

export default function FinanceConsultingPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Finance Consulting"
        description="Finance-focused consulting to improve planning, forecasting, and sustainable operating performance."
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary.black }}>
            Core areas
          </h2>
          <ul className="space-y-3" style={{ color: colors.text.secondary }}>
            <li>Financial planning and analysis improvements</li>
            <li>Cost optimization and margin analysis</li>
            <li>Reporting, controls, and decision support models</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
