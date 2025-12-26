import { useState } from "react";
import { Phone, Zap, Grid3X3, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { ConnectionCard, ConnectionStatus } from "@/components/connections/ConnectionCard";
import { FilterTabs, FilterOption } from "@/components/connections/FilterTabs";

interface Connection {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  status: ConnectionStatus;
  eventCount?: number;
  lastEvent?: string;
  lastSuccessfulEvent?: string;
}

const connections: Connection[] = [
  {
    id: "vapi",
    name: "Vapi",
    description: "Voice agent platform",
    icon: <Phone className="w-5 h-5 text-blue-500" />,
    status: "connected",
    eventCount: 1247,
    lastEvent: "Last event: 2m ago",
  },
  {
    id: "retell",
    name: "Retell",
    description: "Voice agent platform",
    icon: <Phone className="w-5 h-5 text-pink-500" />,
    status: "attention",
    lastSuccessfulEvent: "3h ago",
  },
  {
    id: "n8n",
    name: "n8n",
    description: "Workflow automation",
    icon: <Zap className="w-5 h-5 text-orange-500" />,
    status: "disconnected",
  },
  {
    id: "mastra",
    name: "Mastra",
    description: "AI orchestration framework",
    icon: <Grid3X3 className="w-5 h-5 text-slate-500" />,
    status: "disconnected",
  },
  {
    id: "crewai",
    name: "CrewAI",
    description: "Multi-agent runtime",
    icon: <Bot className="w-5 h-5 text-violet-500" />,
    status: "disconnected",
  },
  {
    id: "pydantic",
    name: "Pydantic AI",
    description: "Typed AI workflow framework",
    icon: <Bot className="w-5 h-5 text-green-500" />,
    status: "disconnected",
  },
];

export default function Connections() {
  const [filter, setFilter] = useState<FilterOption>("all");

  const filteredConnections = connections.filter((conn) => {
    if (filter === "all") return true;
    if (filter === "connected") return conn.status === "connected";
    if (filter === "not-connected") return conn.status === "disconnected";
    if (filter === "error") return conn.status === "attention";
    return true;
  });

  return (
    <div className="p-8">
      <PageHeader
        title="Connections"
        description="Connect your AI platforms to start ingesting events."
        action={
          <Button>Connect Platform</Button>
        }
      />

      <div className="mb-6">
        <FilterTabs value={filter} onChange={setFilter} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredConnections.map((conn) => (
          <ConnectionCard
            key={conn.id}
            name={conn.name}
            description={conn.description}
            icon={conn.icon}
            status={conn.status}
            eventCount={conn.eventCount}
            lastEvent={conn.lastEvent}
            lastSuccessfulEvent={conn.lastSuccessfulEvent}
          />
        ))}
      </div>
    </div>
  );
}
