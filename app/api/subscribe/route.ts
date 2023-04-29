import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is not set in the environment variables");
}

function isValidEmail(email: string) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  console.log(email);
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email!" }, { status: 400 });
  }

  const data = {
    list_ids: ["b0c1e2a2-c0f5-42ad-86d1-22306413f364"],
    contacts: [
      {
        email: email,
      },
    ],
  };

  try {
    const response = await fetch(
      "https://api.sendgrid.com/v3/marketing/contacts",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const responseBody = await response.json();
    return NextResponse.json(responseBody, { status: response.status });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
