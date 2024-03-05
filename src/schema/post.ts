import { integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const Post = pgTable('post', {
  id: serial('id').primaryKey(),
  title: varchar('varchar2', { length: 256 }),
  body: text("text"),
  likes: integer("int1"),
  created_at: timestamp('timestamp').defaultNow(),
  updated_at: timestamp('timestamp').defaultNow(),
//   autor
});