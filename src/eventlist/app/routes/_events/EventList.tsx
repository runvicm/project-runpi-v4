import { Link } from "react-router";
import { EVENTS } from "./EVENTS";
import { Countdown, getCountdown } from "./hook/Countdown";
import { IconCalendarEvent, IconChevronRight, IconClock, IconMapPin } from "@tabler/icons-react";
import { TagColor } from "./TagColor";

export default function EventList() {
  return (
    <>
    {EVENTS.map((year) => (
      <section key={year.year} id={`y${year.year}`} className="year mb-12 scroll-mt-4">
        <h2 className="mb-2 text-3xl font-semibold tracking-tight">{year.year}</h2>

        {year.months.map((month) => (
          <div className="month">
            <h3 className="mt-5 mb-1 text-xs font-semibold uppercase tracking-widest text-(--color-primary)">{month.month}</h3>
          
            {month.events.map(event => (
              <Link
                  key={event.slug}
                  to={`/events/${event.slug}`}
                  className={`ev flex items-center gap-4 border-b border-neutral-200 py-4 ${getCountdown(event.start, event.end).live ? "live" : ""}`}
                >
               
                <div className="min-w-0 flex-1">
                  <div className="flex-1">
                    <div className="flex gap-1 mb-1">
                      <IconCalendarEvent size={20}/>
                      <span className="whitespace-nowrap text-xl font-medium leading-none">{event.day}</span>
                      <span className="mt-1 whitespace-nowrap text-xs text-neutral-500 flex-1">{event.weekday}</span>
                      <Countdown start={event.start} end={event.end} />
                    </div>
                    <h4 className="text-base font-semibold leading-snug">{event.name}</h4>
                  </div>
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
            ))}
          </div>
        ))}

      </section>
    ))}
    </>
  );
}

