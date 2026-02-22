import { colors } from "@/config/colors";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CaseStudies = () => {
  const { ref, isVisible } = useScrollAnimation();

  const cases = [
    {
      id: 1,
      title: "Consulting for Business Organizations",
      category: "Development",
      image: "📋",
    },
    {
      id: 2,
      title: "Strategy and Planning Building Idea",
      category: "IT Solution",
      image: "🎯",
    },
    {
      id: 3,
      title: "Corporate Finance for helpfulness Markets",
      category: "Company",
      image: "📊",
    },
    {
      id: 4,
      title: "Corporate Finance for helpfulness Markets",
      category: "Company",
      image: "📊",
    },
    {
      id: 5,
      title: "Consulting for Business Organizations",
      category: "Consulting",
      image: "💼",
    },
    {
      id: 6,
      title: "Consulting for Business Organizations",
      category: "Development",
      image: "🚀",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className={isVisible ? 'animate-fadeInUp' : 'opacity-0'}>
            <h2 className="text-4xl md:text-5xl font-bold transition-smooth" style={{ color: colors.primary.black }}>
              We Serve the Best Works <br /> View{" "}
              <span style={{ color: colors.primary.red }}>Case Studies</span>
            </h2>
          </div>
          <a
            href="#"
            className={`mt-6 md:mt-0 font-semibold transition ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}
            style={{ color: colors.primary.red }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.darkRed}
            onMouseLeave={(e) => e.currentTarget.style.color = colors.primary.red}
          >
            All Project →
          </a>
        </div>

        {/* Case Studies Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-stagger">
          {cases.slice(0, 3).map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover-scale opacity-0 animate-fadeInUp"
            >
              {/* Image */}
              <div className="h-64 flex items-center justify-center text-6xl relative group" style={{ backgroundColor: colors.primary.lightRed }}>
                <span className="group-hover:scale-110 transition-transform duration-300">{caseStudy.image}</span>
                {/* Video Play Icon */}
                <button className="absolute inset-0 m-auto w-16 h-16 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity animate-scaleUp" style={{ backgroundColor: colors.primary.red }}>
                  ▶
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Category */}
                <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full" style={{ color: colors.primary.red, backgroundColor: colors.primary.lightRed }}>
                  {caseStudy.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold leading-tight transition" style={{ color: colors.primary.black }}>
                  <a href="#" style={{ color: colors.primary.black }} onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.red} onMouseLeave={(e) => e.currentTarget.style.color = colors.primary.black}>{caseStudy.title}</a>
                </h3>

                {/* Read More */}
                <a
                  href="#"
                  className="font-semibold transition inline-flex items-center gap-2"
                  style={{ color: colors.primary.red }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.darkRed}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.primary.red}
                >
                  Read More
                  <span>+</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
