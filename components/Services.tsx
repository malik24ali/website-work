import { colors } from "@/config/colors";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      id: 1,
      number: "01",
      title: "Interacture Capacity Planning",
      description: "Dramatically cultivate from quality user centric growth strateges emerging.",
      icon: "🎯",
    },
    {
      id: 2,
      number: "02",
      title: "New Technology Services",
      description: "Dramatically cultivate from quality user centric growth strateges emerging.",
      icon: "💻",
    },
    {
      id: 3,
      number: "03",
      title: "Cloud Computing Solutions",
      description: "Dramatically cultivate from quality user centric growth strateges emerging.",
      icon: "☁️",
    },
    {
      id: 4,
      number: "04",
      title: "Top Information Technology",
      description: "Dramatically cultivate from quality user centric growth strateges emerging.",
      icon: "🔧",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className={isVisible ? 'animate-fadeInUp' : 'opacity-0'}>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: colors.primary.black }}>
              We Run All Kinds Of Services <br />
              From <span style={{ color: colors.primary.red }}>Technologies</span>
            </h2>
          </div>
          <a
            href="#"
            className={`mt-6 md:mt-0 font-semibold transition ${isVisible ? 'animate-fadeInRight' : 'opacity-0'}`}
            style={{ color: colors.primary.red }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.darkRed}
            onMouseLeave={(e) => e.currentTarget.style.color = colors.primary.red}
          >
            All Services →
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-stagger">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover-scale opacity-0 animate-fadeInUp"
            >
              {/* Number */}
              <div className="text-5xl font-bold mb-4 animate-countUp" style={{ color: colors.primary.lightRed }}>
                {service.number}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 transition-smooth" style={{ color: colors.primary.black }}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 transition-smooth" style={{ color: colors.text.light }}>{service.description}</p>

              {/* Read More Link */}
              <a
                href="#"
                className="font-semibold transition inline-flex items-center gap-2 group"
                style={{ color: colors.primary.red }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.darkRed}
                onMouseLeave={(e) => e.currentTarget.style.color = colors.primary.red}
              >
                Read More
                <span className="transition-transform group-hover:translate-x-1">+</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
