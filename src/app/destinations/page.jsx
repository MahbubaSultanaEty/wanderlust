"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import DestinationCard from "@/components/DestinationCard";

export default function DestinationPage() {
  const [destinations, setDestinations] = useState([]);
  const [query, setQuery] = useState("");
  const [applied, setApplied] = useState("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

    
  const handleSearch = () => setApplied(query.trim());

  const filtered = applied
    ? destinations.filter((d) => {
        const q = applied.toLowerCase();
        return (
          d.destinationName?.toLowerCase().includes(q) ||
          d.country?.toLowerCase().includes(q) ||
          d.category?.toLowerCase().includes(q)
        );
      })
    : destinations;

  return (
    <div className="container p-8 mx-auto">
      {/* Header + Search */}
      <div className="m-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-3xl font-bold text-cyan-600">Destinations</h2>

        <div className="flex items-center gap-3 bg-white border border-cyan-100 shadow-md rounded-2xl px-4 py-3 max-w-xl w-full">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search destinations, countries, categories..."
            className="flex-1 outline-none text-gray-700 placeholder:text-gray-400 text-sm bg-transparent"
          />
          <button
            onClick={handleSearch}
            className="bg-cyan-500 hover:bg-cyan-400 transition text-white px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2"
          >
            <Search size={16} />
            Search
          </button>
        </div>
      </div>

      {/* Results count */}
      {applied && (
        <p className="text-gray-400 text-sm mx-6 mb-4">
          {filtered.length > 0
            ? `${filtered.length} result${filtered.length > 1 ? "s" : ""} for "${applied}"`
            : `No results found for "${applied}"`}
        </p>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} />
          ))}
        </div>
      ) : applied ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <p className="text-5xl mb-4">🗺️</p>
          <p className="text-lg font-medium">No destinations found</p>
          <p className="text-sm mt-1">Try a different search term</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <p className="text-lg font-medium">Loading...</p>
        </div>
      )}
    </div>
  );
}