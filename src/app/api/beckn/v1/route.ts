import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "nharuvi-beckn",
    role: "BAP",
    protocol: "Beckn",
    version: "2.0.0",
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  console.log("Beckn request received:", body);

  return NextResponse.json({
    message: {
      ack: {
        status: "ACK",
      },
    },
  });
}