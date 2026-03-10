import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function BlogGridPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Blog Grid"
        description="Browse our latest posts in grid format."
      />
      <Blog />
      <Footer />
    </>
  );
}
