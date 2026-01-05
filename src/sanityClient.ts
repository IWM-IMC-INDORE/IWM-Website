// src/sanityClient.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "rrlyxom1", // Find this in sanity.config.ts or manage.sanity.io
  dataset: "production",        // usually 'production'
  useCdn: false,                 // set to `false` if you want fresh data immediately
  apiVersion: "2023-01-01",
});
