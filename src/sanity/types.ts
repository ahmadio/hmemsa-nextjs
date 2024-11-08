/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Stat = {
  _id: string;
  _type: "stat";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  value?: string;
  label?: string;
  description?: string;
  icon?: string;
  trend?: {
    direction?: "up" | "down" | "neutral";
    value?: string;
  };
  order?: number;
  isActive?: boolean;
};

export type SiteSettings = {
  _id: string;
  _type: "siteSettings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  siteName?: string;
  logo?: Media;
  defaultSeo?: Seo;
  mainNav?: Navigation;
  footerNav?: Navigation;
  social?: Array<{
    _key: string;
  } & Link>;
};

export type Section = {
  _type: "section";
  type?: "content" | "stats" | "initiative" | "cta" | "media" | "gallery" | "embed";
  title?: string;
  subtitle?: string;
  content?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
    listItem?: "bullet" | "number" | "checklist";
    markDefs?: Array<{
      href?: string;
      blank?: boolean;
      _type: "link";
      _key: string;
    } | {
      reference?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "page";
      } | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "initiative";
      } | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "project";
      };
      _type: "internalLink";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  } | {
    _key: string;
  } & Media | {
    _key: string;
  } & Code>;
  stats?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "stat";
  }>;
  initiatives?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "initiative";
  }>;
  cta?: {
    title?: string;
    description?: string;
    button?: {
      label?: string;
      type?: "internal" | "external";
      internalLink?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "page";
      } | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "initiative";
      } | {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "project";
      };
      externalLink?: string;
    };
  };
  media?: Media;
  gallery?: Gallery;
  embed?: {
    url?: string;
    caption?: string;
  };
  theme?: "default" | "light" | "dark" | "primary";
  spacing?: "default" | "compact" | "comfortable";
};

export type RichText = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet" | "number" | "checklist";
  markDefs?: Array<{
    href?: string;
    blank?: boolean;
    _type: "link";
    _key: string;
  } | {
    reference?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "page";
    } | {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "initiative";
    } | {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "project";
    };
    _type: "internalLink";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  _key: string;
} & Media | {
  _key: string;
} & Code>;

export type Navigation = {
  _type: "navigation";
  items?: Array<{
    link?: Link;
    _type: "navItem";
    _key: string;
  }>;
};

export type Code = {
  _type: "code";
  language?: "javascript" | "typescript" | "html" | "css" | "scss" | "php" | "python" | "ruby" | "shell" | "json" | "markdown" | "text";
  filename?: string;
  code?: string;
};

export type Button = {
  _type: "button";
  label?: string;
  type?: "internal" | "external";
  internalLink?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "initiative";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "project";
  };
  externalLink?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconPosition?: "left" | "right";
};

export type Link = {
  _type: "link";
  text?: string;
  type?: "internal" | "external" | "path" | "dropdown";
  internalLink?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "page";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "initiative";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "project";
  };
  externalLink?: string;
  path?: string;
  dropdownItems?: Array<{
    _key: string;
  } & Link>;
  icon?: string;
  isActive?: boolean;
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  seo?: Seo;
  hero?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "hero";
  };
  gallery?: Gallery;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  sections?: Array<{
    _key: string;
  } & Section>;
};

export type Initiative = {
  _id: string;
  _type: "initiative";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  icon?: string;
  shortDescription?: string;
  fullDescription?: RichText;
  coverImage?: Media;
  projects?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "project";
  }>;
  isActive?: boolean;
};

export type Project = {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  shortDescription?: string;
  coverImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  initiative?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "initiative";
  };
  status?: "planning" | "inProgress" | "continues" | "completed";
  location?: {
    city?: string;
    region?: string;
  };
  gallery?: Gallery;
  content?: RichText;
};

export type Gallery = {
  _type: "gallery";
  items?: Array<{
    _key: string;
  } & Media>;
  caption?: string;
  layout?: "grid" | "carousel" | "masonry";
  columns?: 2 | 3 | 4;
};

export type Hero = {
  _id: string;
  _type: "hero";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  style?: "default" | "withBg" | "split" | "minimal" | "centered";
  headline?: {
    prefix?: string;
    highlight?: string;
    suffix?: string;
  };
  description?: string;
  media?: Media;
  buttons?: Array<{
    _key: string;
  } & Button>;
  theme?: "light" | "dark";
};

