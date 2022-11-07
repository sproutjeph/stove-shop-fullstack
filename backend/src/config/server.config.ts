import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || process.env.PORT;
export const MONOGODB_URI = process.env.MONOGODB_URI as string;

export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_LIFETIME = process.env.JWT_LIFETIME;
