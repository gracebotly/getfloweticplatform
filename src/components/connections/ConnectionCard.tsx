import { MoreHorizontal, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ConnectionStatus = "connected" | "attention" | "disconnected";

interface ConnectionCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  status: ConnectionStatus;
  eventCount?: number;
  lastEvent?: string;
  lastSuccessfulEvent?: string;
  onConnect?: () => void;
  onViewDetails?: () => void;
  onViewActivity?: () => void;
  onTroubleshoot?: () => void;
}

export function ConnectionCard({
  name,
  description,
  icon,
  status,
  eventCount,
  lastEvent,
  lastSuccessfulEvent,
  onConnect,
  onViewDetails,
  onViewActivity,
  onTroubleshoot,
}: ConnectionCardProps) {
  return (
    <Card
      className={cn(
        "transition-all duration-200 hover:shadow-md",
        status === "attention" && "border-warning/50 bg-warning/5"
      )}
    >
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              {icon}
            </div>
            <div>
              <h3 className="font-medium text-foreground">{name}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Status */}
        <div className="mb-4">
          {status === "connected" && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span className="text-sm text-success font-medium">Connected</span>
              {lastEvent && (
                <span className="text-sm text-muted-foreground">• {lastEvent}</span>
              )}
            </div>
          )}
          {status === "attention" && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-warning">
                <AlertTriangle className="h-4 w-4" />
                <span className="text-sm font-medium">Attention needed</span>
                <span className="text-sm text-primary cursor-pointer hover:underline">
                  See details
                </span>
              </div>
              {lastSuccessfulEvent && (
                <p className="text-sm text-muted-foreground">
                  Last successful event: {lastSuccessfulEvent}
                </p>
              )}
            </div>
          )}
          {status === "disconnected" && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-muted-foreground" />
              <span className="text-sm text-muted-foreground">Not connected</span>
            </div>
          )}
        </div>

        {/* Stats (for connected) */}
        {status === "connected" && eventCount !== undefined && (
          <div className="mb-4">
            <p className="text-3xl font-semibold text-foreground">
              {eventCount.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">Today's events</p>
          </div>
        )}

        {/* Description for disconnected */}
        {status === "disconnected" && (
          <p className="text-sm text-muted-foreground mb-4">
            Connect to start receiving workflow events and automation data.
          </p>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          {status === "connected" && (
            <>
              <Button size="sm" onClick={onViewDetails}>
                View Details
              </Button>
              <Button variant="outline" size="sm" onClick={onViewActivity}>
                View Activity
              </Button>
            </>
          )}
          {status === "attention" && (
            <>
              <Button
                size="sm"
                className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                onClick={onTroubleshoot}
              >
                Troubleshoot
              </Button>
              <Button variant="outline" size="sm" onClick={onViewActivity}>
                View Activity
              </Button>
            </>
          )}
          {status === "disconnected" && (
            <Button size="sm" onClick={onConnect}>
              Connect
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
