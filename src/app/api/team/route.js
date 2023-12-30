import { NextRequest, NextResponse } from "next/server";
import connect from "@/lib/db";
import Team from "@/models/TeamModel";

connect();

export async function GET(request) {
  try {
    const jobs = await Team.find();
    return new NextResponse(JSON.stringify(jobs), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
}
