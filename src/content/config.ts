import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content", // Important for Markdown/MDX
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    date: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    tech: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default("Ouassil Dahimene"),
    cover: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
