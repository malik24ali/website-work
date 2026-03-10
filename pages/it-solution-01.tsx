import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { colors } from "@/config/colors";

export default function ItSolutionPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="IT Solution 01"
        description="A packaged service engagement for businesses that need rapid modernization with clear delivery milestones."
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary.black }}>
            Typical deliverables
          </h2>
          <ul className="space-y-3" style={{ color: colors.text.secondary }}>
            <li>Current-state technical assessment</li>
            <li>90-day roadmap with prioritized workstreams</li>
            <li>Execution support and KPI tracking</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
