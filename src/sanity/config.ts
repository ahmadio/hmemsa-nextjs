import { apiVersion, dataset, projectId } from "@/sanity/env";

export const config = {
  dataset,
  projectId,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
};
