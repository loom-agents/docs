// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightLlmsTxt from "starlight-llms-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://loom-agents.github.io",
  base: "/docs",
  integrations: [
    starlight({
      title: "Loom",
      favicon: "favicon.ico",
      customCss: ["./src/styles/theme.css"],
      plugins: [starlightLlmsTxt()],
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
          label: "Agents",
          items: [
            { label: "Loom", slug: "agents/loom" },
            { label: "MCP", slug: "agents/mcp" },
            { label: "Agent", slug: "agents/agent" },
            { label: "Runner", slug: "agents/runner" },
            { label: "Trace", slug: "agents/trace" },
          ],
        },
        {
          label: "Schema",
          items: [{ label: "Coming Soon", slug: "schema/coming-soon" }],
        },
        {
          label: "AI Reference",
          items: [
            { label: "llms.txt", link: "llms.txt" },
            { label: "Abridged llms.txt", link: "llms-small.txt" },
            { label: "Complete llms.txt", link: "llms-full.txt" },
          ],
        },
      ],
    }),
  ],
});
