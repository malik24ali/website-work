import { colors } from "@/config/colors";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="relative pt-32 pb-20" style={{ backgroundColor: colors.background }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <p className="font-semibold text-sm uppercase tracking-wider transition-smooth" style={{ color: colors.primary.red }}>
              Work With Orvix
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight" style={{ color: colors.primary.black }}>
              Innovate Solution For
              <br />
              Business <span style={{ color: colors.primary.red }}>Success</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-lg transition-smooth" style={{ color: colors.text.light }}>
              Monotonectally implement integrated commerce and distributed is conveniently unleash B2B customer service via long
            </p>

            {/* Divider Line */}
            <div className="h-1 w-20 animate-pulse" style={{ backgroundColor: colors.primary.red }}></div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 animate-stagger">
              <button className="text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105" style={{ backgroundColor: colors.primary.red }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary.darkRed} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary.red}>
                Work Together +
              </button>
              <div className="flex items-center gap-4 hover-scale">
                <a
                  href="tel:+983217690326"
                  className="w-12 h-12 rounded-full flex items-center justify-center hover:text-white transition"
                  style={{ backgroundColor: colors.primary.lightRed, color: colors.primary.red }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primary.red;
                    e.currentTarget.style.color = colors.primary.white;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.primary.lightRed;
                    e.currentTarget.style.color = colors.primary.red;
                  }}
                >
                  <span>📞</span>
                </a>
                <div>
                  <p className="text-sm" style={{ color: colors.text.light }}>Call Everyday</p>
                  <a
                    href="tel:+983217690326"
                    className="font-bold hover:transition"
                    style={{ color: colors.primary.black }}
                    onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.red}
                    onMouseLeave={(e) => e.currentTarget.style.color = colors.primary.black}
                  >
                    +98 321 (7690) 326
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative hidden lg:block">
            <div className="rounded-3xl h-96 flex items-center justify-center" style={{ backgroundColor: colors.primary.lightRed }}>
              <div className="text-center space-y-4">
                <div className="text-6xl">🚀</div>
                <p style={{ color: colors.text.light }}>Business Growth Illustration</p>
              </div>
            </div>

            {/* Play Button */}
            <button className="absolute inset-0 m-auto w-16 h-16 rounded-full flex items-center justify-center text-white hover:opacity-90 transition shadow-lg" style={{ backgroundColor: colors.primary.red }}>
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
