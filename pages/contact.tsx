import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { colors } from "@/config/colors";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Contact"
        description="Tell us about your goals and we will help you define the right next step."
      />
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.primary.black }}>
              Get in touch
            </h2>
            <p className="mb-6" style={{ color: colors.text.secondary }}>
              Reach out for new projects, partnerships, or consulting support.
            </p>
            <div className="space-y-3" style={{ color: colors.text.primary }}>
              <p>Email: hello@ornix.com</p>
              <p>Phone: +1 (555) 987-2100</p>
              <p>Location: San Diego, California</p>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border"
              style={{ borderColor: colors.border.light }}
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 rounded-lg border"
              style={{ borderColor: colors.border.light }}
            />
            <textarea
              placeholder="How can we help?"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border resize-none"
              style={{ borderColor: colors.border.light }}
            />
            <button
              type="button"
              className="text-white px-6 py-3 rounded-lg font-semibold"
              style={{ backgroundColor: colors.primary.red }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
