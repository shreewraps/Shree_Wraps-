import { useMemo, useState, useEffect, useRef } from "react";
import ProductCard from "@/components/site/ProductCard";
import SortDropdown, { SortOption } from "@/components/site/SortDropdown";
import type { Product } from "@shared/api";
import { products as catalogProducts } from "@/data/catalog";
import { Link, useLocation } from "react-router-dom";
import { shuffleArray } from "@/lib/shuffle";

const SUBCATS = [
  { key: "all", label: "All Corporate Gifts" },
  { key: "onboarding", label: "Employee Onboarding Kits" },
  { key: "anniversary", label: "Work Anniversary Gifts" },
  { key: "festival", label: "Festival Hampers" },
  { key: "funfriday", label: "Fun-friday Hampers" },
  { key: "premium", label: "Premium Thank-you Hampers" },
];

export default function CorporateGifts() {
  const [active, setActive] = useState("all");
  const [sortOption, setSortOption] = useState<SortOption>("none");
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  function scrollByOffset(offset: number) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: offset, behavior: "smooth" });
  }

  let filtered = useMemo(() => {
    if (active === "all") {
      const result = catalogProducts.filter((p) => p.category === "corporates");
      return shuffleArray(result);
    }
    return catalogProducts.filter((p) => p.category === "corporates" && p.subCategory === active);
  }, [active]);

  // Apply sorting based on selected option
  if (sortOption !== "none") {
    filtered = [...filtered];
    switch (sortOption) {
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
  }

  // pagination
  const [page, setPage] = useState(1);
  const perPage = 8;
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  useEffect(() => setPage(1), [active]);

  // sync active subcategory from URL ?sub=
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sub = params.get("sub") || "all";
    const valid = SUBCATS.map((s) => s.key);
    if (valid.includes(sub)) setActive(sub);
    else setActive("all");
  }, [location.search]);

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-6">
        <h1 className="font-serif text-3xl">Corporate Gifts</h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
          <SortDropdown value={sortOption} onChange={setSortOption} />
          <Link to="/contact" className="text-sm text-primary underline whitespace-nowrap">Request a quote</Link>
        </div>
      </div>

      {/* single-line horizontal slider for subcategory strip */}
      <div className="mb-6">
        <div className="overflow-x-auto no-scrollbar">
          <div className="inline-flex gap-3 py-2 px-1">
            {SUBCATS.map((s) => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium ${
                  active === s.key ? 'bg-primary text-primary-foreground' : 'bg-accent hover:bg-accent/80'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
          No products found for "{SUBCATS.find((s) => s.key === active)?.label}".
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pageItems.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>

          {/* pagination controls */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage(idx + 1)}
                className={`px-3 py-1 rounded ${page === idx + 1 ? 'bg-primary text-primary-foreground' : 'border'}`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="px-3 py-1 rounded border disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
