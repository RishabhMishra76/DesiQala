import type { NextConfig } from "next";
import { CRAFT_IMAGE_VERSION } from "./src/lib/crafts";

const nextConfig: NextConfig = {
  images: {
    // Next 16 defaults to 4h; shorter TTL avoids stale /_next/image output in dev.
    minimumCacheTTL: 60,
    localPatterns: [
      {
        pathname: "/crafts/**",
        search: `?v=${CRAFT_IMAGE_VERSION}`,
      },
      {
        pathname: "/hero/**",
      },
    ],
  },
};

export default nextConfig;
