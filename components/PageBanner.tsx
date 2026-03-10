import { colors } from "@/config/colors";

type PageBannerProps = {
  title: string;
  description: string;
};

const PageBanner = ({ title, description }: PageBannerProps) => {
  return (
    <section className="pt-32 pb-16" style={{ backgroundColor: colors.primary.lightRed }}>
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.primary.black }}>
          {title}
        </h1>
        <p className="max-w-3xl text-lg" style={{ color: colors.text.secondary }}>
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageBanner;
