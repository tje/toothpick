import { z, defineCollection } from 'astro:content'

const things = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    image: image(),
    comment: z.string(),
  }),
})

export const collections = {
  things,
}
