import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

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