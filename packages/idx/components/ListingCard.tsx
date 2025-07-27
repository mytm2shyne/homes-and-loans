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

export const ListingCard: React.FC<{ listing: Listing }> = ({ listing }) => (
  <article style={{ border: '1px solid #ddd', padding: 12, borderRadius: 8 }}>
    <h3>{listing.address}</h3>
    <p>
      {listing.city}, {listing.state}
    </p>
    <p>
      ${listing.price.toLocaleString()} &middot; {listing.beds} bd&nbsp;|&nbsp;
      {listing.baths} ba&nbsp;|&nbsp;{listing.sqft.toLocaleString()} sq ft
    </p>
  </article>
);