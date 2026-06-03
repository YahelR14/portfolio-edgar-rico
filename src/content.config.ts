import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    status: z.enum(["completed", "in-progress", "planned"]),
    role: z.string(),
    technologies: z.array(z.string()),
    evidence: z.array(z.string()).default([]),
    highlight: z.boolean().default(false),
    repositoryUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
