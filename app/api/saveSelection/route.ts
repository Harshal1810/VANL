"use server";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { date, food } = await req.json();

    const response = await fetch("https://api.jsonbin.io/v3/b", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": "$2a$10$beK7lvBKl7.e4u5Z/SrKt.EafoVut9CoBcHouN4h3ZyOtAFTpbgNK", // Replace with your JSONBin secret key
      },
      body: JSON.stringify({ date, food }),
    });

    const data = await response.json();

    return NextResponse.json({ success: true, binId: data.metadata.id });
  } catch (error) {
    console.error("Error saving data to JSONBin:", error);
    return NextResponse.json({ success: false, error: "Failed to save data" }, { status: 500 });
  }
}
