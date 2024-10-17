import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - createdAt.getTime()) / 1000
  );

  const timeIntervals: { interval: number; label: string }[] = [
    { interval: 60, label: "second" },
    { interval: 60 * 60, label: "minute" },
    { interval: 60 * 60 * 24, label: "hour" },
    { interval: 60 * 60 * 24 * 7, label: "day" },
    { interval: 60 * 60 * 24 * 30, label: "week" },
    { interval: 60 * 60 * 24 * 365, label: "month" },
    { interval: Infinity, label: "year" },
  ];

  for (let i = 0; i < timeIntervals.length; i++) {
    const { interval, label } = timeIntervals[i];
    if (diffInSeconds < interval) {
      const value = Math.floor(
        diffInSeconds / (timeIntervals[i - 1]?.interval || 1)
      );
      return `${value} ${label}${value !== 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};

export const formatAndDivideNumber = (num: number): string => {
  if (num >= 1000000) {
    const formattedNum = (num / 1000000).toFixed(1);
    return `${formattedNum}M`;
  } else if (num >= 1000) {
    const formattedNum = (num / 1000).toFixed(1);
    return `${formattedNum}K`;
  } else {
    return num.toString();
  }
};
