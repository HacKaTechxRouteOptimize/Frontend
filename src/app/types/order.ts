import { Recipient } from "./recipe";

export interface Order {
  id: number;
  startTimeWindow: string;
  endTimeWindow: string;
  capacity?: number;
  // recipient: Recipient;
  tagSkill?: string[];
  type: "pick up" | "delivery";
  priority: "critical" | "high" | "medium" | "low";
}
