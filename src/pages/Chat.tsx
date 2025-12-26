import { MessageSquare } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { EmptyState } from "@/components/layout/EmptyState";

export default function Chat() {
  return (
    <div className="p-8 h-full">
      <PageHeader
        title="Chat"
        description="Build and edit dashboards with your AI assistant."
      />
      <EmptyState
        icon={MessageSquare}
        title="Chat workspace"
        description="Your AI editing surface will appear here. We'll wire CopilotKit in the next step."
      />
    </div>
  );
}
