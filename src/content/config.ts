import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content", // Important for Markdown/MDX
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    date: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection, // Must match folder name
};
