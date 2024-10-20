import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: Location;
  joinedAt: Date;
  reputation?: number;
  portfolioWebsite?: string;
  saved: Schema.Types.ObjectId[];
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  bio: { type: String },
  picture: { type: String, required: true },
  location: { type: Location },
  joinedAt: { type: Date, default: Date.now },
  reputation: { type: Number, default: 0 },
  portfolioWebsite: { type: String },
  saved: [{ type: Schema.Types.ObjectId, ref: "Question" }],
});

const User = models.User || model("User", UserSchema);

export default User;
