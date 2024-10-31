import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar } from "lucide-react";
import Image from "next/image";

export default function ProgramsPage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-2xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Our Programs
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover how were making a lasting impact through our comprehensive
          education and healthcare initiatives across Morocco.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <Card
            key={program.id}
            className="group hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <div className="mb-4">
                <Image
                  src={program.image}
                  alt={program.title}
                  width={0}
                  height={0}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  {program.location}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="mr-2 h-4 w-4" />
                  {program.participants} participants
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  {program.duration}
                </div>
              </div>
              <Button className="w-full mt-6">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const programs = [
  {
    id: 1,
    title: "Education First Initiative",
    description:
      "Providing quality education through modern learning facilities and dedicated teachers.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
    location: "Casablanca Region",
    participants: "1,200",
    duration: "Ongoing",
  },
  {
    id: 2,
    title: "Healthcare Access Program",
    description:
      "Ensuring children have access to essential medical care and preventive services.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    location: "Marrakech-Safi",
    participants: "850",
    duration: "Year-round",
  },
  {
    id: 3,
    title: "Nutrition & Wellness",
    description:
      "Supporting healthy development through balanced nutrition and wellness education.",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80",
    location: "Rabat-Salé-Kénitra",
    participants: "2,000",
    duration: "Continuous",
  },
];
