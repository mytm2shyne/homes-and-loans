// packages/idx/components/ListingCard.tsx


export interface Listing {
  id: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  photoUrl: string;
}
export const ListingCard = (l: Listing) => (
  <article className="border rounded-xl shadow p-4">
    {l.photoUrl && (
      <Image
        src={l.photoUrl}
        alt={l.address}
        width={400}
        height={300}
        className="rounded-lg mb-2 object-cover"
      />
    )}
    <h3 className="font-semibold">{l.address}</h3>
    <p>{[l.city, l.state].filter(Boolean).join(', ')}</p>
    <p className="text-teal-600 font-bold">${l.price.toLocaleString()}</p>
    <p>
      {l.beds} bd · {l.baths} ba · {l.sqft.toLocaleString()} sqft
    </p>
  </article>
);