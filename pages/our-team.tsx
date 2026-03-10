import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { colors } from "@/config/colors";

const team = [
  { name: "Philip Antrophy", role: "Founder & CEO" },
  { name: "Ava Morgan", role: "Technology Director" },
  { name: "Daniel Lewis", role: "Finance Consultant" },
  { name: "Sophia Green", role: "Operations Lead" },
];

export default function OurTeamPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Our Team"
        description="Meet the specialists behind our consulting engagements across strategy, technology, and finance."
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="p-6 rounded-xl border" style={{ borderColor: colors.border.light }}>
              <div className="w-16 h-16 rounded-full mb-4" style={{ backgroundColor: colors.primary.lightRed }} />
              <h3 className="text-lg font-bold" style={{ color: colors.primary.black }}>
                {member.name}
              </h3>
              <p style={{ color: colors.text.secondary }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
