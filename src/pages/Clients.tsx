import { Users } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { EmptyState } from "@/components/layout/EmptyState";

export default function Clients() {
  return (
    <div className="p-8 h-full">
      <PageHeader
        title="Clients"
        description="Manage your client accounts and health scores."
      />
      <EmptyState
        icon={Users}
        title="No clients yet"
        description="Add your first client to start tracking dashboard health."
      />
    </div>
  );
}
