import { FileText } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { EmptyState } from "@/components/layout/EmptyState";

export default function Activity() {
  return (
    <div className="p-8 h-full">
      <PageHeader
        title="Activity"
        description="Monitor event stream and troubleshoot issues."
      />
      <EmptyState
        icon={FileText}
        title="No activity yet"
        description="Events will appear here once platforms are connected."
      />
    </div>
  );
}
