"use server";

import { connectToDatabase } from "../mogoose";

export async function createQuestion(params: any) {
  try {
    connectToDatabase();
  } catch (error) {}
}
