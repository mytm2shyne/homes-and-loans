import { createClient } from '@sanity/client';
import groq from 'groq';

export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset:   process.env.SANITY_DATASET!,
  apiVersion: process.env.SANITY_API_VERSION!,
  useCdn: true,                // cached, for public read
  token: process.env.SANITY_READ_TOKEN, // undefined = public dataset
});

export async function fetchSanity<T>(
  query: string,
  params: Record<string, any> = {}
): Promise<T> {
  return client.fetch<T>(query, params);
}

export { groq };