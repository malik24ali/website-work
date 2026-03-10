import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Blog"
        description="Insights, updates, and practical guidance on technology, design, and business consulting."
      />
      <Blog />
      <Footer />
    </>
  );
}
