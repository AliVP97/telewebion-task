export * from "./mock-contents";
export * from "./navbar-items";

export const minutesToTimestamp = (minutes: number) =>
  `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(
    Math.floor(minutes % 60),
  ).padStart(2, "0")}.${String((minutes % 1) * 100).padStart(2, "0")}`;
