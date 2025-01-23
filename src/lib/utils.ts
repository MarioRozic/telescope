import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { CARDS } from "./consts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(
  num: number,
  currency: string,
  currencyDisplay: keyof Intl.NumberFormatOptionsCurrencyDisplayRegistry = "narrowSymbol"
) {
  return new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency,
    currencyDisplay,
  }).format(num);
}

export function splitCoordinates(coordinates: string) {
  const [lat, lng] = coordinates.split(",").map(Number);
  return { lat, lng };
};

export function populateLocalStorageWithCards() {
  const storedCards = localStorage.getItem("cards");

  // Only populate if no cards are already stored in localStorage
  if (!storedCards) {
    localStorage.setItem("cards", JSON.stringify(CARDS));
  }
}
