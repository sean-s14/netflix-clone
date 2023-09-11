import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import connect from "@/utils/mongoConnect";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Account from "@/schemas/Account";

export async function POST(req: NextRequest) {
  try {
    await connect();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const account = await Account.findOne({ email });
    if (!account) {
      return NextResponse.json(
        {
          error:
            "Sorry, we can't find an account with this email address. Please try again or create a new account.",
          fields: ["email"],
        },
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return NextResponse.json(
        {
          error:
            "Incorrect password. Please try again or you can reset your password.",
          fields: ["password"],
        },
        { status: 400 }
      );
    }

    const payload = {
      account: {
        id: account._id,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    if (!token) {
      return NextResponse.json(
        { error: "Something went wrong when generating authentication token" },
        { status: 500 }
      );
    }

    const tomorrow = new Date(Date.now() + 864e5).toUTCString();
    return NextResponse.json(
      { message: "Success" },
      {
        status: 200,
        headers: {
          "Set-Cookie": `authToken=${token};Path=/;Expires=${tomorrow}`,
        },
      }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
