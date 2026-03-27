import { Request, Response } from "express";
import { getAllCoffees, getCoffeeById } from "../services/coffee-service";

export function getCoffees(_req: Request, res: Response) {
  const data = getAllCoffees();
  res.status(200).json(data);
}

export function getCoffee(req: Request, res: Response) {
  const coffee = getCoffeeById(req.params.id);

  if (!coffee) {
    res.status(404).json({ message: "Coffee not found" });
    return;
  }

  res.status(200).json(coffee);
}