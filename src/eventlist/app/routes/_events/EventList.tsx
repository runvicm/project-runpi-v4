import { Link } from "react-router";
import { EVENTS } from "./EVENTS";
import { Countdown, DayAndWeekday, getCountdown } from "./EventDate";
import { IconCalendarEvent, IconChevronRight, IconClock, IconMapPin } from "@tabler/icons-react";
import { TagColor } from "./TagColor";


export default function EventList({ selectedTag }: { selectedTag?: string | null }) {
  return (
    <>
    {EVENTS
  .filter(
    (year) =>
      !selectedTag ||
      year.months.some((month) =>
        month.events.some((event) => event.tags.includes(selectedTag))
      )
  )
  .map((year) => (
    <section key={year.year} id={`y${year.year}`} className="year mb-12 scroll-mt-4">
      <h2 className="mb-2 text-3xl font-semibold tracking-tight">{year.year}</h2>

      {year.months
        .filter(
          (month) =>
            !selectedTag ||
            month.events.some((event) => event.tags.includes(selectedTag))
        )
        .map((month) => (
          <div key={month.month} className="month">
            <h3 className="mt-5 mb-1 text-xs font-semibold uppercase tracking-widest text-(--color-primary)">{month.month}</h3>

            {month.events
              .filter(
                (event) => !selectedTag || event.tags.includes(selectedTag)
              )
              .map((event) => {
              
              const { day, weekday } = DayAndWeekday(event.start, event.end);

              return (

             
              <Link
                  key={event.slug}
                  to={`/events/${event.slug}`}
                  className={`ev flex items-center gap-4 border-b border-neutral-200 py-4 ${getCountdown(event.start, event.end).live ? "live" : ""}`}
                >
               
                <div className="min-w-0 flex-1">
           
                   
                    
                    
                    <div className="flex gap-1 mb-1">
                      <IconCalendarEvent size={20}/>
                      <span className="whitespace-nowrap text-xl font-medium leading-none">{day}</span>
                      <span className="mt-1 whitespace-nowrap text-xs text-neutral-500 flex-1">{weekday}</span>
                     <Countdown start={event.start} end={event.end} />
                    </div>
                


                    <h4 className="text-base font-semibold leading-snug">{event.name}</h4>
                  <p className="mt-1 flex items-center gap-2 text-sm text-neutral-500"><IconMapPin size={16} /><span className="min-w-0">{event.venue}</span></p>
                  <p className="flex items-center gap-2 text-sm text-neutral-500"><IconClock size={16}/>{event.time}  </p>
                  <p className="mt-2 flex flex-wrap items-center gap-1.5">
                    {event.tags.map((tag) => {
                      const hex = TagColor(tag);
                      return (
                        <span
                          key={tag}
                          className="badge badge-sm font-medium"
                          style={{
                            color: hex,
                            backgroundColor: `${hex}1A`,
                            borderColor: `${hex}4D`,
                          }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </p>
                </div>
               <IconChevronRight size={20} />
              </Link>
             )})}
          </div>
        ))}

      </section>
    ))}
    </>
  );
}

