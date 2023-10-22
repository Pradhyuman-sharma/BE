import  { Schema, model } from "mongoose";

interface IUser {
  uniqueName: string;
  password: string;
}

const UserSchema = new Schema(
  {
    uniqueName: {
      type: String,
      required: true,
    },
   
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model<IUser>("Users", UserSchema);
export default User;