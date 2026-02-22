import { colors } from "@/config/colors";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Blog = () => {
  const { ref, isVisible } = useScrollAnimation();

  const posts = [
    {
      id: 1,
      title: "Building web layouts for dual foldable devices",
      category: "Finance",
      date: "February 12, 2023",
      author: "Orvix",
      image: "📄",
    },
    {
      id: 2,
      title: "Top 10 Most Populars Google Chrome app",
      category: "Development",
      date: "February 12, 2023",
      author: "Orvix",
      image: "💻",
    },
    {
      id: 3,
      title: "How to Increase Business Products Sales",
      category: "Design",
      date: "February 12, 2023",
      author: "Orvix",
      image: "📊",
    },
  ];

  return (
    <section ref={ref} className="py-20" style={{ backgroundColor: colors.primary.white }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className={isVisible ? 'animate-fadeInUp' : 'opacity-0'}>
            <h2 className="text-4xl md:text-5xl font-bold transition-smooth" style={{ color: colors.primary.black }}>
              We're here to share story <br /> from Latest{" "}
              <span style={{ color: colors.primary.red }}>News</span>
            </h2>
          </div>
          <a
            href="#"
            className={`mt-6 md:mt-0 font-semibold transition ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}
            style={{ color: colors.primary.red }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.darkRed}
            onMouseLeave={(e) => e.currentTarget.style.color = colors.primary.red}
          >
            All News →
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover-scale opacity-0 animate-fadeInUp"
            >
              {/* Image */}
              <div className="h-48 flex items-center justify-center text-6xl group" style={{ backgroundColor: colors.primary.lightRed }}>
                <span className="group-hover:scale-110 transition-transform duration-300">{post.image}</span>
              </div>

              {/* Category */}
              <div className="p-6 space-y-4">
                <div className="inline-block">
                  <span className="text-sm font-semibold px-3 py-1 rounded-full animate-scaleUp" style={{ color: colors.primary.red, backgroundColor: colors.primary.lightRed }}>
                    {post.category}
                  </span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm transition-smooth" style={{ color: colors.text.light }}>
                  <span>📅</span>
                  {post.date}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold leading-tight transition-smooth" style={{ color: colors.primary.black }}>
                  <a href="#" style={{ color: colors.primary.black }} onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.red} onMouseLeave={(e) => e.currentTarget.style.color = colors.primary.black}>
                    {post.title}
                  </a>
                </h3>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4" style={{ borderTopColor: colors.neutral[200], borderTopWidth: '1px' }}>
                  <div className="flex items-center gap-2 text-sm" style={{ color: colors.text.light }}>
                    <span>👤</span>
                    <a href="#" style={{ color: colors.text.light }} onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.red} onMouseLeave={(e) => e.currentTarget.style.color = colors.text.light}>
                      {post.author}
                    </a>
                  </div>
                  <a
                    href="#"
                    className="font-semibold transition group"
                    style={{ color: colors.primary.red }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.darkRed}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.primary.red}
                  >
                    Learn More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
