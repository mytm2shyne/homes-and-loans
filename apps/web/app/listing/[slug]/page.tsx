import { notFound } from 'next/navigation';
import { Listing } from '@hol/idx/components/ListingCard';

const mockListings: Listing[] = [
  { id:'1',slug:'123-main-st',address:'123 Main St',city:'Santa Clarita',
    price:750000,beds:3,baths:2,sqft:1780,photoUrl:'/placeholder.jpg' },
  { id:'2',slug:'456-oak-ave',address:'456 Oak Ave',city:'Canyon Country',
    price:645000,beds:4,baths:3,sqft:2120,photoUrl:'/placeholder.jpg' }
];

export default function ListingPage({ params }: { params: { slug: string } }) {
  const listing = mockListings.find(l => l.slug === params.slug);
  if (!listing) return notFound();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{listing.address}</h1>
      <p className="text-sm text-gray-600 mb-4">{listing.city}</p>
      <img src={listing.photoUrl} alt={listing.address} className="rounded-lg mb-6" />
      <div className="grid grid-cols-2 gap-4 text-lg">
        <span className="font-semibold">Price:</span>
        ${listing.price.toLocaleString()}
        <span className="font-semibold">Beds / Baths:</span>
        {listing.beds} / {listing.baths}
        <span className="font-semibold">Sq Ft:</span>
        {listing.sqft.toLocaleString()}
      </div>
    </main>
  );
}
