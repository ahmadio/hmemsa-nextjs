import { groq } from "next-sanity";
import { client } from "@/sanity/client";
import { SiteSettings } from "@/sanity/types";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  siteName,
  logo {
    _type,
    type,
    image {
      _type,
      asset->,
      alt,
      caption
    }
  },
  defaultSeo {
    _type,
    title,
    description,
    keywords,
    ogImage {
      type,
      image {
        _type,
        asset->,
        alt
      }
    },
    noIndex,
    canonicalUrl
  },
  mainNav {
    _type,
    items[] {
      _key,
      _type,
      title,
      type,
      internalLink->,
      externalLink,
      icon,
      isActive,
      dropdownItems[] {
        _key,
        _type,
        text,
        type,
        internalLink->,
        externalLink,
        icon,
        isActive
      }
    }
  },
  footerNav {
    _type,
    items[] {
      _key,
      _type,
      title,
      type,
      internalLink->,
      externalLink,
      icon,
      isActive,
      dropdownItems[] {
        _key,
        _type,
        text,
        type,
        internalLink->,
        externalLink,
        icon,
        isActive
      }
    }
  },
  social[] {
    _key,
    _type,
    text,
    type,
    internalLink->,
    externalLink,
    icon,
    isActive
  }
}`;

export async function getSiteSettings(): Promise<SiteSettings> {
  return await client.fetch(siteSettingsQuery);
}
