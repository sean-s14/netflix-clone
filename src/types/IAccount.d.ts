import { Types } from "mongoose";

interface IAccount {
  _id?: Types.ObjectId;
  profile: Types.ObjectId[];
  email: string;
  password: string;
  salt: string;
  phone?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
