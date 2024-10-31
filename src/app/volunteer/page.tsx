export const dynamic = "force-dynamic";

import { VolunteerForm } from "@/components/volunteer/volunteer-form";
import { PageHeader } from "@/components/page-header";

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        title="Volunteer With Us"
        description="Join our mission to improve education and healthcare for Moroccan children. Your time and skills can make a real difference."
      />
      <div className="content-wrapper py-12">
        <VolunteerForm />
      </div>
    </>
  );
}
