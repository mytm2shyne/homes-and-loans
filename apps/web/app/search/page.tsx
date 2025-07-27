import { fetchSanity } from '@/lib/sanity';
import { listingsQuery } from '@/queries/listings';
import { ListingCard, Listing } from '@hol/idx/components/ListingCard';

export default async function SearchPage() {
  const listings = await fetchSanity<Listing[]>(listingsQuery);

  return (
    <main className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {listings.map((l) => (
        <ListingCard key={l._id} {...l} />
      ))}
    </main>
  );
}