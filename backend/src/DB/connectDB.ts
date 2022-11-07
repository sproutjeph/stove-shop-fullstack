import mongoose from "mongoose";

export async function connectDB(URI: string) {
  mongoose.connect(URI);
}
