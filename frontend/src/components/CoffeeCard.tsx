import type { Coffee } from "../types/coffee";

interface Props {
  coffee: Coffee;
}

function CoffeeCard({ coffee }: Props) {
  return (
    <article className="rounded-xl border bg-white p-4 shadow-sm">
      <img
        src={coffee.image}
        alt={coffee.name}
        className="mb-4 h-48 w-full rounded-lg object-cover"
      />

      <h2 className="text-xl font-semibold">{coffee.name}</h2>
      <p className="text-sm text-stone-600">{coffee.origin}</p>

      <p className="mt-2 text-sm">
        Intensidad: {coffee.intensity}
      </p>

      <p className="text-sm">
        Acidez: {coffee.acidity}
      </p>

      <a
        href={coffee.amazonUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block rounded-lg bg-stone-900 px-4 py-2 text-white"
      >
        Ver en Amazon
      </a>
    </article>
  );
}

export default CoffeeCard;