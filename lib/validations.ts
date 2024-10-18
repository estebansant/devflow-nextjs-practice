import { z } from "zod";

export const QuestionsSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(100),
  tags: z.array(z.string().min(2).max(15)).min(1).max(3), // This is a way to ask for 1 to 3 tags with at most 15 characters each tag
});
