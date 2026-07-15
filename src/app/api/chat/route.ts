import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message, vehicle } = await req.json();

  // Replace with your Spring Boot / LLM backend call
  const res = await fetch(`${process.env.BACKEND_URL}/api/diagnose`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, vehicle }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}