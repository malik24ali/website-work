import { colors } from "@/config/colors";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  const companyLinks = [
    "Home",
    "About Us",
    "Contact Us",
    "Services",
    "Our Team",
  ];

  const servicesLinks = [
    "Strategy & Planning",
    "Consumer Market",
    "Data Analysis",
    "Corporate Finance",
    "Market Research",
  ];

  return (
    <footer ref={ref} style={{ backgroundColor: colors.primary.black, color: colors.primary.white }}>
      {/* Newsletter Section */}
      <div className="border-b py-16" style={{ borderBottomColor: colors.neutral[700] }}>
        <div className={`max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold transition-smooth">Subscribe to our Newsletter</h2>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none transition-smooth"
              style={{ backgroundColor: colors.primary.white, color: colors.primary.black }}
            />
            <button className="text-white px-8 py-3 rounded-lg font-semibold transition hover:shadow-lg hover-scale" style={{ backgroundColor: colors.primary.red }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary.darkRed} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary.red}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 animate-stagger">
          {/* About */}
          <div className="space-y-4 opacity-0 animate-fadeInUp">
            <h3 className="text-xl font-bold transition-smooth">About Us</h3>
            <p style={{ color: colors.neutral[400] }} className="transition-smooth">
              Business Consulting is optimize standing manufactured products and installation synergy.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-xl transition hover-scale" style={{ color: colors.neutral[400] }} onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.red} onMouseLeave={(e) => e.currentTarget.style.color = colors.neutral[400]}>
                f
              </a>
              <a href="#" className="text-xl transition hover-scale" style={{ color: colors.neutral[400] }} onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.red} onMouseLeave={(e) => e.currentTarget.style.color = colors.neutral[400]}>
                📷
              </a>
              <a href="#" className="text-xl transition hover-scale" style={{ color: colors.neutral[400] }} onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.red} onMouseLeave={(e) => e.currentTarget.style.color = colors.neutral[400]}>
                𝕏
              </a>
              <a href="#" className="text-xl transition" style={{ color: colors.neutral[400] }} onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.red} onMouseLeave={(e) => e.currentTarget.style.color = colors.neutral[400]}>
                ▶
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4 opacity-0 animate-fadeInUp">
            <h3 className="text-xl font-bold transition-smooth">Company</h3>
            <ul className="space-y-3" style={{ color: colors.neutral[400] }}>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="transition hover-scale" style={{ color: colors.neutral[400] }} onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.red} onMouseLeave={(e) => e.currentTarget.style.color = colors.neutral[400]}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 opacity-0 animate-fadeInUp">
            <h3 className="text-xl font-bold transition-smooth">Services</h3>
            <ul className="space-y-3" style={{ color: colors.neutral[400] }}>
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="transition hover-scale" style={{ color: colors.neutral[400] }} onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.red} onMouseLeave={(e) => e.currentTarget.style.color = colors.neutral[400]}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Posts */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Popular Posts</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-16 h-16 rounded flex-shrink-0" style={{ backgroundColor: colors.neutral[700] }}></div>
                <div>
                  <h4 className="font-semibold text-sm">
                    Building web layouts for dual foldable devices
                  </h4>
                  <p className="text-xs" style={{ color: colors.neutral[500] }}>February 12, 2023</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-16 h-16 rounded flex-shrink-0" style={{ backgroundColor: colors.neutral[700] }}></div>
                <div>
                  <h4 className="font-semibold text-sm">
                    Top 10 Most Populars Google Chrome app
                  </h4>
                  <p className="text-xs" style={{ color: colors.neutral[500] }}>February 12, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderTopColor: colors.neutral[700], borderTopWidth: '1px' }}>
          <div style={{ color: colors.neutral[400] }} className="mb-4 md:mb-0">
            © 2023 <span style={{ color: colors.primary.red }}>Orvix</span> all rights reserved. Design By Dream-IT.
          </div>
          <div className="text-3xl font-bold" style={{ color: colors.primary.red }}>Orvix</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
