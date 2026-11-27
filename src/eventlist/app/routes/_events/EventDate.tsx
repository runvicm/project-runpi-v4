import { useEffect, useState } from "react";

type CountdownResult = { text: string; live?: boolean };
type CountdownProps = { start: string; end: string };

function parseLocalDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function getManilaToday(): Date {
  const manilaIso = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  return parseLocalDate(manilaIso);
}

export function getCountdown(start: string, end: string): CountdownResult {
  const today = getManilaToday();
  const s = parseLocalDate(start);
  const e = parseLocalDate(end);
  const days = Math.round((s.getTime() - today.getTime()) / 86400000);

  if (today > e) return { text: "Ended" };
  if (today >= s) {
    return {
      text: s.getTime() === e.getTime() ? "Today" : "Happening now",
      live: true,
    };
  }
  return { text: days === 1 ? "Tomorrow" : `In ${days} days` };
}

export function Countdown({ start, end }: CountdownProps) {
  const [c, setC] = useState<CountdownResult | null>(null);

  useEffect(() => {
    setC(getCountdown(start, end));
  }, [start, end]);

  if (!c) return null;

  return (
    <span className={`badge badge-sm ${c.live ? "badge-primary" : "badge-ghost"}`}>
      {c.text}
    </span>
  );
}

export function DayAndWeekday(startStr: string, endStr: string) {
  const start = parseLocalDate(startStr);
  const startDay = String(start.getDate()).padStart(2, "0");
  const startWk = start.toLocaleDateString("en-US", { weekday: "short" });

  if (endStr === startStr) {
    return { day: startDay, weekday: startWk };
  }

  const end = parseLocalDate(endStr);
  const endDay = String(end.getDate()).padStart(2, "0");
  const endMo = end.toLocaleDateString("en-US", { month: "short" });
  const endWk = end.toLocaleDateString("en-US", { weekday: "short" });

  const sameMonth =
    start.getFullYear() === end.getFullYear() &&
    start.getMonth() === end.getMonth();

  const crossesYear = start.getFullYear() !== end.getFullYear();

  const day = sameMonth
    ? `${startDay}–${endDay}`
    : crossesYear
      ? `${startDay} – ${endMo} ${endDay}, ${end.getFullYear()}`
      : `${startDay} – ${endMo} ${endDay}`;

  return {
    day,
    weekday: `${startWk}–${endWk}`,
  };
}