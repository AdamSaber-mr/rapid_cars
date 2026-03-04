import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Main Footer */}
        <div className="py-12 lg:py-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/">
              <span
                className="text-[22px] tracking-[-0.03em] text-white block mb-6"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
              >
                RAPIDCARS
              </span>
            </Link>
            <p
              className="text-white/50 max-w-[260px]"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13px', lineHeight: 1.7 }}
            >
              Premium autoverhuur voor wie sportief, snel en zonder gedoe wil rijden. Gevestigd in Nederland.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[11px] tracking-[0.15em] uppercase text-white/40 mb-4 lg:mb-6"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Navigatie
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Aanbod', href: '/aanbod' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13px' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[11px] tracking-[0.15em] uppercase text-white/40 mb-4 lg:mb-6"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Contact
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              <li>
                <span
                  className="text-white/60"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13px' }}
                >
                  info@rapidcars.nl
                </span>
              </li>
              <li>
                <span
                  className="text-white/60"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13px' }}
                >
                  +31 6 83851363
                </span>
              </li>
              <li>
                <span
                  className="text-white/60"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13px' }}
                >
                  Amsterdam, Nederland
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-span-2 lg:col-span-1">
            <h4
              className="text-[11px] tracking-[0.15em] uppercase text-white/40 mb-4 lg:mb-6"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
            >
              Beschikbaarheid
            </h4>
            <ul className="space-y-2 lg:space-y-3">
              <li className="flex justify-between max-w-[200px] lg:max-w-none">
                <span
                  className="text-white/60"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13px' }}
                >
                  Ma - Vr
                </span>
                <span
                  className="text-white/60"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13px' }}
                >
                  08:00 - 20:00
                </span>
              </li>
              <li className="flex justify-between max-w-[200px] lg:max-w-none">
                <span
                  className="text-white/60"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13px' }}
                >
                  Za - Zo
                </span>
                <span
                  className="text-white/60"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '13px' }}
                >
                  09:00 - 18:00
                </span>
              </li>
              <li className="pt-1">
                <span
                  className="text-white/40"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px' }}
                >
                  Noodgevallen: 24/7
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 lg:py-8 flex flex-col md:flex-row justify-between items-center gap-3 lg:gap-4">
          <p
            className="text-white/30"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px' }}
          >
            &copy; 2026 RapidCars. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6 lg:gap-8">
            <a
              href="#"
              className="text-white/30 hover:text-white/60 transition-colors duration-300"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px' }}
            >
              Privacybeleid
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-white/60 transition-colors duration-300"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '12px' }}
            >
              Algemene Voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}