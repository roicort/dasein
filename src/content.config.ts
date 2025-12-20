import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const projects = defineCollection({
  loader: file("src/content/projects.yml"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      link: z.string().url(),
    }),
});

const sections = defineCollection({
  loader: file("src/content/sections.yml"),
  schema: z.object({
    id: z.string().optional(),
    heading: z.string(),
    component: z.string().optional(),
    collection: z.string().optional(),
    limit: z.number().optional(),
    viewAllHref: z.string().optional(),
    viewAllLabel: z.string().optional(),
    items: z
      .array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          datetime: z.string().optional(),
          href: z.string().optional(),
        }),
      )
      .optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        }),
      )
      .optional(),
  }),
});

const socials = defineCollection({
  loader: file("src/content/socials.yml"),
  schema: z.object({
    id: z.string().optional(),
    label: z.string(),
    href: z.string(),
  }),
});

export const collections = { blog, projects, sections, socials };
