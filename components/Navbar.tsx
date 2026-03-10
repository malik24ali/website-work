import { useState } from "react";
import Link from "next/link";
import { colors } from "@/config/colors";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "/",
      submenu: [
        { label: "IT Consulting", href: "/it-consulting" },
        { label: "Finance Consulting", href: "/finance-consulting" },
        { label: "IT Solution 01", href: "/it-solution-01" },
      ],
    },
    {
      label: "Company",
      href: "/company",
      submenu: [
        { label: "About Us", href: "/about-us" },
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Our Team", href: "/our-team" },
      ],
    },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    {
      label: "Blog",
      href: "/blog",
      submenu: [
        { label: "Blog Grid", href: "/blog-grid" },
        { label: "Blog List", href: "/blog-list" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: colors.primary.red }}>
            O
          </div>
          <span className="text-2xl font-bold hidden sm:inline" style={{ color: colors.primary.black }}>ornix</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-12 font-medium">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link href={item.href} className="py-2 transition" style={{ color: colors.text.primary }} onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.red} onMouseLeave={(e) => e.currentTarget.style.color = colors.text.primary}>
                {item.label}
              </Link>
              {item.submenu && (
                <div className="absolute left-0 mt-0 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {item.submenu.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.href}
                      className="block px-4 py-2 transition"
                      style={{ color: colors.text.primary, backgroundColor: 'transparent' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = colors.primary.red;
                        e.currentTarget.style.backgroundColor = colors.primary.lightRed;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = colors.text.primary;
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href="/contact" className="hidden md:inline text-white px-6 py-2 rounded-lg font-semibold transition" style={{ backgroundColor: colors.primary.red }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary.darkRed} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary.red}>
          Schedule Consultation
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-0.5 mb-1.5" style={{ backgroundColor: colors.primary.black }}></div>
          <div className="w-6 h-0.5 mb-1.5" style={{ backgroundColor: colors.primary.black }}></div>
          <div className="w-6 h-0.5" style={{ backgroundColor: colors.primary.black }}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-white w-full shadow-lg flex flex-col py-4" style={{ borderTop: `1px solid ${colors.border.light}` }}>
          {menuItems.map((item, index) => (
            <div key={index}>
              <Link
                href={item.href}
                className="block px-6 py-3 font-medium transition"
                style={{ color: colors.text.primary }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.primary.red;
                  e.currentTarget.style.backgroundColor = colors.primary.lightRed;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.text.primary;
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </Link>
              {item.submenu && (
                <div className="border-l-4" style={{ borderColor: colors.primary.red, backgroundColor: colors.primary.lightRed }}>
                  {item.submenu.map((sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.href}
                      className="block px-8 py-2 text-sm transition"
                      style={{ color: colors.text.secondary }}
                      onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.red}
                      onMouseLeave={(e) => e.currentTarget.style.color = colors.text.secondary}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className="mx-6 mt-4 text-white px-4 py-2 rounded-lg font-semibold w-[calc(100%-3rem)] transition text-center" style={{ backgroundColor: colors.primary.red }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.primary.darkRed} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.primary.red}>
            Schedule Consultation
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
