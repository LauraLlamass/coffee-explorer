import { useEffect, useState } from "react";
import { getCoffees } from "./api/client";
import type { Coffee } from "./types/coffee";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCoffees()
      .then((data) => {
        setCoffees(data);
      })
      .catch(() => {
        setError("No se pudieron cargar los cafés");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Cargando cafés...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-600">{error}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 p-8 text-stone-900">
      <h1 className="mb-6 text-3xl font-bold">The black cat brew</h1>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </section>
    </main>
  );
}

export default App;