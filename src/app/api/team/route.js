import { NextRequest, NextResponse } from "next/server";

import connect from "@/lib/db";
import Team from "@/models/TeamModel";
connect();

export async function GET() {
  try {
    const jobs = await Team.find();
    return NextResponse.json(jobs);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
