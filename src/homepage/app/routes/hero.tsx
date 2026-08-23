import { Check, FileCode, Rocket, Route, Server, Wind } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";


const stack = [
  { icon: Server, label: "Laravel" },
  { icon: Route, label: "React Router" },
  { icon: FileCode, label: "TypeScript" },
  { icon: Wind, label: "Tailwind CSS" },
];
 
export function Hero() {
  return (
    <section className="border-b bg-muted/40">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-6 py-24 text-center sm:py-32">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Check className="h-4 w-4" strokeWidth={2.5} />
        </span>
 
        <Badge variant="secondary" className="tracking-wide text-primary">
          Full-stack developer
        </Badge>
 
        <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-6xl">
          Project RunPi
        </h1>
 
        <p className="max-w-xl text-lg text-muted-foreground">
          I build real, working web apps with React Router 7 and Laravel,
          tailored to what you actually need. Hit me up.
        </p>
 
        <div className="mt-4 flex flex-col items-center gap-3">
          <p className="text-sm text-muted-foreground">
            Proof of concept? This site runs on it.
          </p>
          <div className="flex items-center gap-4">
            {stack.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-1.5 rounded-full border bg-background px-3 py-1 text-xs text-foreground/70"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </span>
            ))}
          </div>
        </div>
 
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href="/services">
              <Rocket className="h-4 w-4" />
              Services
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/your-username/project-runpi" target="_blank" rel="noreferrer">
              Repository
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
