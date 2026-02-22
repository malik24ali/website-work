import { colors } from "@/config/colors";

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Idea Generate",
      description: "Appropriately enhance centered innovation",
    },
    {
      number: "2",
      title: "System Design",
      description: "Appropriately enhance centered innovation",
    },
    {
      number: "3",
      title: "24/7 Support",
      description: "Appropriately enhance centered innovation",
    },
    {
      number: "4",
      title: "Sales Generate",
      description: "Appropriately enhance centered innovation",
    },
  ];

  const skills = [
    { name: "Business Strategy", percentage: 65 },
    { name: "Technology Consulting", percentage: 90 },
    { name: "Product Development", percentage: 80 },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: colors.primary.white }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Process Steps */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="space-y-3">
                  <div className="text-5xl font-bold" style={{ color: colors.primary.lightRed }}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: colors.primary.black }}>
                    <span style={{ color: colors.primary.red }}>{step.title.split(" ")[0]}</span>{" "}
                    {step.title.split(" ").slice(1).join(" ")}
                  </h3>
                  <p style={{ color: colors.text.light }}>{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Consulting Info */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: colors.primary.black }}>
              The Fastest Way To Achieve Technology{" "}
              <span style={{ color: colors.primary.red }}>Consulting</span>
            </h2>

            {/* Divider */}
            <div className="h-1 w-20" style={{ backgroundColor: colors.primary.red }}></div>

            {/* Why Choose */}
            <h3 className="text-2xl font-bold" style={{ color: colors.primary.black }}>
              For Choose <span style={{ color: colors.primary.red }}>Orvix</span> Before know who we
              are?
            </h3>

            <p className="text-lg leading-relaxed" style={{ color: colors.text.light }}>
              Monotonectally brand worldwide value before in seamless process data
              Collaboratively initiate strategic expertise after functionalized models in.
              Synergistically synthesize front-end convergence whereas resource tosynergy.
            </p>

            {/* CTA Button */}
            <button className="text-white px-8 py-3 rounded-lg font-semibold transition" style={{ backgroundColor: colors.primary.red }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary.darkRed} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary.red}>
              More About →
            </button>

            {/* Divider */}
            <div className="pt-4" style={{ borderTopColor: colors.neutral[300], borderTopWidth: '1px' }}>
              <h4 className="text-xl font-bold" style={{ color: colors.primary.black }}>
                More Then 5K+ Brands with work Orvix
              </h4>
            </div>

            {/* Skills Bars */}
            <div className="space-y-6 pt-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold" style={{ color: colors.primary.black }}>{skill.name}</p>
                    <span className="font-bold" style={{ color: colors.primary.red }}>{skill.percentage}%</span>
                  </div>
                  <div className="w-full rounded-full h-3" style={{ backgroundColor: colors.neutral[300] }}>
                    <div
                      className="h-3 rounded-full transition-all duration-500"
                      style={{ width: `${skill.percentage}%`, backgroundColor: colors.primary.red }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
