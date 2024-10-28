import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { config } from "@/sanity/config";

// Set up a helper function for generating image URLs with only the asset reference data
const builder = imageUrlBuilder(config);

export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
