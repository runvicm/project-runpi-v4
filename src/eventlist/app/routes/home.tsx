import { useState } from "react";
import type { Route } from "./+types/home";
import EventCard from "./_events/EventCard";
import EventList from "./_events/EventList";
import { EVENTS } from "./_events/EVENTS";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {

const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const ALL_YEARS = [
    ...new Set(
      (EVENTS ?? []).flatMap((year) => year.year ?? [])
    )
  ];

  const ALL_TAGS = [
  ...new Set(
    (EVENTS ?? []).flatMap((yearItem) =>
      (yearItem.months ?? []).flatMap((m) =>
        (m.events ?? []).flatMap((ev) => ev.tags ?? [])
      )
    )
  ),
];

  return (
    <div className="page mx-auto max-w-2xl px-5">
      <header className="navbar px-0 pt-5">
        <div className="flex-1 text-lg font-semibold tracking-tight">Event List</div>
        <a className="btn btn-sm btn-outline" href="#">+ Submit an event</a>
      </header>
  
      <main>
        <section className="flex flex-col gap-4 py-8">
          <p className="text-sm font-medium text-(--color-primary)">Anime x Cosplay x Games x Pop Culture · PH</p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Every meetup, year by year.</h1>
  
          <nav className="flex flex-wrap gap-2" aria-label="Years">
            {ALL_YEARS.map((year) => (

            <a key={year} className="btn btn-sm btn-outline rounded-full" href={`#y${year}`}>{year}</a>
            ))}
      
          </nav>
  
          <form className="filter" aria-label="Filter by type">
          <input className="btn btn-sm btn-square rounded-full filter-reset" type="reset" value="×" aria-label="Show all" onClick={() => setSelectedTag(null)} />
            {ALL_TAGS.map((tag) => (
              <input key={tag} className="btn btn-sm rounded-full" type="radio" name="filter" id={`f-${tag}`} aria-label={tag}
      checked={selectedTag === tag}
      onChange={() => setSelectedTag(tag)}/>
            ))}
          </form>
        </section>

        <EventList selectedTag={selectedTag} />
  
      </main>
    </div>
  
  )
}
