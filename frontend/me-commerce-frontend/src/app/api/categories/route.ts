import { DevConfig } from "@/dev-config";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`${DevConfig.DEV_API_URL}/categories`);
    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch categories" },
        { status: res.status }
      );
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server error ${error}` },
      { status: 500 }
    );
  }
}
