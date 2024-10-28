"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const projects = [
  {
    id: "education",
    name: "Education Access",
    description:
      "Provide educational resources and support to rural communities",
  },
  {
    id: "healthcare",
    name: "Healthcare Initiative",
    description: "Improve access to medical care in underserved areas",
  },
  {
    id: "nutrition",
    name: "Child Nutrition",
    description: "Support healthy meal programs for school children",
  },
  {
    id: "infrastructure",
    name: "School Infrastructure",
    description: "Build and renovate educational facilities",
  },
];

interface ProjectSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function ProjectSelect({ value, onChange }: ProjectSelectProps) {
  return (
    <FormItem>
      <FormLabel>Select Project</FormLabel>
      <FormControl>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger>
            <SelectValue placeholder="Choose a project to support" />
          </SelectTrigger>
          <SelectContent>
            {projects.map((project) => (
              <SelectItem key={project.id} value={project.id}>
                <div className="flex flex-col gap-1">
                  <div className="font-medium">{project.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {project.description}
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}
