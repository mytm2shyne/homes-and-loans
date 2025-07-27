import { groq } from '@/lib/sanity';

export const listingsQuery = groq`
  *[_type == "listing"]{
    _id,
    slug,
    address,
    city,
    state,
    price,
    beds,
    baths,
    sqft,
    "photoUrl": mainImage.asset->url
  } | order(_createdAt desc)
`;