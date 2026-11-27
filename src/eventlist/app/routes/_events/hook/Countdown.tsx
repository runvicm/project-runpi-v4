import { useEffect, useState } from "react";

type CountdownResult = { text: string; live?: boolean };
type CountdownProps = { start: string; end: string };

export function getCountdown(start: string, end: string): CountdownResult {
  const toDate = (iso: string) => {
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  };
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const s = toDate(start);
  const e = toDate(end);
  const days = Math.round((s.getTime() - today.getTime()) / 86400000);

  if (today > e) return { text: "Ended" };
  if (today >= s) {
    return { text: s.getTime() === e.getTime() ? "Today" : "Happening now", live: true };
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