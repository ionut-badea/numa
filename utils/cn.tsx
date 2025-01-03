import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export default function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(classes));
}
