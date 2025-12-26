import { BarChart3 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { EmptyState } from "@/components/layout/EmptyState";

export default function Dashboards() {
  return (
    <div className="p-8 h-full">
      <PageHeader
        title="Dashboards"
        description="Build and manage client dashboards."
      />
      <EmptyState
        icon={BarChart3}
        title="No dashboards yet"
        description="Create your first dashboard to visualize agent data."
      />
    </div>
  );
}
