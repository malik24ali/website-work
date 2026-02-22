import { colors } from "@/config/colors";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold transition-smooth" style={{ color: colors.primary.black }}>
              What Say Our CEO, About <br /> Orvix{" "}
              <span style={{ color: colors.primary.red }}>Customers</span>
            </h2>

            {/* Divider */}
            <div className="h-1 w-20 animate-pulse" style={{ backgroundColor: colors.primary.red }}></div>

            <blockquote className="text-2xl italic font-semibold pl-6 animate-fadeInUp" style={{ color: colors.primary.black, borderLeft: `4px solid ${colors.primary.red}` }}>
              "We help Our Clients to Renew Their Business Function to Create
              Brandable Organizations"
            </blockquote>

            <p className="text-lg leading-relaxed transition-smooth" style={{ color: colors.text.light }}>
              Appropriately enhance principle-centered innovation rather than high
              standards in platforms. Credibly orchestrate functional markets through
              multidisciplinary services. Uniquely strategize transparent technology
              and user friendly ideas markets.
            </p>

            {/* Author */}
            <div className="pt-4 animate-fadeInUp">
              <h4 className="font-bold transition-smooth" style={{ color: colors.primary.black }}>Philip Antrophy</h4>
              <p style={{ color: colors.text.light }}>SEO & Founder</p>
            </div>

            {/* CTA */}
            <button className="text-white px-8 py-3 rounded-lg font-semibold transition hover:shadow-lg hover-scale" style={{ backgroundColor: colors.primary.red }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary.darkRed} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary.red}>
              Clients Review →
            </button>
          </div>

          {/* Image Content */}
          <div className={`relative ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <div className="rounded-3xl h-96 lg:h-auto aspect-square flex items-center justify-center hover-scale" style={{ backgroundColor: colors.primary.lightRed }}>
              <div className="text-center space-y-4">
                <div className="text-6xl animate-bounce">👤</div>
                <p style={{ color: colors.text.light }}>CEO Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
