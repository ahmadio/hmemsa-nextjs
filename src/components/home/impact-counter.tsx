"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Users, GraduationCap, HeartPulse, School } from "lucide-react";

const stats = [
  {
    name: "Children Helped",
    value: 5000,
    icon: Users,
    suffix: "+",
  },
  {
    name: "Education Programs",
    value: 25,
    icon: GraduationCap,
    suffix: "",
  },
  {
    name: "Healthcare Initiatives",
    value: 15,
    icon: HeartPulse,
    suffix: "",
  },
  {
    name: "Schools Supported",
    value: 30,
    icon: School,
    suffix: "+",
  },
];

export function ImpactCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="w-full bg-primary py-16">
      <div className="container">
        <div
          ref={ref}
          className="grid grid-cols-2 gap-8 text-primary-foreground md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex flex-col items-center justify-center text-center"
            >
              <stat.icon className="h-8 w-8 mb-4 opacity-80" />
              <div className="text-3xl font-bold md:text-4xl">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} />
                ) : (
                  <span>0</span>
                )}
                {stat.suffix}
              </div>
              <div className="mt-2 text-sm opacity-80">{stat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}