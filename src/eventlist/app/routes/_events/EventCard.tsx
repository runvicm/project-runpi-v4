

export default function EventCard() {
  return (
    <a href="#event-detail" className="ev group flex items-center gap-4 border-b border-neutral-200 py-4" data-type="cosplay" data-start="2026-12-06" data-end="2026-12-06">
      <div className="w-16 shrink-0">
        <div className="whitespace-nowrap text-2xl font-medium leading-none">06</div>
        <div className="mt-1 whitespace-nowrap text-xs text-neutral-500">Sun</div>
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-base font-semibold leading-snug">Anime Event Name 2026</h4>
        <p className="mt-1 flex items-center gap-2 text-sm text-neutral-500"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg><span className="min-w-0">SMX Convention Center, Pasay City</span></p>
        <p className="flex items-center gap-2 text-sm text-neutral-500"><svg className="size-4 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>11am – 8pm</p>
        <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="tag"><svg className="size-3.5 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>Cosplay</span>
          <span className="countdown text-neutral-500 empty:hidden"></span>
        </p>
      </div>
      <svg className="size-5 text-neutral-400 transition group-hover:translate-x-0.5 shrink-0 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
    </a>
  )
}
