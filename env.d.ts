declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
      STRIPE_SECRET_KEY: string;
      STRIPE_WEBHOOK_SECRET: string;
      VERCEL_PROJECT_PRODUCTION_URL: string;
      NODE_ENV: "development" | "production" | "test";
      NEXT_PUBLIC_SANITY_PROJECT_ID: string;
      NEXT_PUBLIC_SANITY_DATASET: string;
      NEXT_PUBLIC_SANITY_API_VERSION?: string;
    }
  }
}

export {};
