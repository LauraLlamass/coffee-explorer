import { coffees } from "../data/coffee";

export function getAllCoffees() {
  return coffees;
}

export function getCoffeeById(id: string) {
  return coffees.find((coffee) => coffee.id === id);
}