import z from "zod";

export const envSchema = z.object({
  DATABASE_HOST: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_PORT: z.number(),
  DATABASE_USER: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_URL: z.string(),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
});

export const ENV = envSchema.parse(process.env);