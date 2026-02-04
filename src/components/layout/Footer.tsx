import Link from "next/link";
import { Container } from "@/components/ui/Container";

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
    <footer className="bg-[#0a0a0f] border-t border-[#2a2a3c] py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f0ff]/20 to-[#ff4d4d]/20 border border-[#2a2a3c] flex items-center justify-center">
                <span className="text-white font-bold text-sm">GT</span>
              </div>
              <span className="font-bold text-lg text-white">
                GameTime<span className="text-[#00f0ff]">.ai</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm mb-4 max-w-[200px]">
              Real-time AI coaching for sales teams that want to win.
            </p>
            <p className="text-white/30 text-xs">
              A product by GroundGame
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#2a2a3c] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} GroundGame. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-white/40 hover:text-white transition-colors">
              Security
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
