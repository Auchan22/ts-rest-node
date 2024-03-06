import { integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const post = pgTable('post', {
  id: serial('id').primaryKey().unique(),
  title: varchar('title', { length: 256 }).notNull(),
  body: text("body").notNull(),
  likes: integer("likes").default(0),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
//   autor
});

export const PostSchema = createSelectSchema(post, {
  id: z.number(),
  likes: z.number().default(0).nullable(),
  created_at: z.date(),
  updated_at: z.date(),
})

export const createPostSchema = PostSchema.omit({id: true});