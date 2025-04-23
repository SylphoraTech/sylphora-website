import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and merges Tailwind classes properly.
 * Useful for conditional classNames and preventing conflicts.
 *
 * @param inputs Any number of class values
 * @returns A single merged string of class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
