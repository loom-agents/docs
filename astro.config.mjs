// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: 'https://loom-agents.github.io',
  base: 'docs',
  integrations: [
    starlight({
      title: "Loom",
      favicon: "favicon.ico",
      customCss: [
        './src/styles/theme.css',
      ],
      social: {
        github: "https://github.com/loom-agents/agents",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            { label: "Introduction", slug: "guides/introduction" },
            { label: "Examples", slug: "guides/examples" },
          ],
        },
        {
          label: "Class Reference",
          items: [
            { label: "Loom", slug: "reference/loom" },
            { label: "Agent", slug: "reference/agent" },
            { label: "Runner", slug: "reference/runner" },
            { label: "Trace", slug: "reference/trace" },
          ],
        },
      ],
    }),
  ],
});
