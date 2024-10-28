"use client";

import {
  FormControl,
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
import { Control } from "react-hook-form";

const projects = [
  {
    value: "education",
    label: "Education Programs",
    description:
      "Support quality education through modern learning facilities, teacher training, and educational resources.",
  },
  {
    value: "healthcare",
    label: "Healthcare Initiatives",
    description:
      "Provide essential medical care, preventive services, and health education to children in need.",
  },
  {
    value: "nutrition",
    label: "Nutrition Support",
    description:
      "Ensure children receive proper nutrition through meal programs and dietary education.",
  },
  {
    value: "general",
    label: "General Fund",
    description:
      "Support all our programs and allow us to allocate funds where they're needed most.",
  },
];

interface ProjectSelectorProps {
  control: Control<any>;
}

export function ProjectSelector({ control }: ProjectSelectorProps) {
  return (
    <FormItem>
      <FormLabel>Select Project</FormLabel>
      <Select>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Choose a project to support" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {projects.map((project) => (
            <SelectItem key={project.value} value={project.value}>
              <div className="flex flex-col">
                <span className="font-medium">{project.label}</span>
                <span className="text-sm text-muted-foreground">
                  {project.description}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
