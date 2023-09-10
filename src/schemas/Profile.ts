import { Schema, model, models } from "mongoose";
import { IProfile } from "@/types/IProfile";

mongoose.Promise = global.Promise;

const profileSchema = new Schema<IProfile>(
  {
    account: {
      type: Schema.Types.ObjectId,
      ref: "Account",
      required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: [2, "Name must be at least 2 characters long"],
      maxlength: [32, "Name must be at most 32 characters long"],
    },
    language: {
      type: String,
      enum: ["en", "fr", "es", "de", "it", "pt"],
      default: "en",
    },
    viewingRestrictions: {
      maturityRating: {
        type: String,
        enum: ["U", "PG", "12", "15", "18"],
        default: "18",
      },
      titleRestrictions: {
        type: [String],
        default: [],
      },
    },
    profileLock: {
      type: Boolean,
      default: false,
    },
    gender: {
      type: Boolean,
      nullable: true,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Profile = models.Profile || model<IProfile>("Profile", profileSchema);

export default Profile;
