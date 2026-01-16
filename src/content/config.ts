import { defineCollection, z } from 'astro:content';

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    logo: z.string().optional(),
    heroMetric: z.string(),
    heroMetricLabel: z.string(),
    challenge: z.string(),
    challengeEs: z.string().optional(),
    outcome: z.string(),
    outcomeEs: z.string().optional(),
    order: z.number().default(0),
  }),
});

const logCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    titleEs: z.string().optional(),
    description: z.string(),
    descriptionEs: z.string().optional(),
    date: z.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  portfolio: portfolioCollection,
  log: logCollection,
};
