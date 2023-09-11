import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import connect from "@/utils/mongoConnect";
import bcrypt from "bcryptjs";
import Account from "@/schemas/Account";
import Profile from "@/schemas/Profile";

export async function POST(req: NextRequest) {
  try {
    await connect();

    const { name, email, password, password2 } = await req.json();

    if (!name || !email || !password || !password2) {
      const fields = [];
      if (!name) fields.push("name");
      if (!email) fields.push("email");
      if (!password) fields.push("password");
      if (!password2) fields.push("password2");
      return NextResponse.json(
        { error: "Missing fields", fields },
        { status: 400 }
      );
    }

    // Check if email is already in use
    const existingAccount = await Account.findOne({ email });
    if (existingAccount) {
      return NextResponse.json(
        { error: "Email is already in use", fields: ["email"] },
        { status: 400 }
      );
    }

    if (password !== password2) {
      return NextResponse.json(
        { error: "Passwords do not match", fields: ["password", "password2"] },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const account = await Account.create({
      email,
      password: hashedPassword,
      salt,
    });

    if (!account) {
      return NextResponse.json(
        { error: "Failed to create account" },
        { status: 500 }
      );
    }

    const profile = await Profile.create({
      account: account._id,
      name,
    });

    // If profile creation fails, delete the account and return an error
    if (!profile) {
      await Account.deleteOne({ _id: account._id });
      return NextResponse.json(
        { error: "Failed to create profile" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Your account has been created!" },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
