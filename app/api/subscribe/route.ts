import { NextRequest, NextResponse } from "next/server";
import client from "@sendgrid/client";
if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY is not set in the environment variables");
}
client.setApiKey(process.env.SENDGRID_API_KEY);

// setApiKey(process.env.SENDGRID_API_KEY);

function isValidEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  console.log(email);
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email!" }, { status: 400 });
  }
  //   return new Response("dfsfsdf");

  const data = {
    list_ids: ["b0c1e2a2-c0f5-42ad-86d1-22306413f364"],
    contacts: [
      {
        email: email,
      },
    ],
  };

  const requestOptions = {
    url: "/v3/marketing/contacts",
    method: "PUT",
    body: data,
  };

  try {
    const [response] = await client.request(requestOptions);

    return NextResponse.json(response.body, { status: response.statusCode });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
