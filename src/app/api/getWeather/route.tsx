import { NextRequest, NextResponse } from "next/server";

//Este endpoint es el responsable de traer la informacion del clima

export async function GET() {
  const url =
    "https://weatherapi-com.p.rapidapi.com/current.json?q=-38%2C-57.56";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "604c4a73bcmsh15c5083584728f9p1678acjsn3f28db565705",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return NextResponse.json({
      result,
    });
  } catch (error) {
    return NextResponse.json({
      error,
    });
  }
}
