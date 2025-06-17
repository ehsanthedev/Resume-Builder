// Simple version without dependencies
export const cn = (...classes: (string | undefined | boolean)[]) => 
  classes.filter(Boolean).join(' ');

/* OR the more powerful version (requires installing packages):
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
*/