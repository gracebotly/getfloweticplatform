import { Settings as SettingsIcon } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { EmptyState } from "@/components/layout/EmptyState";

export default function Settings() {
  return (
    <div className="p-8 h-full">
      <PageHeader
        title="Settings"
        description="Manage branding, team, and account settings."
      />
      <EmptyState
        icon={SettingsIcon}
        title="Settings"
        description="Configuration options coming soon."
      />
    </div>
  );
}
