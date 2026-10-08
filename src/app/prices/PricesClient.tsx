"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useMemo } from "react";
import { Search, MessageCircle } from "lucide-react";

function PricesTable({ testPrices }: { testPrices: { name: string; price: number }[] }) {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(urlQuery);

  const filteredTests = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return q
      ? testPrices.filter((t) => t.name.toLowerCase().includes(q))
      : testPrices;
  }, [searchTerm, testPrices]);

  return (
    <div>
      {/* Search Header Bar */}
      <div className="p-4 sm:p-6 border-b border-slate-100 bg-[#FBFDFF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0A1938] tracking-tight">
            Available Tests &amp; Panels
          </h2>
          <p className="text-slate-500 text-xs mt-0.5">
            Showing {filteredTests.length} investigations
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search test name..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 text-xs bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#1D64D8] focus:ring-2 focus:ring-[#1D64D8]/10 transition-all"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-[#F8FAFC] text-slate-500 text-[11px] font-bold uppercase tracking-wider border-b border-slate-100">
              <th className="py-3 px-5 sm:px-6">Investigation Name</th>
              <th className="py-3 px-5 text-right">Standard Price</th>
              <th className="py-3 px-5 sm:px-6 text-center w-32">Inquiry</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredTests.map((test, index) => (
              <tr key={index} className="hover:bg-[#F5F9FD]/60 transition-colors duration-150">
                <td className="py-3 px-5 sm:px-6 text-slate-800 font-normal text-xs sm:text-sm">
                  {test.name}
                </td>
                <td className="py-3 px-5 text-right font-bold text-base sm:text-lg text-[#0A1938]">
                  ₹{test.price}
                </td>
                <td className="py-3 px-5 sm:px-6 text-center">
                  <a
                    href={`https://wa.me/919813503420?text=${encodeURIComponent(
                      `I want to enquire about test: ${test.name}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1D64D8] hover:bg-[#1554B8] text-white px-3.5 py-1.5 rounded-full font-semibold text-xs transition-colors inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>Inquire</span>
                  </a>
                </td>
              </tr>
            ))}
            {filteredTests.length === 0 && (
              <tr>
                <td colSpan={3} className="py-16 text-center text-slate-500">
                  <p className="font-bold text-lg text-[#0A1938] mb-1">No investigations found</p>
                  <p className="text-xs text-slate-400">Try searching with a different test keyword or contact our desk directly.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PricesClient({ testPrices }: { testPrices: { name: string; price: number }[] }) {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-400 font-medium">Loading investigations...</div>}>
      <PricesTable testPrices={testPrices} />
    </Suspense>
  );
}
