import { Schema, model, models } from "mongoose";
import { IAccount } from "@/types/IAccount";

mongoose.Promise = global.Promise;

const accountSchema = new Schema<IAccount>(
  {
    profile: [
      {
        type: Schema.Types.ObjectId,
        ref: "Profile",
        required: true,
        validate: {
          validator: async (profile: IAccount["profile"]) => {
            const profileCount = await Account.countDocuments({
              profile,
            });
            return profileCount < 5;
          },
        },
      },
    ],
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    phone: String,
  },
  {
    timestamps: true,
  }
);

const Account = models.Account || model<IAccount>("Account", accountSchema);

export default Account;
