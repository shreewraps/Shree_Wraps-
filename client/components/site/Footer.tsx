import { Link } from "react-router-dom";
import { Instagram, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-white">
      <div className="max-w-6xl mx-auto pt-6 md:pt-4 pb-12 px-4 md:px-0">
        <div className="flex flex-col md:grid md:grid-cols-4 gap-3 md:gap-12 items-start">
          {/* Logo + Social */}
          <div className="flex flex-col text-left">
            <div className="flex items-start -mt-[10px]">
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762774274/ChatGPT_Image_Nov_10__2025__04_41_17_PM-removebg-preview_2_jspcle.png"
                  alt="Shree Wraps"
                  className="h-24 md:h-[12rem] w-24 md:w-[12rem] object-contain select-none"
                  loading="eager"
                />
              </Link>
            </div>

            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/p/DOgpAN5AFcH/?img_index=1&igsh=MW0wa2MxeTN3MnJjOA=="
                className="p-2 rounded-full bg-accent hover:bg-accent/70"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://share.google/eRGPcMhtc6EOatWYy"
                className="p-2 rounded-full bg-accent hover:bg-accent/70"
              >
                <MapPin className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/7292871937"
                className="p-2 rounded-full bg-accent hover:bg-accent/70"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
              <a
                href="mailto:shree.wraps@gmail.com"
                className="p-2 rounded-full bg-accent hover:bg-accent/70"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Container - Horizontal on mobile, grid on desktop */}
          <div className="flex gap-6 md:flex-col md:col-span-3 w-full">
            {/* Quick Links */}
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm md:text-base">Quick Links</h4>
              <ul className="mt-3 space-y-2 text-xs md:text-sm">
                <li>
                  <Link to="/products" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/bulk-order" className="hover:underline">
                    Bulk & Custom Orders
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:underline">
                    Journal
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm md:text-base">Policies</h4>
              <ul className="mt-3 space-y-2 text-xs md:text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Refund
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:underline">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm md:text-base">Newsletter</h4>
              <p className="mt-3 text-xs md:text-sm text-muted-foreground">
                Get packaging tips and seasonal launches.
              </p>
              <form className="mt-4 flex gap-2 flex-col md:flex-row">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 h-10 rounded-md border border-input px-3 text-xs md:text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <button className="h-10 px-4 rounded-md bg-primary text-primary-foreground text-xs md:text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Shree Wraps. All rights reserved.
      </div>
    </footer>
  );
}
