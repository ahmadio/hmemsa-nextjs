import { PartnerForm } from "@/components/partner/partner-form";
import { PartnerBenefits } from "@/components/partner/partner-benefits";
import { PageHeader } from "@/components/page-header";

export default function PartnerPage() {
  return (
    <>
      <PageHeader
        title="Partner With Us"
        description="Join forces with Hmemsa to create lasting impact in Moroccan children's lives through strategic partnerships and collaborative initiatives."
      />

      <div className="content-wrapper py-12">
        <PartnerBenefits />
        <div className="mt-16">
          <PartnerForm />
        </div>
      </div>
    </>
  );
}
