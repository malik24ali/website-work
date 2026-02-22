import { colors } from "@/config/colors";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { number: 15000, label: "Project Complete" },
    { number: 23, label: "Years Experience" },
    { number: 30, label: "Expert Member" },
    { number: 97, label: "Satisfaction Rate" },
  ];

  const achievements = [
    "Credibly reinvent sticky partnerships done",
    "Distinctively evisculate data superior content.",
    "Monotonectally foster open source",
  ];

  return (
    <section ref={ref} className="py-20" style={{ backgroundColor: colors.primary.lightRed }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <div className={`relative ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="rounded-3xl h-96 lg:h-auto aspect-square flex items-center justify-center hover-scale" style={{ backgroundColor: colors.primary.lightRed }}>
              <div className="text-center space-y-4">
                <div className="text-6xl animate-bounce">📊</div>
                <p style={{ color: colors.text.light }}>About Us Image</p>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className={`space-y-6 ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold transition-smooth" style={{ color: colors.primary.black }}>
              The Fasted Way To Achieve <br /> Your Business{" "}
              <span style={{ color: colors.primary.red }}>Success</span>
            </h2>
            <p className="text-lg leading-relaxed transition-smooth" style={{ color: colors.text.light }}>
              Continually generate 2.0 communities and client-focused products. In
              synergize strategic manufactured products whereas levera.
            </p>

            {/* Divider */}
            <div className="h-1 w-20 animate-pulse" style={{ backgroundColor: colors.primary.red }}></div>

            {/* Company Info */}
            <h3 className="text-2xl font-bold transition-smooth" style={{ color: colors.primary.black }}>
              We are Since <span style={{ color: colors.primary.red }}>2007 to Present</span> in
              Sandigo, USA
            </h3>

            {/* Achievements */}
            <div className="space-y-4 animate-stagger">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-4 opacity-0 animate-fadeInUp">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm animate-scaleUp" style={{ backgroundColor: colors.primary.red }}>
                    ✓
                  </div>
                  <p className="font-semibold transition-smooth" style={{ color: colors.text.primary }}>{achievement}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105" style={{ backgroundColor: colors.primary.red }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary.darkRed} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary.red}>
              Learn More +
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className={isVisible ? 'animate-fadeInUp' : 'opacity-0'}>
          <h3 className="text-2xl font-bold mb-12 transition-smooth" style={{ color: colors.primary.black }}>
            Orvix Finished this Achievement in 7 Years
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger">
            {stats.map((stat, index) => {
              const count = useCounter(stat.number, 2000, isVisible);
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition hover-scale opacity-0 animate-fadeInUp"
                >
                  <div className="text-4xl font-bold mb-2 animate-countUp" style={{ color: colors.primary.red }}>
                    {count}{stat.label.includes("%") ? "%" : stat.label.includes("+") ? "+" : stat.number > 1000 ? "K" : ""}
                  </div>
                  <p className="font-semibold transition-smooth" style={{ color: colors.text.light }}>{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
