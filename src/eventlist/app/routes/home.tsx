import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
  

     <div className="page mx-auto max-w-3xl px-5">
 
    <header className="navbar px-0 pt-5">
      <div className="flex-1">
        <span className="bg-neutral text-primary font-display px-3 py-1 text-2xl tracking-wide">EVENT LIST</span>
      </div>
      <a className="btn btn-outline rounded-full" href="#">+ Submit an event</a>
    </header>
 
    <main>
      <section className="flex flex-col gap-4 py-8">
        <p className="text-sm font-bold tracking-[0.14em]">ANIME × COSPLAY x GAMES x J-CULTURE · PH</p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Every meetup, year by year.</h1>
 
        <nav className="flex flex-wrap gap-2" aria-label="Years">
          <a className="btn btn-outline rounded-full" href="#y2026">2026</a>
          <a className="btn btn-outline rounded-full" href="#y2027">2027</a>
        </nav>
 
        <form className="filter" aria-label="Filter by type">
          <input className="btn btn-square rounded-full filter-reset" type="reset" value="×" aria-label="Show all" />
        <input className="btn rounded-full" type="radio" name="filter" id="f-cosplay" aria-label="Cosplay" />
        <input className="btn rounded-full" type="radio" name="filter" id="f-meetup" aria-label="Meetups" />
        <input className="btn rounded-full" type="radio" name="filter" id="f-convention" aria-label="Conventions" />
        </form>
      </section>
 
    <section id="y2026" className="year mb-10">
      <h2 className="font-display text-6xl sm:text-7xl mb-2">2026</h2>
      <ul className="ml-2.5 border-l-4 border-(--color-base-content)">
        <li className="ev relative pl-7" data-start="2026-12-06" data-end="2026-12-06" data-type="cosplay">
          <span className="absolute top-1/2 -left-2.75 size-4.5 -translate-y-1/2 rounded-full border-4 border-(--color-base-content) bg-(--color-secondary)" aria-hidden="true"></span>
          <div>
            <div className="flex flex-wrap items-center gap-4 py-4">
              <div className="w-28 shrink-0 rounded-lg border-2 border-(--color-base-content) px-2 py-2 text-center">
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Dec</div>
                <div className="font-display text-4xl leading-none">06</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Sun</div>
              </div>
              <div className="min-w-0 flex-1 basis-48">
                <span className="badge badge-secondary gap-1.5 font-bold uppercase"><svg className="size-3 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>Cosplay</span> <span className="countdown badge badge-outline font-bold empty:hidden"></span>
                <h3 className="my-2 text-xl font-bold leading-tight">Anime Event Name 2026</h3>
                <p className="flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>SMX Convention Center, Pasay City</p>
                <p className="mt-1 flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>11am – 8pm</p>
              </div>
              <a href="#event-detail" className="btn btn-neutral rounded-full w-full sm:w-auto">Details →</a>
            </div>
          </div>
        </li>
        <li className="ev relative pl-7" data-start="2026-12-13" data-end="2026-12-13" data-type="meetup">
          <span className="absolute top-1/2 -left-2.75 size-4.5 -translate-y-1/2 rounded-full border-4 border-(--color-base-content) bg-(--color-accent)" aria-hidden="true"></span>
          <div>
            <div className="flex flex-wrap items-center gap-4 py-4">
              <div className="w-28 shrink-0 rounded-lg border-2 border-(--color-base-content) px-2 py-2 text-center">
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Dec</div>
                <div className="font-display text-4xl leading-none">13</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Sun</div>
              </div>
              <div className="min-w-0 flex-1 basis-48">
                <span className="badge badge-accent gap-1.5 font-bold uppercase"><svg className="size-3 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.5 0 4 2 4 5"/></svg>Meetup</span> <span className="countdown badge badge-outline font-bold empty:hidden"></span>
                <h3 className="my-2 text-xl font-bold leading-tight">[Event name]</h3>
                <p className="flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>[Venue], [City]</p>
                <p className="mt-1 flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>[Time]</p>
              </div>
              <a href="#" className="btn btn-neutral rounded-full w-full sm:w-auto">Details →</a>
            </div>
          </div>
        </li>
        <li className="ev relative pl-7" data-start="2026-12-18" data-end="2026-12-20" data-type="convention">
          <span className="absolute top-1/2 -left-2.75 size-4.5 -translate-y-1/2 rounded-full border-4 border-(--color-base-content) bg-(--color-primary)" aria-hidden="true"></span>
          <div>
            <div className="flex flex-wrap items-center gap-4 py-4">
              <div className="w-28 shrink-0 rounded-lg border-2 border-(--color-base-content) px-2 py-2 text-center">
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Dec</div>
                <div className="font-display text-4xl leading-none whitespace-nowrap">18–20</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70 whitespace-nowrap">Fri–Sun</div>
              </div>
              <div className="min-w-0 flex-1 basis-48">
                <span className="badge badge-primary gap-1.5 font-bold uppercase"><svg className="size-3 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V5l9-2v18M13 8h7v13M8 9h1M8 13h1M8 17h1"/></svg>Convention</span> <span className="countdown badge badge-outline font-bold empty:hidden"></span>
                <h3 className="my-2 text-xl font-bold leading-tight">[Event name]</h3>
                <p className="flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>[Venue], [City]</p>
                <p className="mt-1 flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>[Time]</p>
              </div>
              <a href="#" className="btn btn-neutral rounded-full w-full sm:w-auto">Details →</a>
            </div>
          </div>
        </li>
      </ul>
    </section>
 
    <section id="y2027" className="year mb-10">
      <h2 className="font-display text-6xl sm:text-7xl mb-2">2027</h2>
      <ul className="ml-2.5 border-l-4 border-(--color-base-content)">
        <li className="ev relative pl-7" data-start="2027-01-17" data-end="2027-01-17" data-type="meetup">
          <span className="absolute top-1/2 -left-2.75 size-4.5 -translate-y-1/2 rounded-full border-4 border-(--color-base-content) bg-(--color-accent)" aria-hidden="true"></span>
          <div>
            <div className="flex flex-wrap items-center gap-4 py-4">
              <div className="w-28 shrink-0 rounded-lg border-2 border-(--color-base-content) px-2 py-2 text-center">
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Jan</div>
                <div className="font-display text-4xl leading-none">17</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Sun</div>
              </div>
              <div className="min-w-0 flex-1 basis-48">
                <span className="badge badge-accent gap-1.5 font-bold uppercase"><svg className="size-3 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.5 0 4 2 4 5"/></svg>Meetup</span> <span className="countdown badge badge-outline font-bold empty:hidden"></span>
                <h3 className="my-2 text-xl font-bold leading-tight">[Event name]</h3>
                <p className="flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>[Venue], [City]</p>
                <p className="mt-1 flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>[Time]</p>
              </div>
              <a href="#" className="btn btn-neutral rounded-full w-full sm:w-auto">Details →</a>
            </div>
          </div>
        </li>
        <li className="ev relative pl-7" data-start="2027-03-07" data-end="2027-03-07" data-type="cosplay">
          <span className="absolute top-1/2 -left-2.75 size-4.5 -translate-y-1/2 rounded-full border-4 border-(--color-base-content) bg-(--color-secondary)" aria-hidden="true"></span>
          <div>
            <div className="flex flex-wrap items-center gap-4 py-4">
              <div className="w-28 shrink-0 rounded-lg border-2 border-(--color-base-content) px-2 py-2 text-center">
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Mar</div>
                <div className="font-display text-4xl leading-none">07</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Sun</div>
              </div>
              <div className="min-w-0 flex-1 basis-48">
                <span className="badge badge-secondary gap-1.5 font-bold uppercase"><svg className="size-3 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>Cosplay</span> <span className="countdown badge badge-outline font-bold empty:hidden"></span>
                <h3 className="my-2 text-xl font-bold leading-tight">[Event name]</h3>
                <p className="flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>[Venue], [City]</p>
                <p className="mt-1 flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>[Time]</p>
              </div>
              <a href="#" className="btn btn-neutral rounded-full w-full sm:w-auto">Details →</a>
            </div>
          </div>
        </li>
        <li className="ev relative pl-7" data-start="2027-06-13" data-end="2027-06-13" data-type="convention">
          <span className="absolute top-1/2 -left-2.75 size-4.5 -translate-y-1/2 rounded-full border-4 border-(--color-base-content) bg-(--color-primary)" aria-hidden="true"></span>
          <div>
            <div className="flex flex-wrap items-center gap-4 py-4">
              <div className="w-28 shrink-0 rounded-lg border-2 border-(--color-base-content) px-2 py-2 text-center">
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Jun</div>
                <div className="font-display text-4xl leading-none">13</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Sun</div>
              </div>
              <div className="min-w-0 flex-1 basis-48">
                <span className="badge badge-primary gap-1.5 font-bold uppercase"><svg className="size-3 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 21V5l9-2v18M13 8h7v13M8 9h1M8 13h1M8 17h1"/></svg>Convention</span> <span className="countdown badge badge-outline font-bold empty:hidden"></span>
                <h3 className="my-2 text-xl font-bold leading-tight">[Event name]</h3>
                <p className="flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>[Venue], [City]</p>
                <p className="mt-1 flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>[Time]</p>
              </div>
              <a href="#" className="btn btn-neutral rounded-full w-full sm:w-auto">Details →</a>
            </div>
          </div>
        </li>
        <li className="ev relative pl-7" data-start="2027-10-24" data-end="2027-10-24" data-type="cosplay">
          <span className="absolute top-1/2 -left-2.75 size-4.5 -translate-y-1/2 rounded-full border-4 border-(--color-base-content) bg-(--color-secondary)" aria-hidden="true"></span>
          <div>
            <div className="flex flex-wrap items-center gap-4 py-4">
              <div className="w-28 shrink-0 rounded-lg border-2 border-(--color-base-content) px-2 py-2 text-center">
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Oct</div>
                <div className="font-display text-4xl leading-none">24</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-70">Sun</div>
              </div>
              <div className="min-w-0 flex-1 basis-48">
                <span className="badge badge-secondary gap-1.5 font-bold uppercase"><svg className="size-3 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>Cosplay</span> <span className="countdown badge badge-outline font-bold empty:hidden"></span>
                <h3 className="my-2 text-xl font-bold leading-tight">[Event name]</h3>
                <p className="flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>[Venue], [City]</p>
                <p className="mt-1 flex items-center gap-2 text-sm opacity-80"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>[Time]</p>
              </div>
              <a href="#" className="btn btn-neutral rounded-full w-full sm:w-auto">Details →</a>
            </div>
          </div>
        </li>
      </ul>
    </section>
 
    </main>
    </div>
  
  )
}
