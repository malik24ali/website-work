import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import Footer from "@/components/Footer";
import { colors } from "@/config/colors";

const posts = [
  {
    title: "Building web layouts for dual foldable devices",
    category: "Finance",
    date: "February 12, 2023",
  },
  {
    title: "Top 10 Most Populars Google Chrome app",
    category: "Development",
    date: "February 12, 2023",
  },
  {
    title: "How to Increase Business Products Sales",
    category: "Design",
    date: "February 12, 2023",
  },
];

export default function BlogListPage() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Blog List"
        description="Browse our latest posts in list format."
      />
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="p-6 rounded-xl border"
              style={{ borderColor: colors.border.light }}
            >
              <p className="text-sm mb-2" style={{ color: colors.primary.red }}>
                {post.category} | {post.date}
              </p>
              <h2 className="text-2xl font-bold" style={{ color: colors.primary.black }}>
                {post.title}
              </h2>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
