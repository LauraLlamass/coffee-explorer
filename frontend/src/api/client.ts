import type { Coffee } from "../types/coffee.js";

export async function getCoffees(): Promise<Coffee[]> {
  const response = await fetch("http://localhost:3000/api/v1/coffees");

  if (!response.ok) {
    throw new Error("Error fetching coffees");
  }

  return response.json();
}