export type Media = {
  _type: "media";
  type?: "image" | "video";
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    caption?: string;
    _type: "image";
  };
  video?: {
    url?: string;
    thumbnail?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    };
    caption?: string;
    autoplay?: boolean;
  };
};

export type Seo = {
  _type: "seo";
  title?: string;
  description?: string;
  keywords?: Array<string>;
  ogImage?: {
    type?: "image" | "video";
    image?: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    };
    video?: {
      url?: string;
      thumbnail?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
    };
  };
  noIndex?: boolean;
  canonicalUrl?: string;
};

export type BlockContent = Array<{
  children?: Array<{
    marks?: Array<string>;
    text?: string;
    _type: "span";
    _key: string;
  }>;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet";
  markDefs?: Array<{
    href?: string;
    _type: "link";
    _key: string;
  }>;
  level?: number;
  _type: "block";
  _key: string;
} | {
  asset?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  };
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  _type: "image";
  _key: string;
}>;

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
};

export type Post = {
  _id: string;
  _type: "post";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "author";
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  categories?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  publishedAt?: string;
  body?: BlockContent;
};

export type Author = {
  _id: string;
  _type: "author";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal";
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Stat | SiteSettings | Section | RichText | Navigation | Code | Button | Link | Page | Initiative | Project | Gallery | Hero | Media | Seo | BlockContent | Category | Post | Author | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Slug;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ../hmemsa-nextjs/src/app/layout.tsx
// Variable: SITE_SETTINGS_QUERY
// Query: *[_type == "siteSettings"][0]
export type SITE_SETTINGS_QUERYResult = {
  _id: string;
  _type: "siteSettings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  siteName?: string;
  logo?: Media;
  defaultSeo?: Seo;
  mainNav?: Navigation;
  footerNav?: Navigation;
  social?: Array<{
    _key: string;
  } & Link>;
} | null;

// Source: ../hmemsa-nextjs/src/sanity/queries.ts
// Variable: siteSettingsQuery
// Query: *[_type == "siteSettings"][0]{  _id,  _type,  _createdAt,  _updatedAt,  _rev,  siteName,  logo {    _type,    type,    image {      _type,      asset->,      alt,      caption    }  },  defaultSeo {    _type,    title,    description,    keywords,    ogImage {      type,      image {        _type,        asset->,        alt      }    },    noIndex,    canonicalUrl  },  mainNav {    _type,    items[] {      _key,      _type,      title,      type,      internalLink->,      externalLink,      icon,      isActive,      dropdownItems[] {        _key,        _type,        text,        type,        internalLink->,        externalLink,        icon,        isActive      }    }  },  footerNav {    _type,    items[] {      _key,      _type,      title,      type,      internalLink->,      externalLink,      icon,      isActive,      dropdownItems[] {        _key,        _type,        text,        type,        internalLink->,        externalLink,        icon,        isActive      }    }  },  social[] {    _key,    _type,    text,    type,    internalLink->,    externalLink,    icon,    isActive  }}
export type SiteSettingsQueryResult = {
  _id: string;
  _type: "siteSettings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  siteName: string | null;
  logo: {
    _type: "media";
    type: "image" | "video" | null;
    image: {
      _type: "image";
      asset: {
        _id: string;
        _type: "sanity.imageAsset";
        _createdAt: string;
        _updatedAt: string;
        _rev: string;
        originalFilename?: string;
        label?: string;
        title?: string;
        description?: string;
        altText?: string;
        sha1hash?: string;
        extension?: string;
        mimeType?: string;
        size?: number;
        assetId?: string;
        uploadId?: string;
        path?: string;
        url?: string;
        metadata?: SanityImageMetadata;
        source?: SanityAssetSourceData;
      } | null;
      alt: string | null;
      caption: string | null;
    } | null;
  } | null;
  defaultSeo: {
    _type: "seo";
    title: string | null;
    description: string | null;
    keywords: Array<string> | null;
    ogImage: {
      type: "image" | "video" | null;
      image: {
        _type: "image";
        asset: {
          _id: string;
          _type: "sanity.imageAsset";
          _createdAt: string;
          _updatedAt: string;
          _rev: string;
          originalFilename?: string;
          label?: string;
          title?: string;
          description?: string;
          altText?: string;
          sha1hash?: string;
          extension?: string;
          mimeType?: string;
          size?: number;
          assetId?: string;
          uploadId?: string;
          path?: string;
          url?: string;
          metadata?: SanityImageMetadata;
          source?: SanityAssetSourceData;
        } | null;
        alt: string | null;
      } | null;
    } | null;
    noIndex: boolean | null;
    canonicalUrl: string | null;
  } | null;
  mainNav: {
    _type: "navigation";
    items: Array<{
      _key: string;
      _type: "navItem";
      title: null;
      type: null;
      internalLink: null;
      externalLink: null;
      icon: null;
      isActive: null;
      dropdownItems: null;
    }> | null;
  } | null;
  footerNav: {
    _type: "navigation";
    items: Array<{
      _key: string;
      _type: "navItem";
      title: null;
      type: null;
      internalLink: null;
      externalLink: null;
      icon: null;
      isActive: null;
      dropdownItems: null;
    }> | null;
  } | null;
  social: Array<{
    _key: string;
    _type: "link";
    text: string | null;
    type: "dropdown" | "external" | "internal" | "path" | null;
    internalLink: {
      _id: string;
      _type: "initiative";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      name?: string;
      slug?: Slug;
      icon?: string;
      shortDescription?: string;
      fullDescription?: RichText;
      coverImage?: Media;
      projects?: Array<{
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        _key: string;
        [internalGroqTypeReferenceTo]?: "project";
      }>;
      isActive?: boolean;
    } | {
      _id: string;
      _type: "page";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      title?: string;
      slug?: Slug;
      seo?: Seo;
      hero?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "hero";
      };
      gallery?: Gallery;
      coverImage?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
      sections?: Array<{
        _key: string;
      } & Section>;
    } | {
      _id: string;
      _type: "project";
      _createdAt: string;
      _updatedAt: string;
      _rev: string;
      name?: string;
      slug?: Slug;
      shortDescription?: string;
      coverImage?: {
        asset?: {
          _ref: string;
          _type: "reference";
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        _type: "image";
      };
      initiative?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "initiative";
      };
      status?: "completed" | "continues" | "inProgress" | "planning";
      location?: {
        city?: string;
        region?: string;
      };
      gallery?: Gallery;
      content?: RichText;
    } | null;
    externalLink: string | null;
    icon: string | null;
    isActive: boolean | null;
  }> | null;
} | null;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "\n  *[_type == \"siteSettings\"][0]\n  ": SITE_SETTINGS_QUERYResult;
    "*[_type == \"siteSettings\"][0]{\n  _id,\n  _type,\n  _createdAt,\n  _updatedAt,\n  _rev,\n  siteName,\n  logo {\n    _type,\n    type,\n    image {\n      _type,\n      asset->,\n      alt,\n      caption\n    }\n  },\n  defaultSeo {\n    _type,\n    title,\n    description,\n    keywords,\n    ogImage {\n      type,\n      image {\n        _type,\n        asset->,\n        alt\n      }\n    },\n    noIndex,\n    canonicalUrl\n  },\n  mainNav {\n    _type,\n    items[] {\n      _key,\n      _type,\n      title,\n      type,\n      internalLink->,\n      externalLink,\n      icon,\n      isActive,\n      dropdownItems[] {\n        _key,\n        _type,\n        text,\n        type,\n        internalLink->,\n        externalLink,\n        icon,\n        isActive\n      }\n    }\n  },\n  footerNav {\n    _type,\n    items[] {\n      _key,\n      _type,\n      title,\n      type,\n      internalLink->,\n      externalLink,\n      icon,\n      isActive,\n      dropdownItems[] {\n        _key,\n        _type,\n        text,\n        type,\n        internalLink->,\n        externalLink,\n        icon,\n        isActive\n      }\n    }\n  },\n  social[] {\n    _key,\n    _type,\n    text,\n    type,\n    internalLink->,\n    externalLink,\n    icon,\n    isActive\n  }\n}": SiteSettingsQueryResult;
  }
}
