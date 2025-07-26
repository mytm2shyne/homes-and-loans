'use client';

import { useState } from 'react';
import { ListingCard } from '@hol/idx/components/ListingCard';
import type { Listing } from '@hol/idx/components/ListingCard';


// ⚠️  Replace these mocks later with real data fetched from your DB/API
const all: Listing[] = [
  { id:'1',slug:'123-main-st',address:'123 Main St',city:'Santa Clarita',
    price:750000,beds:3,baths:2,sqft:1780,photoUrl:'/placeholder.jpg' },
  { id:'2',slug:'456-oak-ave',address:'456 Oak Ave',city:'Canyon Country',
    price:645000,beds:4,baths:3,sqft:2120,photoUrl:'/placeholder.jpg' },
  { id:'3',slug:'789-pine-rd',address:'789 Pine Rd',city:'Valencia',
    price:915000,beds:5,baths:4,sqft:3100,photoUrl:'/placeholder.jpg' }
];

export default function SearchPage() {
  const [minBeds, setMinBeds] = useState(0);
  const filtered = all.filter(l => l.beds >= minBeds);

  return (
    <main className="max-w-6xl mx-auto p-4">
      {/* FILTER BAR */}
      <div className="mb-6 flex gap-4 items-center">
        <label className="font-medium">Min Beds:</label>
        <input
          type="number"
          min={0}
          value={minBeds}
          onChange={e => setMinBeds(parseInt(e.target.value || '0', 10))}
          className="border px-2 py-1 w-24 rounded"
        />
        <span className="text-sm text-gray-500">
          Showing {filtered.length} of {all.length} homes
        </span>
      </div>

      {/* GRID */}
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map(l => (
          <ListingCard key={l.id} listing={l} />
        ))}
      </div>
    </main>
  );
}
