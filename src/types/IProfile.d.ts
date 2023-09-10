import { Types } from "mongoose";

enum MaturityRating {
  U = "U",
  PG = "PG",
  12 = "12",
  15 = "15",
  18 = "18",
}

interface IProfile {
  _id?: Types.ObjectId;
  account: Types.ObjectId;
  name: string;
  language: string;
  viewingRestrictions: {
    maturityRating: MaturityRating;
    titleRestrictions: string[];
  };
  profileLock: boolean;
  gender: boolean | null;
  createdAt?: Date;
  updatedAt?: Date;
}
