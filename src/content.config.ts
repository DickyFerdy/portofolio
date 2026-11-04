import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    problem: z.string(),
    role: z.string(),
    techStack: z.array(z.string()),
    impact: z.string(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    image: z.string(),
    imageAlt: z.string(),
    order: z.number().default(1),
  }),
});

export const collections = { projects };
