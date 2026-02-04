import Link from "next/link";

const footerLinks = {
  product: [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Integrations" },
    { href: "#", label: "Security" },
  ],
  company: [
    { href: "#", label: "About" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Contact" },
  ],
  resources: [
    { href: "#", label: "Documentation" },
    { href: "#", label: "Help Center" },
    { href: "#", label: "Case Studies" },
    { href: "#", label: "API" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-black">
      {/* Main footer content */}
      <div className="grid grid-cols-12">
        {/* Brand block */}
        <div className="col-span-12 lg:col-span-4 bg-[#0000FF] p-8 lg:p-12 border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-black">
          <Link href="/" className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-[#FF0000]" />
              <div className="w-3 h-3 bg-[#FFDE00]" />
              <div className="w-3 h-3 bg-white" />
            </div>
            <span className="font-black text-lg text-white uppercase tracking-tight">
              GameTime.ai
            </span>
          </Link>
          <p className="text-white/60 text-sm mb-6 max-w-[250px]">
            Real-time AI coaching for sales teams that want to win.
          </p>
          <p className="text-white/40 text-xs uppercase tracking-wider">
            A product by GroundGame
          </p>
        </div>

        {/* Links grid */}
        <div className="col-span-12 lg:col-span-8 grid grid-cols-3">
          {/* Product Links */}
          <div className="bg-white p-6 lg:p-8 border-b-[6px] lg:border-b-0 border-r-[6px] border-black">
            <h4 className="font-black mb-4 text-black text-xs uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-black/50 hover:text-black transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="bg-[#FFDE00] p-6 lg:p-8 border-b-[6px] lg:border-b-0 border-r-[6px] border-black">
            <h4 className="font-black mb-4 text-black text-xs uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-black/50 hover:text-black transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="bg-[#FF0000] p-6 lg:p-8 border-b-[6px] lg:border-b-0 border-black">
            <h4 className="font-black mb-4 text-white text-xs uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="grid grid-cols-12 border-t-[6px] border-black">
        <div className="col-span-12 lg:col-span-6 bg-black p-6 lg:p-8 border-b-[6px] lg:border-b-0 lg:border-r-[6px] border-white/10">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} GroundGame. All rights reserved.
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 bg-black p-6 lg:p-8 flex items-center justify-start lg:justify-end gap-6">
          <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
            Privacy
          </Link>
          <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
            Terms
          </Link>
          <Link href="#" className="text-white/40 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
            Security
          </Link>
        </div>
      </div>
    </footer>
  );
}
