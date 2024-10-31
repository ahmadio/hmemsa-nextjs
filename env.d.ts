declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
      STRIPE_SECRET_KEY: string;
      STRIPE_WEBHOOK_SECRET: string;
      NEXT_PUBLIC_SITE_URL: string;
      NODE_ENV: "development" | "production" | "test";
    }
  }
}

export {};
