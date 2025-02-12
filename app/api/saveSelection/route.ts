"use server"

import { NextResponse } from "next/server";
import prisma from "../../lib/prisma"; // Assuming you are using Prisma

export async function POST(req: Request) {
  try {
    const { date, food } = await req.json();

    await prisma.selection.create({
      data: { date, food: JSON.stringify(food) },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Database Error:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
  }
}
